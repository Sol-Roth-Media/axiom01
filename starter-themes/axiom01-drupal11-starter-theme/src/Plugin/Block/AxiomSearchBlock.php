<?php

declare(strict_types=1);

namespace Drupal\axiom01_drupal11\Plugin\Block;

use Drupal\Component\Serialization\Json;
use Drupal\Component\Utility\Html;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an Axiom01 JSON-backed search block.
 *
 * @Block(
 *   id = "axiom01_search_block",
 *   admin_label = @Translation("Axiom01 Search (JSON)"),
 *   category = @Translation("Axiom01")
 * )
 */
final class AxiomSearchBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'results_json' => "[\n  {\"title\":\"Documentation\",\"url\":\"/docs\"},\n  {\"title\":\"Components\",\"url\":\"/docs/components-overview\"}\n]",
      'result_key' => 'title',
      'result_value' => 'url',
      'search_placeholder' => 'Search...',
      'empty_message' => 'No matching results.',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['results_json'] = [
      '#type' => 'textarea',
      '#title' => $this->t('JSON results'),
      '#description' => $this->t('Provide either an object of key/value pairs or an array of objects.'),
      '#default_value' => $this->configuration['results_json'],
      '#rows' => 8,
      '#required' => TRUE,
    ];
    $form['result_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label key'),
      '#description' => $this->t('Used only when JSON is an array of objects.'),
      '#default_value' => $this->configuration['result_key'],
      '#required' => TRUE,
    ];
    $form['result_value'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Value key'),
      '#description' => $this->t('Used only when JSON is an array of objects.'),
      '#default_value' => $this->configuration['result_value'],
      '#required' => TRUE,
    ];
    $form['search_placeholder'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Search placeholder'),
      '#default_value' => $this->configuration['search_placeholder'],
    ];
    $form['empty_message'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Empty-state message'),
      '#default_value' => $this->configuration['empty_message'],
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state): void {
    $decoded = Json::decode((string) $form_state->getValue('results_json'));
    if (!is_array($decoded)) {
      $form_state->setErrorByName('settings][results_json', $this->t('JSON results must decode to an object or array.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['results_json'] = trim((string) $form_state->getValue('results_json'));
    $this->configuration['result_key'] = trim((string) $form_state->getValue('result_key'));
    $this->configuration['result_value'] = trim((string) $form_state->getValue('result_value'));
    $this->configuration['search_placeholder'] = trim((string) $form_state->getValue('search_placeholder'));
    $this->configuration['empty_message'] = trim((string) $form_state->getValue('empty_message'));
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $search_block_id = Html::getUniqueId('axiom-search-block');
    $results = $this->normalizeResults(
      (string) $this->configuration['results_json'],
      (string) $this->configuration['result_key'],
      (string) $this->configuration['result_value']
    );

    return [
      '#type' => 'container',
      '#attributes' => [
        'data-axiom-search-block' => 'true',
        'data-search-block-id' => $search_block_id,
      ],
      '#attached' => [
        'library' => ['axiom01_drupal11/axiom_search_block'],
        'drupalSettings' => [
          'axiom01Drupal11' => [
            'searchBlocks' => [
              $search_block_id => [
                'results' => $results,
                'emptyMessage' => (string) ($this->configuration['empty_message'] ?: $this->t('No matching results.')),
              ],
            ],
          ],
        ],
      ],
      'search' => [
        '#type' => 'textfield',
        '#title' => $this->t('Search'),
        '#title_display' => 'invisible',
        '#attributes' => [
          'data-search-input' => 'true',
          'placeholder' => (string) ($this->configuration['search_placeholder'] ?: $this->t('Search...')),
          'autocomplete' => 'off',
        ],
      ],
      'results' => [
        '#type' => 'container',
        '#attributes' => [
          'data-search-results' => 'true',
          'aria-live' => 'polite',
        ],
      ],
    ];
  }

  /**
   * Convert JSON payload to search entries.
   *
   * @return array<int, array{label: string, value: string}>
   *   Normalized entries.
   */
  private function normalizeResults(string $json, string $result_key, string $result_value): array {
    $decoded = Json::decode($json);
    if (!is_array($decoded)) {
      return [];
    }

    $entries = [];
    if ($this->isAssociativeArray($decoded)) {
      foreach ($decoded as $label => $value) {
        $label = trim((string) $label);
        $value = trim((string) $value);
        if ($label !== '' && $value !== '') {
          $entries[] = ['label' => $label, 'value' => $value];
        }
      }
      return $entries;
    }

    foreach ($decoded as $item) {
      if (!is_array($item)) {
        continue;
      }
      $label = trim((string) ($item[$result_key] ?? ''));
      $value = trim((string) ($item[$result_value] ?? ''));
      if ($label !== '' && $value !== '') {
        $entries[] = ['label' => $label, 'value' => $value];
      }
    }
    return $entries;
  }

  /**
   * Determine whether an array uses non-sequential keys.
   */
  private function isAssociativeArray(array $array): bool {
    if ($array === []) {
      return FALSE;
    }
    return array_keys($array) !== range(0, count($array) - 1);
  }

}
