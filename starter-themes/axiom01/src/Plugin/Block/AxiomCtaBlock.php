<?php

declare(strict_types=1);

namespace Drupal\axiom01\Plugin\Block;

use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an Axiom01 CTA block.
 *
 * @Block(
 *   id = "axiom01_cta_block",
 *   admin_label = @Translation("Axiom01 CTA"),
 *   category = @Translation("Axiom01")
 * )
 */
final class AxiomCtaBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'title' => 'Ready to get started?',
      'body' => 'Build accessible Drupal experiences with Axiom01.',
      'primary_label' => 'Start now',
      'primary_url' => '/contact',
      'secondary_label' => 'Learn more',
      'secondary_url' => '/docs',
      'variant' => 'default',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#default_value' => $this->configuration['title'],
    ];
    $form['body'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Body'),
      '#default_value' => $this->configuration['body'],
      '#rows' => 4,
    ];
    $form['primary_label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Primary action label'),
      '#default_value' => $this->configuration['primary_label'],
    ];
    $form['primary_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Primary action URL'),
      '#default_value' => $this->configuration['primary_url'],
    ];
    $form['secondary_label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Secondary action label'),
      '#default_value' => $this->configuration['secondary_label'],
    ];
    $form['secondary_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Secondary action URL'),
      '#default_value' => $this->configuration['secondary_url'],
    ];
    $form['variant'] = [
      '#type' => 'select',
      '#title' => $this->t('Variant'),
      '#default_value' => $this->configuration['variant'],
      '#options' => [
        'default' => $this->t('Default'),
        'subtle' => $this->t('Subtle'),
        'inverse' => $this->t('Inverse'),
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['title'] = trim((string) $form_state->getValue('title'));
    $this->configuration['body'] = trim((string) $form_state->getValue('body'));
    $this->configuration['primary_label'] = trim((string) $form_state->getValue('primary_label'));
    $this->configuration['primary_url'] = trim((string) $form_state->getValue('primary_url'));
    $this->configuration['secondary_label'] = trim((string) $form_state->getValue('secondary_label'));
    $this->configuration['secondary_url'] = trim((string) $form_state->getValue('secondary_url'));
    $this->configuration['variant'] = trim((string) $form_state->getValue('variant'));
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $title = (string) ($this->configuration['title'] ?? '');
    $body = (string) ($this->configuration['body'] ?? '');
    $primary_label = (string) ($this->configuration['primary_label'] ?? '');
    $primary_url = $this->sanitizeUrl((string) ($this->configuration['primary_url'] ?? ''));
    $secondary_label = (string) ($this->configuration['secondary_label'] ?? '');
    $secondary_url = $this->sanitizeUrl((string) ($this->configuration['secondary_url'] ?? ''));

    return [
      '#type' => 'inline_template',
      '#template' => '<section class="cta" data-component="cta" data-variant="{{ variant }}">{% if title %}<h2>{{ title }}</h2>{% endif %}{% if body %}<p>{{ body }}</p>{% endif %}{% if primary_label and primary_url %}<p><a href="{{ primary_url }}">{{ primary_label }}</a></p>{% endif %}{% if secondary_label and secondary_url %}<p><a href="{{ secondary_url }}">{{ secondary_label }}</a></p>{% endif %}</section>',
      '#context' => [
        'variant' => (string) ($this->configuration['variant'] ?? 'default'),
        'title' => $title,
        'body' => $body,
        'primary_label' => $primary_label,
        'primary_url' => $primary_url,
        'secondary_label' => $secondary_label,
        'secondary_url' => $secondary_url,
      ],
    ];
  }

  /**
   * Removes dangerous protocols from configured URLs.
   */
  private function sanitizeUrl(string $url): string {
    $value = trim($url);
    if ($value === '') {
      return '';
    }
    return UrlHelper::stripDangerousProtocols($value);
  }

}
