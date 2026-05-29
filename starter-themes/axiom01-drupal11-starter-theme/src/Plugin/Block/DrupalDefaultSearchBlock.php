<?php

declare(strict_types=1);

namespace Drupal\axiom01_drupal11\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\search\Form\SearchBlockForm;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a wrapper block for Drupal core search.
 *
 * @Block(
 *   id = "axiom01_drupal_default_search_block",
 *   admin_label = @Translation("Drupal Default Search"),
 *   category = @Translation("Axiom01")
 * )
 */
final class DrupalDefaultSearchBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Creates a Drupal default search block plugin instance.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    private readonly FormBuilderInterface $formBuilder,
    private readonly ModuleHandlerInterface $moduleHandler,
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition): self {
    return new self(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('form_builder'),
      $container->get('module_handler'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    if (!$this->moduleHandler->moduleExists('search') || !class_exists(SearchBlockForm::class)) {
      return [
        '#markup' => '<p>' . $this->t('Enable Drupal core Search module to use this block.') . '</p>',
      ];
    }

    $form = $this->formBuilder->getForm(SearchBlockForm::class);
    return $form;
  }

}
