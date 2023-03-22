<?php
/**
 * Register theme post types
 *
 * Post types should always support revisions.
 * Please follow the same format for registering new post types.
 *
 * Reference: https://developer.wordpress.org/reference/functions/register_post_type/
 * Dashicons for menu_icon: https://developer.wordpress.org/resource/dashicons/
 *
 * @package    WordPress
 * @subpackage gbf
 * @since      gbf 1.0
 */

namespace BaseTheme\PostTypes;

/**
 * Get post type labels
 *
 * @param  string $singular  Singular name for the post type.
 * @param  string $plural    Plural name for the post type.
 * @param  string $menu_name Name the post type will appear as in the admin sidebar.
 * @return array             Lables for registering a post type.
 */
function get_labels( string $singular, string $plural = '', string $menu_name = '' ) : array {
	if ( empty( $plural ) ) {
		$plural = $singular . 's';
	}

	if ( empty( $menu_name ) ) {
		$menu_name = $plural;
	}

	return array(
		'name'                  => _x( $plural, 'Post Type General Name', 'gbf' ),
		'singular_name'         => _x( $singular, 'Post Type Singular Name', 'gbf' ),
		'menu_name'             => __( $menu_name, 'gbf' ),
		'name_admin_bar'        => __( $singular, 'gbf' ),
		'archives'              => __( $singular . ' Archives', 'gbf' ),
		'attributes'            => __( $singular . ' Attributes', 'gbf' ),
		'parent_item_colon'     => __( 'Parent ' . $singular, 'gbf' ),
		'all_items'             => __( 'All ' . $plural, 'gbf' ),
		'add_new_item'          => __( 'Add New ' . $singular, 'gbf' ),
		'add_new'               => __( 'Add New', 'gbf' ),
		'new_item'              => __( 'New ' . $singular, 'gbf' ),
		'edit_item'             => __( 'Edit ' . $singular, 'gbf' ),
		'update_item'           => __( 'Update ' . $singular, 'gbf' ),
		'view_item'             => __( 'View ' . $singular, 'gbf' ),
		'view_items'            => __( 'View ' . $plural, 'gbf' ),
		'search_items'          => __( 'Search ' . $singular, 'gbf' ),
		'not_found'             => __( 'Not found', 'gbf' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'gbf' ),
		'featured_image'        => __( 'Featured Image', 'gbf' ),
		'set_featured_image'    => __( 'Set featured image', 'gbf' ),
		'remove_featured_image' => __( 'Remove featured image', 'gbf' ),
		'use_featured_image'    => __( 'Use as featured image', 'gbf' ),
		'insert_into_item'      => __( 'Insert into ' . strtolower( $singular ), 'gbf' ),
		'uploaded_to_this_item' => __( 'Uploaded to this ' . strtolower( $singular ), 'gbf' ),
		'items_list'            => __( $plural . ' list', 'gbf' ),
		'items_list_navigation' => __( $plural . ' list navigation', 'gbf' ),
		'filter_items_list'     => __( 'Filter ' . strtolower( $plural ) . ' list', 'gbf' ),
	);
}

/**
 * Register Gallery post type.
 */
function gallery() {
	register_post_type(
		'gallery',
		array(
			'label'               => __( 'Gallery', 'gbf' ),
			'labels'              => get_labels( 'Gallery', 'Galleries' ),
			'supports'            => array( 'title', 'revisions' ),
			'taxonomies'          => array(),
			'public'              => false,
			'publicly_queryable'  => false,
			'show_ui'             => true,
			'exclude_from_search' => true,
			'menu_icon'           => 'dashicons-format-gallery',
			'has_archive'         => false,
		)
	);
}
function users() {
	register_post_type(
		'users_list',
		array(
			'label'               => __( 'Users', 'gbf' ),
			'labels'              => get_labels( 'User', 'Users' ),
			'supports'            => array( 'title', 'revisions','thumbnail','excerpt' ),
			'taxonomies'          => array(),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'exclude_from_search' => false,
			'menu_icon'           => 'dashicons-screenoptions',
			'has_archive'         => false,
			'show_in_rest'		  => true,
			'rewrite'			  => array( 'slug' => 'profile')
		)
	);
}

function companies(){
	register_post_type(
		'companies',
		array(
			'label'               => __( 'Companies', 'gbf' ),
			'labels'              => get_labels( 'Company', 'Companies' ),
			'supports'            => array( 'title', 'revisions','thumbnail','excerpt' ),
			'taxonomies'          => array(),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'exclude_from_search' => false,
			'menu_icon'           => 'dashicons-screenoptions',
			'has_archive'         => false,
			'show_in_rest'		  => true,
		)
	);
}
function communities(){
	register_post_type(
		'communities',
		array(
			'label'               => __( 'Communities', 'cardbook' ),
			'labels'              => get_labels( 'Community', 'Communities' ),
			'supports'            => array( 'title', 'revisions', 'editor','thumbnail','excerpt' ),
			'taxonomies'          => array(),
			'public'              => true,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'exclude_from_search' => false,
			'menu_icon'           => 'dashicons-screenoptions',
			'has_archive'         => false,
			'show_in_rest'		  => true,
		)
	);
}

add_action( 'init', 'BaseTheme\PostTypes\gallery' );
add_action( 'init', 'BaseTheme\PostTypes\users' );
add_action( 'init', 'BaseTheme\PostTypes\companies' );
add_action( 'init', 'BaseTheme\PostTypes\communities' );




