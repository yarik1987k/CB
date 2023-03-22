<?php
/**
 * Initialize core functionality.
 *
 * This file prepares all the core functionality that is required by the theme
 * to function. It should contain only includes, and Theme_Core class setup.
 *
 * @package    WordPress
 * @subpackage cardBook
 * @since      cardBook 1.0
 */

// Give access to all publicly visible functions offered by the core.

require_once 'functions.php'; 
recursive_include( __DIR__ . DIRECTORY_SEPARATOR . 'includes' );

