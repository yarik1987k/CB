<?php

/*

*	Plugin Name: Duplicate Post Page Menu & Custom Post Type

*	Description: The best plugin to duplicate post, page, menu and custom post type multiple times in a single click.

*	Author: Inqsys Technology

*	Version: 2.2.0

*	Text Domain: duplicate-ppmc

*	Author URI: http://www.inqsys.com/

*

*/

/* Check for wordpress installation */

define( 'PPMC_URL', plugin_dir_url( __FILE__ ) );
define( 'PPMC_V', '2.2.0' );

if ( ! function_exists( 'add_action' ) ) {

	die( 'Wordpress installation not found!' );

} else {

 	require_once( plugin_dir_path(__FILE__) . '/class-duplicate-ppmc-settings.php' );

}	/* End of wordpress installation check */


/* Check if such class already exist */

if ( ! class_exists( 'Duplicate_PPMC_Init' ) ) {

	class Duplicate_PPMC_Init {

		/* Constructor for action hooks */

		function __construct() {

			add_filter( 'plugin_action_links_'.plugin_basename( __FILE__ ), array( $this, 'duplicate_ppmc_settings_link' ) );

			add_action('wp_ajax_ppmc_remove_rating', array( $this, 'ppmc_remove_rating' ) );
			add_action('wp_ajax_ppmc_remove_discount_notice', array( $this, 'ppmc_remove_discount_notice' ) );
			
			register_activation_hook(__FILE__, array( $this, 'duplicate_ppmc_activate'));

			/* Enqueue javascript to admin panel */

			add_action( 'admin_enqueue_scripts', array( $this, 'duplicate_ppmc_admin_scripts' ) );

			/* Handle all cloning process */

			add_action('init', function(){ 
				if( get_option('dppmc_installationNewDate') === false ){
					update_option("dppmc_installationNewDate",date('Y-m-d h:i:s') );
				}
			} );

			add_action('wp_ajax_duplicate_ppmc', array( $this, 'duplicate_ppmc_post_as_draft' ));

			add_action('wp_ajax_duplicate_ppmc_menu_maker', array( $this, 'duplicate_ppmc_menu_maker' ));
			
			/* Add duplicate controler for post/page */

			add_filter( 'post_row_actions', array( $this, 'duplicate_ppmc_post_link' ), 10, 2 );

			add_filter( 'page_row_actions', array( $this, 'duplicate_ppmc_post_link' ), 10, 2 );
			
			add_action( 'post_submitbox_misc_actions', array( $this, 'duplicate_ppmc_inpost_button' ), 60, 2 );
			
			add_action( 'admin_notices', array( $this, 'duplicate_ppmc_admin_notice'),100 );

			add_action( 'admin_notices', array( $this, 'duplicate_ppmc_discount_notice'),100 );

			/*	Extra button on plugin page	*/
			add_filter( 'plugin_action_links_duplicate-post-page-menu-custom-post-type/duplicate-post-page-menu-cpt.php', array( $this, 'ppmc_plugin_row_meta') );

			/* Add L18n text domain */			
			add_action( 'plugins_loaded', array( $this, 'dppmc_load_plugin_textdomain' ) );

		}	/* End of __construct() */

		function aajax(){
			echo 'Ajax function';
			echo $_REQUEST['post'] . ' id post coppied for ' . $_REQUEST['copies'] . ' times';
			die();
		}
 
		function ppmc_plugin_row_meta( $links ) {    

				$row_meta = array(
				  'buy_pro'    => '<a href="' . esc_url( 'https://www.inqsys.com/duplicate-post-page-menu-custom-post-type-pro-wordpress-plugin/' ) . '" style="font-weight:700;color:red;" target="_blank" aria-label="' . esc_attr__( 'Plugin Pro', 'dppmc_load_plugin_textdomain' ) . '" style="color:green;">' . esc_html__( 'BUY PRO', 'dppmc_load_plugin_textdomain' ) . '</a>'
				);
				return array_merge( $row_meta , $links);

		}
		
		function ppmc_remove_rating(){
			update_option('ppmc_support_us_now_x','true');	
		}

		function ppmc_remove_discount_notice(){
			set_transient( 'ppmc_remove_discount_notice_xmas_'.PPMC_V , true, DAY_IN_SECONDS * 30 );
		}

		function duplicate_ppmc_admin_notice(){

			if( !get_option( "ppmc_next_period_ratings" ) ){
				update_option("ppmc_next_period_ratings", date('Y-m-d h:i:s', strtotime('+6 months') ) );
			}
			
			$support = get_option('ppmc_support_us_now_x');
			$recurring_ask = get_option( 'ppmc_next_period_ratings' );
			$install_date = get_option('dppmc_installationNewDate');
			$display_date = date( 'Y-m-d h:i:s' );
            $install_date= new DateTime( $install_date );
			$current_date = new DateTime( $display_date );
			$ask_again = new DateTime( $recurring_ask );
			$ask_again = $current_date->diff( $ask_again );
			$ask_days = $ask_again->days;
			$ask_invert = $ask_again->invert;
            $difference = $install_date->diff($current_date);
			$diff_days= $difference->days;

			if( $ask_days >= 0 && $ask_invert == 1){
				update_option( 'ppmc_support_us_now_x', "false" );
				update_option( 'ppmc_next_period_ratings', date("Y-m-d h:i:s", strtotime("+6 months")) );
			}

			if( $support != "true" && $diff_days >= 2 ) {

				$html = "<div class='notice notice-info important' id='message' style='padding: 10px;position:relative;line-height:30px;'>";
				$html .= "Thank you for choosing <strong>Duplicate Post Page Menu & Custom Post Type.</strong>";
				$html .= " If you are enjoying using our plugin, kindly leave us a review on <a class='button button-primary' href='https://wordpress.org/plugins/duplicate-post-page-menu-custom-post-type/#reviews' target='_blank'>wordpress.org</a><br/>";
				$html .= "<strong><a href='https://www.inqsys.com/donate' target='_new'>Buy Me A Coffee</a></strong> to support the development of this plug-in. ";
				$html .= "<strong><a href='https://www.inqsys.com/duplicate-post-page-menu-custom-post-type-pro-wordpress-plugin/' target='_new'>Buy Pro Version</a></strong> with extra features & lifetime support. ";
				$html .= " <a style='text-align:right;display:block;' class='' id='ppmc_done' >Already Done!</a>";
				$html .= "</div>";
				
				$html .= "<script>
				if( jQuery() != 'undefined'){
					jQuery(document).ready(
						function($){
							$('#ppmc_done').on('click',function(){
								$.ajax({
									type : 'post',
									 dataType : 'json',
									 url : '".admin_url('admin-ajax.php')."',
									 data : {action: 'ppmc_remove_rating'},
									 success: function(response) {
										 document.location.reload();
									 }
								})
							});
						}
					);
				}
				</script>";
				
				echo $html;
			}
		}

		function duplicate_ppmc_discount_notice(){

			$should_display = get_transient( 'ppmc_remove_discount_notice_xmas_'.PPMC_V );
			$display_date = date( 'd M Y' );
			$dateFrom = strtotime("15 December 2021");
			$dateTo =  strtotime("1 January 2022");

			$compare = $dateTo > strtotime($display_date);
			if( false != $should_display || strtotime($display_date) > $dateTo || strtotime($display_date) < $dateFrom ){
				return;
			}
					
				$html = "<div class='notice notice-info important' style='padding: 10px;position:relative;line-height:30px;'>";
				$html .= "<button id='ppmc-dismiss-sale' type='button' style='top:0;right:0;position:absolute;background:#72777c;border: 0;color: white;font-size:16px;border-radius:50px;cursor:pointer'>X</button>";
				$html .= "<a href='https://www.inqsys.com/duplicate-post-page-menu-custom-post-type-pro-wordpress-plugin/' target='_new'>";
				$html .= "<img src='".PPMC_URL."assets/xmas-discount.jpg' style='padding-right:10px;width:100%;height:200px'></a>";
				$html .= "<div>
				Hurry!! We are offering <strong>50% off</strong> on our premium plugins. The offer is valid until midnight of ".date('d F Y', $dateTo).".
				To use this offer, use coupon code- “<strong>SAVE50</strong>”. 
				<a class='button button-primary' href='https://www.inqsys.com/duplicate-post-page-menu-custom-post-type-pro-wordpress-plugin/' target='_new'>Get your deals now!</a>
				<div id='ppmc-not-interested' class='button button-secondry'>Not Interested</div>
				</div>";
				
				$html .= "</div>";
				
				$html .= "<script>
				if( jQuery() != 'undefined'){
					jQuery(document).ready(
						function($){
							$('#ppmc-dismiss-sale,#ppmc-not-interested').on('click',function(){
								$.ajax({
									type : 'post',
									 dataType : 'json',
									 url : '".admin_url('admin-ajax.php')."',
									 data : {action: 'ppmc_remove_discount_notice'},
									 success: function(response) {
										 document.location.reload();
									 }
								})
							});
						}
					);
				}
				</script>";

				echo $html;
		}

		/*	 Set default option values at the time of plugin activation */

		function duplicate_ppmc_activate(){

			if( !get_option("dppmc_installationNewDate") ){
				update_option("dppmc_installationNewDate",date('Y-m-d h:i:s') );
			}
			
			if( !get_option( 'dppmc_post' ) ){

				$post_types = Duplicate_PPMC_Settings::dppmc_all_post();

				update_option( 'dppmc_post', '0');

				update_option( 'dppmc_page', '0' );

				update_option( 'dppmc_menu', '0' );



				foreach($post_types as $post_type){

					update_option( 'dppmc_'. $post_type->name, '0' );

				}



			}



		} /* End of duplicate_ppmc_activate() */

		

		function dppmc_load_plugin_textdomain(){

			load_plugin_textdomain( 'duplicate-ppmc', false, basename( dirname( __FILE__ ) ) . '/languages/' );

		}/* End of dppmc_load_plugin_textdomain() */



		/* Create 'Settings' option in plugin page */

		function duplicate_ppmc_settings_link( $links ) {

			$settings_link = '<a href="options-general.php?page=dppmc-settings">' . __( 'Settings' ) . '</a>';

			array_push( $links, $settings_link );

			return $links;

		}/* End of duplicate_ppmc_settings_link */



		/*	Make sure values are not null */

		function duplicate_ppmc_menu_maker() {
			$response = array();
			/* Check for vaild input */

			if ( ! isset( $_REQUEST['name'] ) ) {

				echo '<strong> Something went wrong </strong>';
				die();

			}



			/* Make sure values are vaild to process */

			$name = sanitize_text_field( $_REQUEST['name'].'-duplicate' );

			if ( true === is_nav_menu($name) ) {

				$response["error"] = 'Menu <strong>'. $name .'</strong> already exist<br/>Please delete or rename the previous menu.' ;
				echo json_encode( $response );
				die();
			}



			$source = wp_get_nav_menu_object( $_REQUEST['name'] );

			$source_items = wp_get_nav_menu_items( $_REQUEST['name'] );

			$new_id = wp_create_nav_menu( $name );

			/* Ready to process the menu for duplication */

			$rel = array();

			$i = 1;

			foreach ( $source_items as $menu_item ) {
				
				$args = array(

					'menu-item-db-id'       	=> $menu_item->db_id,

					'menu-item-object-id'   	=> $menu_item->object_id,

					'menu-item-object'      	=> $menu_item->object,

					'menu-item-position'    	=> $i,

					'menu-item-type'        	=> $menu_item->type,

					'menu-item-title'       	=> $menu_item->title,

					'menu-item-url'         	=> $menu_item->url,

					'menu-item-description' 	=> $menu_item->description,

					'menu-item-attr-title'  	=> $menu_item->attr_title,

					'menu-item-target'      	=> $menu_item->target,

					'menu-item-classes'     	=> implode( ' ', $menu_item->classes ),

					'menu-item-xfn'         	=> $menu_item->xfn,

					'menu-item-status'      	=> $menu_item->post_status

				); // End of for-each()



				$parent_id = wp_update_nav_menu_item( $new_id, 0, $args );

				$rel[$menu_item->db_id] = $parent_id;

				/* Just reassuring, child shouldn't be left home-alone */

				if ( $menu_item->menu_item_parent ) {

					$args['menu-item-parent-id'] = $rel[$menu_item->menu_item_parent];

					$parent_id = wp_update_nav_menu_item( $new_id, $parent_id, $args );

				}



				$i++;
			} /* End of foreach() */



				/* Refresh(redirect to) the current page */
				
				$response["menu_id"] = $new_id  ;
				echo json_encode( $response );
				die();
		} /* End of duplicate_ppmc_menu_maker() */



		/*	Duplicate the selected post and put the new post in draft */

		function duplicate_ppmc_post_as_draft() {

			global $wpdb;

			/* Check for post request */

			if ( ! ( isset( $_REQUEST['post']) || isset( $_REQUEST['post'])  || ( isset( $_REQUEST['action'] ) && 'duplicate_ppmc_post_as_draft' == $_REQUEST['action'] ) ) ) {

				echo '<strong>No post to duplicate has been supplied!</strong>';
				die();

			}	/* End of if */



			/* Create a single entry if multiple is not required or a non positive number is passed */

			$copy_required = absint( $_REQUEST['copies'] ) ? $_REQUEST['copies']: 1 ;



			/* Loop through number of duplication request */

			for ( $J = 1; $J <= $copy_required; $J++ ){



					/* Get the original post id */

					$post_id = ( isset( $_REQUEST['post'] ) ? absint( $_REQUEST['post'] ) : absint( $_REQUEST['post'] ) );

					/* Get all the original post data */

					$post = get_post( $post_id );



					/* Get current user and make it new post user (duplicate post) */

					$current_user = wp_get_current_user();

					$new_post_author = $current_user->ID;



					/* If post data exists, duplicate the data into new duplicate post */

					if ( isset( $post ) && null != $post ) {



						/* New post data array */

						$args = array(

							'comment_status' => $post->comment_status,

							'ping_status'    => $post->ping_status,

							'post_author'    => $new_post_author,

							'post_content'   => $post->post_content,

							'post_excerpt'   => $post->post_excerpt,

							'post_name'      => $post->post_title . '-duplicate-' . $J,

							'post_parent'    => $post->post_parent,

							'post_password'  => $post->post_password,

							'post_status'    => 'draft',

							'post_title'     => $post->post_title . '-duplicate-' . $J,

							'post_type'      => $post->post_type,

							'to_ping'        => $post->to_ping,

							'menu_order'     => $post->menu_order

						);



						/* Duplicate the post by wp_insert_post() function */

						$new_post_id = wp_insert_post( $args );



						/* Get all current post terms and set them to the new post draft */

						$taxonomies = get_object_taxonomies($post->post_type);

						foreach ( $taxonomies as $taxonomy ) {

							$post_terms = wp_get_object_terms( $post_id, $taxonomy, array('fields' => 'slugs' ) );

							wp_set_object_terms( $new_post_id, $post_terms, $taxonomy, false );

						}



						/* Duplicate all post meta-data */

						$post_meta_data = $wpdb->get_results( 'SELECT meta_key, meta_value FROM '.$wpdb->postmeta.' WHERE post_id='.$post_id.';' );

						if ( 0 != count($post_meta_data) ) {

							$sql_query = 'INSERT INTO '.$wpdb->postmeta.' (post_id, meta_key, meta_value ) ';

							foreach ( $post_meta_data as $meta_data ) {

								$meta_key = $meta_data->meta_key;

								if ( '_wp_old_slug' == $meta_key )

									continue;

									$meta_value = addslashes($meta_data->meta_value );

									$sql_query_sel[]= $wpdb->prepare( "SELECT %d,%s,%s", array( $new_post_id, $meta_key, $meta_value ));
							}

							$sql_query.= implode(' UNION ALL ', $sql_query_sel );

							$wpdb->query($sql_query);

						}



					} else {

						/* This error must not occur in most cases. But incase it occur. This is how we handle it */

						echo '<strong>Post creation failed, could not find original post: ' . $post_id .'</strong>';
						die();
					}



			}	/* End of for-loop */

				/* Reload the current page to load all new created draf post/page */

				wp_redirect( $_SERVER['HTTP_REFERER'] );

				exit();

		}	/* End of duplicate_ppmc_post_as_draft() */

		
		/*	Add duplicate button in post/page editor screen */
		function duplicate_ppmc_inpost_button($post){
			
			$isDuplicationEnable = get_option( 'dppmc_'.$post->post_type );
			
			if ( current_user_can('edit_post', $post->ID ) && '0' === $isDuplicationEnable ) {
				$html  = '<div style="padding-left:10px;padding-bottom:10px;">';
				$html .= "<a id='Btdppmc' ppmc_post_id=".$post->ID." class='duplicate_ppmc_item_no".$post->ID."'>Duplicate This </a> " .
					 " <input style='width:60px !important;' type='number' value='1' min='1' max='5' id='duplicate_ppmc_item_no".$post->ID."' name='duplicate_ppmc_item_no'>";
				$html .= '</div>';
				
				echo $html;
			}
		}


		/* Add the duplicate link to action list for post_row_actions. */

		function duplicate_ppmc_post_link( $actions, $post ) {
			
			$isDuplicationEnable = get_option( 'dppmc_'.$post->post_type );

			/* Check if user is capable of editing and cloning is enable on post */

				if ( current_user_can('edit_post', $post->ID ) && '0' === $isDuplicationEnable ) {

					/* A button for duplicating the post

					* and an html number input box for creating multiple duplicate post

					* two elements are combined into single '$action[]' array variable for removing seprator

					* Asingle line is devided into two for making it more readable

					*/

					$actions['dppmc_btn_count'] = "<a id='Btdppmc' ppmc_post_id=".$post->ID." class='duplicate_ppmc_item_no".$post->ID."' >".__('Duplicate', 'duplicate-ppmc')."</a> " .

					 "<input style='width:60px !important;' type='number' value='1' min='1' max='5' id='duplicate_ppmc_item_no".$post->ID."' name='duplicate_ppmc_item_no'>";

				}

			return $actions;	/* Return the post link action ASA the controler(s) are added */



		}	/* End of duplicate_ppmc_post_link */



		/* Enqueue the jQuery script in admin dashboard */

		function duplicate_ppmc_admin_scripts() {


			wp_enqueue_script( 'duplicate_ppmc_admin_js', plugins_url('assets/js/operations.js', __FILE__ ) ,
			array( 'jquery' ), true, true );

			wp_enqueue_script( 'duplicate_ppmc_admin_js_vex', plugins_url('assets/js/vex.min.js', __FILE__ ) , 
			array( 'jquery' ), true, true );
			
			wp_enqueue_script( 'duplicate_ppmc_admin_js_combined_vex', plugins_url('assets/js/vex.combined.min.js', __FILE__ ) , 
			array( 'jquery' ), true, true );
			
			wp_enqueue_style( 'duplicate_ppmc_admin_style_css', plugins_url('assets/css/style.css', __FILE__ ) );
			wp_enqueue_style( 'duplicate_ppmc_admin_css_vex', plugins_url('assets/css/vex.css', __FILE__ ) );
			wp_enqueue_style( 'duplicate_ppmc_admin_css_vex_theme_os', plugins_url('assets/css/vex-theme-os.css', __FILE__ ) );
			
			/* Send required data to javascript for use */

			wp_localize_script( 'duplicate_ppmc_admin_js', 'duplicate_ppmc_ENG',

								array(

								'enable_in_menu'=>get_option('dppmc_menu'),

								'dppmc_bt_name'=>__('Duplicate', 'duplicate-ppmc'),
								'ajax_url'=>admin_url('admin-ajax.php')
								)

							   );

		}	/* end of duplicate_ppmc_admin_scripts() */


	} /* End of duplicate_ppmc_init{} */

	return new Duplicate_PPMC_Init();

} /* End of if-class_exists() */