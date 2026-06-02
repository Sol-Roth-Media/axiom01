<?php

declare(strict_types=1);

namespace Drupal\axiom01_drupal11\Plugin\Block;

use Drupal\Component\Serialization\Json;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an Axiom carousel block.
 *
 * @Block(
 *   id = "axiom01_carousel_block",
 *   admin_label = @Translation("Axiom Carousel"),
 *   category = @Translation("Axiom01")
 * )
 */
final class AxiomCarouselBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration(): array {
    return [
      'title' => 'Featured content',
      'slides_json' => "[\n  {\"media\":\"\",\"alt\":\"\",\"heading\":\"Slide one\",\"text\":\"Slide details.\",\"link\":\"/\",\"link_label\":\"Read more\"}\n]",
      'autoplay' => FALSE,
      'timing' => 5000,
      'show_controls' => TRUE,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state): array {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Region label/title'),
      '#default_value' => $this->configuration['title'],
    ];
    $form['slides_json'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Slides JSON'),
      '#description' => $this->t('Each slide supports media, alt, heading, text, link, and link_label.'),
      '#default_value' => $this->configuration['slides_json'],
      '#rows' => 10,
      '#required' => TRUE,
    ];
    $form['autoplay'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Autoplay slides'),
      '#default_value' => (bool) $this->configuration['autoplay'],
    ];
    $form['timing'] = [
      '#type' => 'number',
      '#title' => $this->t('Autoplay timing (ms)'),
      '#default_value' => (int) $this->configuration['timing'],
      '#min' => 1000,
      '#step' => 500,
    ];
    $form['show_controls'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show controls and indicators'),
      '#default_value' => (bool) $this->configuration['show_controls'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockValidate($form, FormStateInterface $form_state): void {
    $decoded = Json::decode((string) $form_state->getValue('slides_json'));
    if (!is_array($decoded) || $decoded === []) {
      $form_state->setErrorByName('settings][slides_json', $this->t('Slides JSON must be a non-empty array.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state): void {
    $this->configuration['title'] = trim((string) $form_state->getValue('title'));
    $this->configuration['slides_json'] = trim((string) $form_state->getValue('slides_json'));
    $this->configuration['autoplay'] = (bool) $form_state->getValue('autoplay');
    $this->configuration['timing'] = max(1000, (int) $form_state->getValue('timing'));
    $this->configuration['show_controls'] = (bool) $form_state->getValue('show_controls');
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $slides = $this->normalizeSlides((string) ($this->configuration['slides_json'] ?? '[]'));
    if ($slides === []) {
      return [];
    }

    $id = Html::getUniqueId('axiom-carousel');
    return [
      '#type' => 'inline_template',
      '#template' => '<section data-axiom-carousel id="{{ id }}" data-autoplay="{{ autoplay }}" data-interval="{{ interval }}" aria-label="{{ title ?: "Carousel" }}">{% if title %}<h2>{{ title }}</h2>{% endif %}<div data-axiom-carousel-track role="region" aria-roledescription="carousel" aria-live="polite" tabindex="0">{% for slide in slides %}<article data-axiom-carousel-slide="{{ loop.index0 }}" aria-hidden="{{ loop.first ? "false" : "true" }}">{% if slide.media %}<img src="{{ slide.media }}" alt="{{ slide.alt }}" />{% endif %}{% if slide.heading %}<h3>{{ slide.heading }}</h3>{% endif %}{% if slide.text %}<p>{{ slide.text }}</p>{% endif %}{% if slide.link and slide.link_label %}<p><a href="{{ slide.link }}">{{ slide.link_label }}</a></p>{% endif %}</article>{% endfor %}</div>{% if show_controls %}<div data-axiom-carousel-controls><button type="button" data-axiom-carousel-prev aria-label="{{ "Previous slide"|t }}">{{ "Previous"|t }}</button><button type="button" data-axiom-carousel-next aria-label="{{ "Next slide"|t }}">{{ "Next"|t }}</button></div><ul data-axiom-carousel-indicators>{% for slide in slides %}<li><button type="button" data-axiom-carousel-indicator="{{ loop.index0 }}" aria-label="{{ "Go to slide"|t }} {{ loop.index }}" aria-current="{{ loop.first ? "true" : "false" }}">{{ loop.index }}</button></li>{% endfor %}</ul>{% endif %}</section>',
      '#context' => [
        'id' => $id,
        'title' => trim((string) ($this->configuration['title'] ?? '')),
        'autoplay' => !empty($this->configuration['autoplay']) ? 'true' : 'false',
        'interval' => max(1000, (int) ($this->configuration['timing'] ?? 5000)),
        'show_controls' => !empty($this->configuration['show_controls']),
        'slides' => $slides,
      ],
      '#attached' => [
        'library' => ['axiom01_drupal11/axiom_carousel_block'],
      ],
    ];
  }

  /**
   * @return array<int, array{media:string,alt:string,heading:string,text:string,link:string,link_label:string}>
   */
  private function normalizeSlides(string $json): array {
    $decoded = Json::decode($json);
    if (!is_array($decoded)) {
      return [];
    }

    $slides = [];
    foreach ($decoded as $slide) {
      if (!is_array($slide)) {
        continue;
      }
      $media = trim((string) ($slide['media'] ?? ''));
      $link = trim((string) ($slide['link'] ?? ''));
      $slides[] = [
        'media' => $media,
        'alt' => trim((string) ($slide['alt'] ?? '')),
        'heading' => trim((string) ($slide['heading'] ?? '')),
        'text' => trim((string) ($slide['text'] ?? '')),
        'link' => $link !== '' ? UrlHelper::stripDangerousProtocols($link) : '',
        'link_label' => trim((string) ($slide['link_label'] ?? 'Learn more')),
      ];
    }

    return $slides;
  }

}
