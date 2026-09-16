<?php

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function axiom01_drupal_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $form['axiom01_settings'] = [
    '#type' => 'details',
    '#title' => t('Axiom01 Settings'),
    '#open' => TRUE,
  ];

  $form['axiom01_settings']['default_color_theme'] = [
    '#type' => 'select',
    '#title' => t('Default Color Theme'),
    '#options' => [
      'system' => t('Follow System Preference'),
      'light' => t('Light Mode'),
      'dark' => t('Dark Mode'),
    ],
    '#default_value' => theme_get_setting('default_color_theme') ?: 'system',
    '#description' => t('Select the default color theme for the site.'),
  ];
}
