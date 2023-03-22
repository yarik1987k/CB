<?php
/**
 * Register theme taxonomies
 *
 * Please follow the same format for registering new taxonomies.
 *
 * Reference: https://developer.wordpress.org/reference/functions/register_taxonomy/
 *
 * @package    WordPress
 * @subpackage gbf
 * @since      gbf 1.0
 */

namespace BaseTheme\Taxonomies;

/**
 * Get taxonomy labels
 *
 * @param  string $singular  Singular name for the taxonomy.
 * @param  string $plural    Plural name for the taxonomy.
 * @param  string $menu_name Name the taxonomy will appear as in the admin sidebar.
 * @return array             Lables for registering a taxonomy.
 */
function get_labels( string $singular, string $plural = '', string $menu_name = '' ) : array {
	if ( empty( $plural ) ) {
		$plural = $singular . 's';
	}

	if ( empty( $menu_name ) ) {
		$menu_name = $plural;
	}

	return array(
		'name'                       => _x( $plural, 'Taxonomy General Name', 'gbf' ),
		'singular_name'              => _x( $singular, 'Taxonomy Singular Name', 'gbf' ),
		'menu_name'                  => __( $menu_name, 'gbf' ),
		'all_items'                  => __( 'All ' . $plural, 'gbf' ),
		'parent_item'                => __( 'Parent ' . $singular, 'gbf' ),
		'parent_item_colon'          => __( 'Parent ' . $singular . ':', 'gbf' ),
		'new_item_name'              => __( 'New ' . $singular . ' Name', 'gbf' ),
		'add_new_item'               => __( 'Add New ' . $singular, 'gbf' ),
		'edit_item'                  => __( 'Edit ' . $singular, 'gbf' ),
		'update_item'                => __( 'Update ' . $singular, 'gbf' ),
		'view_item'                  => __( 'View ' . $singular, 'gbf' ),
		'separate_items_with_commas' => __( 'Separate ' . strtolower( $plural ) . ' with commas', 'gbf' ),
		'add_or_remove_items'        => __( 'Add or remove ' . strtolower( $plural ), 'gbf' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'gbf' ),
		'popular_items'              => __( 'Popular ' . $plural, 'gbf' ),
		'search_items'               => __( 'Search ' . $plural, 'gbf' ),
		'not_found'                  => __( 'Not Found', 'gbf' ),
		'no_terms'                   => __( 'No ' . strtolower( $plural ), 'gbf' ),
		'items_list'                 => __( $plural . ' list', 'gbf' ),
		'items_list_navigation'      => __( $plural . ' list navigation', 'gbf' ),
	);
}

/**
 * Type
 */
function type() {
	$args = array(
		'labels'            => get_labels( 'Type' ),
		'hierarchical'      => false,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
	);

	register_taxonomy( 'type', array( 'post', 'gallery' ), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\type' );

 

function industries() {
	$args = array(
		'labels'            => get_labels( 'Industries' ),
		'hierarchical'      => true,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'industries', array( 'users_list' ), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\industries' );


 

function country() {
	$args = array(
		'labels'            => get_labels( 'Country', 'Countries' ),
		'hierarchical'      => false,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'country', array( 'users_list'), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\country' );
 
function city() {
	$args = array(
		'labels'            => get_labels( 'City', 'Cities' ),
		'hierarchical'      => false,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'city', array( 'users_list'), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\city' );


function competences() {
	$args = array(
		'labels'            => get_labels( 'Competences' ),
		'hierarchical'      => true,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'competences', array( 'users_list'), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\competences' );



function direction() {
	$args = array(
		'labels'            => get_labels( 'Direction' ),
		'hierarchical'      => false,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'direction', array( 'users_list'), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\direction' );


function expertise_level() {
	$args = array(
		'labels'            => get_labels( 'Expertise level' ),
		'hierarchical'      => false,
		'public'            => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'			=> true,
		'show_in_rest'		=> true,
	);

	register_taxonomy( 'expertise_level', array( 'users_list'), $args );
}
add_action( 'init', 'BaseTheme\Taxonomies\expertise_level' );