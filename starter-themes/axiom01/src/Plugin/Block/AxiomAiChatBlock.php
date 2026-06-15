<?php

declare(strict_types=1);

namespace Drupal\axiom01\Plugin\Block;

use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an Axiom01 AI chat block.
 *
 * @Block(
 *   id = "axiom01_ai_chat_block",
 *   admin_label = @Translation("Axiom01 AI Chat"),
 *   category = @Translation("Axiom01")
 * )
 */
final class AxiomAiChatBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'provider_mode' => 'auto',
      'endpoint_route' => '/axiom01-ai/chat',
      'system_prompt_preset' => 'default-assistant',
      'placeholder' => 'Ask a question...',
      'intro_text' => 'Ask for help with content and workflows.',
      'privacy_notice' => 'AI responses may be logged for safety and quality checks.',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['provider_mode'] = [
      '#type' => 'select',
      '#title' => $this->t('Provider mode'),
      '#default_value' => $this->configuration['provider_mode'],
      '#options' => [
        'auto' => $this->t('Auto'),
        'module' => $this->t('Drupal AI module adapter'),
        'mock' => $this->t('Mock'),
      ],
    ];
    $form['endpoint_route'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Endpoint route'),
      '#description' => $this->t('Provider-agnostic route handled by a companion module adapter.'),
      '#default_value' => $this->configuration['endpoint_route'],
    ];
    $form['system_prompt_preset'] = [
      '#type' => 'textfield',
      '#title' => $this->t('System prompt preset'),
      '#default_value' => $this->configuration['system_prompt_preset'],
    ];
    $form['placeholder'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Input placeholder'),
      '#default_value' => $this->configuration['placeholder'],
    ];
    $form['intro_text'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Intro text'),
      '#default_value' => $this->configuration['intro_text'],
      '#rows' => 3,
    ];
    $form['privacy_notice'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Privacy notice'),
      '#default_value' => $this->configuration['privacy_notice'],
      '#rows' => 3,
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['provider_mode'] = trim((string) $form_state->getValue('provider_mode'));
    $this->configuration['endpoint_route'] = trim((string) $form_state->getValue('endpoint_route'));
    $this->configuration['system_prompt_preset'] = trim((string) $form_state->getValue('system_prompt_preset'));
    $this->configuration['placeholder'] = trim((string) $form_state->getValue('placeholder'));
    $this->configuration['intro_text'] = trim((string) $form_state->getValue('intro_text'));
    $this->configuration['privacy_notice'] = trim((string) $form_state->getValue('privacy_notice'));
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $id = Html::getUniqueId('axiom01-ai-chat');
    return [
      '#type' => 'inline_template',
      '#template' => '<section data-axiom01-ai-chat data-provider-mode="{{ provider_mode }}" data-endpoint="{{ endpoint }}" data-system-prompt="{{ system_prompt_preset }}" aria-label="{{ "AI chat"|t }}">{% if intro_text %}<p>{{ intro_text }}</p>{% endif %}<ol data-axiom01-ai-chat-messages role="log" aria-live="polite" aria-label="{{ "Chat messages"|t }}"></ol><form data-axiom01-ai-chat-form><label for="{{ id }}">{{ "Message"|t }}</label><input id="{{ id }}" name="message" type="text" placeholder="{{ placeholder }}" required /><button type="submit">{{ "Send"|t }}</button></form><p data-axiom01-ai-chat-status role="status" aria-live="polite"></p>{% if privacy_notice %}<p>{{ privacy_notice }}</p>{% endif %}</section>',
      '#context' => [
        'id' => $id,
        'provider_mode' => (string) ($this->configuration['provider_mode'] ?? 'auto'),
        'endpoint' => UrlHelper::stripDangerousProtocols((string) ($this->configuration['endpoint_route'] ?? '')),
        'system_prompt_preset' => (string) ($this->configuration['system_prompt_preset'] ?? ''),
        'placeholder' => (string) ($this->configuration['placeholder'] ?? $this->t('Ask a question...')),
        'intro_text' => (string) ($this->configuration['intro_text'] ?? ''),
        'privacy_notice' => (string) ($this->configuration['privacy_notice'] ?? ''),
      ],
      '#attached' => [
        'library' => ['axiom01/axiom_ai_interfaces'],
      ],
    ];
  }

}
