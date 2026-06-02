<?php

declare(strict_types=1);

namespace Drupal\axiom01_drupal11\Plugin\Block;

use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an Axiom AI image generator block.
 *
 * @Block(
 *   id = "axiom01_ai_image_generator_block",
 *   admin_label = @Translation("Axiom AI Image Generator"),
 *   category = @Translation("Axiom01")
 * )
 */
final class AxiomAiImageGeneratorBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'endpoint_route' => '/axiom-ai/image',
      'model_preset' => 'default-image',
      'style_preset_list' => "photoreal\nillustration\nminimal",
      'output_size_preset' => '1024x1024',
      'moderation_notice' => 'Image prompts and outputs are filtered by moderation policy.',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['endpoint_route'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Endpoint route'),
      '#description' => $this->t('Provider-agnostic route handled by a companion module adapter.'),
      '#default_value' => $this->configuration['endpoint_route'],
    ];
    $form['model_preset'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Model preset'),
      '#default_value' => $this->configuration['model_preset'],
    ];
    $form['style_preset_list'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Style preset list'),
      '#description' => $this->t('One style preset per line.'),
      '#default_value' => $this->configuration['style_preset_list'],
      '#rows' => 4,
    ];
    $form['output_size_preset'] = [
      '#type' => 'select',
      '#title' => $this->t('Output size preset'),
      '#default_value' => $this->configuration['output_size_preset'],
      '#options' => [
        '512x512' => '512x512',
        '1024x1024' => '1024x1024',
        '1536x1024' => '1536x1024',
      ],
    ];
    $form['moderation_notice'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Moderation notice'),
      '#default_value' => $this->configuration['moderation_notice'],
      '#rows' => 3,
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['endpoint_route'] = trim((string) $form_state->getValue('endpoint_route'));
    $this->configuration['model_preset'] = trim((string) $form_state->getValue('model_preset'));
    $this->configuration['style_preset_list'] = trim((string) $form_state->getValue('style_preset_list'));
    $this->configuration['output_size_preset'] = trim((string) $form_state->getValue('output_size_preset'));
    $this->configuration['moderation_notice'] = trim((string) $form_state->getValue('moderation_notice'));
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $id = Html::getUniqueId('axiom-ai-image');

    return [
      '#type' => 'inline_template',
      '#template' => '<section data-axiom-ai-image data-endpoint="{{ endpoint }}" data-model-preset="{{ model_preset }}" aria-label="{{ "AI image generator"|t }}"><form data-axiom-ai-image-form><label for="{{ id }}">{{ "Prompt"|t }}</label><textarea id="{{ id }}" name="prompt" required></textarea><label for="{{ id }}-style">{{ "Style"|t }}</label><select id="{{ id }}-style" name="style">{% for style in styles %}<option value="{{ style }}">{{ style }}</option>{% endfor %}</select><label for="{{ id }}-size">{{ "Output size"|t }}</label><select id="{{ id }}-size" name="size"><option value="512x512" {{ default_size == "512x512" ? "selected" : "" }}>512x512</option><option value="1024x1024" {{ default_size == "1024x1024" ? "selected" : "" }}>1024x1024</option><option value="1536x1024" {{ default_size == "1536x1024" ? "selected" : "" }}>1536x1024</option></select><button type="submit">{{ "Generate image"|t }}</button></form><p data-axiom-ai-image-status role="status" aria-live="polite"></p><div data-axiom-ai-image-result role="region" aria-live="polite"></div>{% if moderation_notice %}<p>{{ moderation_notice }}</p>{% endif %}</section>',
      '#context' => [
        'id' => $id,
        'endpoint' => UrlHelper::stripDangerousProtocols((string) ($this->configuration['endpoint_route'] ?? '')),
        'model_preset' => (string) ($this->configuration['model_preset'] ?? ''),
        'styles' => $this->stylesFromConfiguration((string) ($this->configuration['style_preset_list'] ?? '')),
        'default_size' => (string) ($this->configuration['output_size_preset'] ?? '1024x1024'),
        'moderation_notice' => (string) ($this->configuration['moderation_notice'] ?? ''),
      ],
      '#attached' => [
        'library' => ['axiom01_drupal11/axiom_ai_interfaces'],
      ],
    ];
  }

  /**
   * @return array<int, string>
   */
  private function stylesFromConfiguration(string $styles): array {
    $items = array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $styles) ?: []));
    return $items !== [] ? array_values($items) : ['default'];
  }

}
