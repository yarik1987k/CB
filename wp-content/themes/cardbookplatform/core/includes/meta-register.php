<?php
/**
 * Register All the Meta for all post types
 * Rest Meta Register
 */

$meta_register_user_list = array(
    [
        'key' => 'user_job_title',
        'description' => 'User Job Title',
        'type' => 'string'
    ],
    [
        'key' => 'user_cover_image',
        'description' => 'User Cover Image',
        'type' => 'string'
    ],
    [
		'key' => 'social_facebook',
		'description' => 'Facebook',
		'type' => 'string'
	],
	[
		'key' => 'social_instagram',
		'description' => 'Instagram',
		'type' => 'string'
	],
	[
		'key' => 'social_twitter',
		'description' => 'Twitter',
		'type' => 'string'
	],
	[
		'key' => 'social_youtube',
		'description' => 'Youtube',
		'type' => 'string'
	],
	[
		'key' => 'social_tiktok',
		'description' => 'Tik Tok',
		'type' => 'string'
	],
	[
		'key' => 'social_linkedin',
		'description' => 'Linkedin',
		'type' => 'string'
    ],
    [
		'key' => 'companies_assign',
		'description' => 'Companies Assign to',
		'type' => 'string'
	],
	[
		'key' => 'my_card_market_users',
		'description' => 'Card Market Users',
		'type' => 'object'
	],
	[
		'key' => 'my_access_users',
		'description' => 'Users i have access to',
		'type' => 'object'
	]

);

foreach($meta_register_user_list as $meta){
	register_rest_field('users_list', $meta['key'], [
		'get_callback' => function ($params) use ($meta) {
			return get_post_meta($params['id'], $meta['key'], true);
		},
		'update_callback' => function ($value, $object, $fieldName){
			return update_post_meta($object->ID, $fieldName, $value);
		}
	]);
}

 
 

function register_meta_boxes(){
    add_meta_box( 'social_links_title', __( 'User Social Links', 'social_links_title' ), 'social_links_callback', 'users_list' );
    add_meta_box( 'user_job_title', __( 'User job title', 'user_job_title' ), 'user_job_title_callback', 'users_list' );
    add_meta_box( 'meta_user_cover', __( 'User Cover image', 'meta-user_cover-title' ), 'meta_user_cover_callBack', 'users_list' );
    add_meta_box( 'meta_user_companies', __( 'User Companies Worked', 'meta_user_companies_title' ), 'meta_user_companies_callBack', 'users_list' ); 
	add_meta_box( 'meta_card_market', __( 'User Card Market', 'meta_card_market_title' ), 'meta_card_market_callBack', 'users_list' ); 
	add_meta_box( 'meta_users_i_have_access', __( 'Users i have access to', 'meta_users_i_have_access_title' ), 'meta_users_i_have_access_callBack', 'users_list' ); 
}

add_action( 'add_meta_boxes', 'register_meta_boxes' );
function meta_users_i_have_access_callBack($post){
	$my_access_users = get_post_meta($post->ID, 'my_access_users', true); 
	print_r($my_access_users);
	echo '<div><input type="text" value="" name="user_access_id" id="user_access_id" placeholder="User Id" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="" name="user_access_user_level" id="user_access_user_level" placeholder="User Level" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="" name="user_access_user_price" id="user_access_user_price" placeholder="User Price" style="width:100%;margin-bottom:15px;"/></div>';
}
 function meta_card_market_callBack($post){
	$my_card_market = get_post_meta($post->ID, 'my_card_market_users', true); 
	print_r($my_card_market);
	echo '<div><input type="text" value="" name="my_card_market_user_id" id="my_card_market_user_id" placeholder="User Id" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="" name="my_card_market_user_level" id="my_card_market_user_level" placeholder="User Level" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="" name="my_card_market_user_price" id="my_card_market_user_price" placeholder="User Price" style="width:100%;margin-bottom:15px;"/></div>';
 }

 function save_meta_users_i_have_access_callBack($post_id){
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
	$my_access_users = get_post_meta($post_id, 'my_access_users', true); 

	if(!empty($_POST['user_access_id'])){
		$data_user_access = array(
			array(
				'id' => $_POST['user_access_id'],
				'user_access_user_level' => $_POST['user_access_user_level'],
				'user_access_user_price' => $_POST['user_access_user_price']
			)
		);

		if(!empty($my_access_users)){
			$new_data__user_access = array();
			foreach($my_access_users as $k=> $d){
				$new_array_user_access = 
					array(
						'id' => $d['id'],
						'user_access_user_level' => $d['user_access_user_level'],
						'user_access_user_price' => $d['user_access_user_price']
					);
				array_push($new_data__user_access,$new_array_user_access);
			}
	
			$new_value_user_access = 
				array(
					'id' => $_POST['user_access_id'],
					'user_access_user_level' => $_POST['user_access_user_level'],
					'user_access_user_price' => $_POST['user_access_user_price']
				);
			
			array_push($new_data__user_access,$new_value_user_access);
			update_post_meta( $post_id, 'my_access_users', $new_data__user_access);
		}else{
			update_post_meta( $post_id, 'my_access_users', $data_user_access);
		}
		 
	} 
 }
 add_action( 'save_post', 'save_meta_users_i_have_access_callBack' );
 function save_meta_card_market_callBack($post_id){
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }

	$my_card_market = get_post_meta($post_id, 'my_card_market_users', true); 	

	if(!empty($_POST['my_card_market_user_id'])){
		$data_mc = array(
			array(
				'id' => $_POST['my_card_market_user_id'],
				'my_card_market_user_level' => $_POST['my_card_market_user_level'],
				'my_card_market_user_price' => $_POST['my_card_market_user_price']
			)
		);
		if(!empty($my_card_market)){
			$new_data_mc = array();
			foreach($my_card_market as $k=> $d){
				$new_array_mc = 
					array(
						'id' => $d['id'],
						'my_card_market_user_level' => $d['my_card_market_user_level'],
						'my_card_market_user_price' => $d['my_card_market_user_price']
					);
				array_push($new_data_mc,$new_array_mc);
			}
	
			$new_value_mc = 
				array(
					'id' => $_POST['my_card_market_user_id'],
					'my_card_market_user_level' => $_POST['my_card_market_user_level'],
					'my_card_market_user_price' => $_POST['my_card_market_user_price']
				);
			
			array_push($new_data_mc,$new_value_mc);
			update_post_meta( $post_id, 'my_card_market_users', $new_data_mc);
		}else{
			update_post_meta( $post_id, 'my_card_market_users', $data_mc);
		}
	} 
 }
 add_action( 'save_post', 'save_meta_card_market_callBack' );

function meta_user_companies_callBack($post){
   $test =  get_post_meta($post->ID, 'companies_assign', true); 
	print_r($test);
	echo '<div><input type="text" value="'.$company_job_title.'" name="company_job_title" id="company_job_title" placeholder="Company Job Title" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$company_date_beginning.'" name="company_date_beginning" id="company_date_beginning" placeholder="Company Beginning Date" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$company_date_end.'" name="company_date_end" id="company_date_end" placeholder="Company End Date" style="width:100%;margin-bottom:15px;margin-bottom:15px;"/></div>';
    echo '<div><input type="text" value="'.$companies_assign.'" name="companies_assign" id="companies_assign" placeholder="Companies Assign to" style="width:100%;margin-bottom:15px;"/></div>';
}
function save_meta_user_companies_callBack( $post_id ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
	$current_data =  get_post_meta($post_id, 'companies_assign', true);

	if(!empty($_POST['companies_assign'])){
		$data = array(
			array(
				'id' => $_POST['companies_assign'],
				'company_job_title' => $_POST['company_job_title'],
				'company_date_beginning' => $_POST['company_date_beginning'],
				'company_date_end' => $_POST['company_date_end']
			)
		);
		if(!empty($current_data)){
			$new_data = array();
			foreach($current_data as $k=> $d){
				$new_array = 
					array(
						'id' => $d['id'],
						'company_job_title' => $d['company_job_title'],
						'company_date_beginning' => $d['company_date_beginning'],
						'company_date_end' => $d['company_date_end']
					);
				array_push($new_data,$new_array);
			}
	
			$new_value = 
				array(
					'id' => $_POST['companies_assign'],
					'company_job_title' => $_POST['company_job_title'],
					'company_date_beginning' => $_POST['company_date_beginning'],
					'company_date_end' => $_POST['company_date_end']
				);
			
			array_push($new_data,$new_value);
			update_post_meta( $post_id, 'companies_assign', $new_data);
		}else{
			update_post_meta( $post_id, 'companies_assign', $data);
		}
	} 
}
add_action( 'save_post', 'save_meta_user_companies_callBack' );


function social_links_callback($post){

	$social_facebook =  get_post_meta($post->ID, 'social_facebook', true);
	$social_instagram =  get_post_meta($post->ID, 'social_instagram', true);
	$social_twitter =  get_post_meta($post->ID, 'social_twitter', true);
	$social_youtube =  get_post_meta($post->ID, 'social_youtube', true);
	$social_tiktok =  get_post_meta($post->ID, 'social_tiktok', true);
	$social_linkedin =  get_post_meta($post->ID, 'social_linkedin', true);

	echo '<div><input type="text" value="'.$social_facebook.'" name="social_facebook" id="social_facebook" placeholder="Facebook Link" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$social_instagram.'" name="social_instagram" id="social_instagram" placeholder="Instagram Link" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$social_twitter.'" name="social_twitter" id="social_twitter" placeholder="Twitter Link" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$social_youtube.'" name="social_youtube" id="social_youtube" placeholder="Youtube Link" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$social_tiktok.'" name="social_tiktok" id="social_tiktok" placeholder="TikTok Link" style="width:100%;margin-bottom:15px;"/></div>';
	echo '<div><input type="text" value="'.$social_linkedin.'" name="social_linkedin" id="social_linkedin" placeholder="Linkedin Link" style="width:100%;"/></div>';
}

function save_user_social_data($post_id){
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
	if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
 
	(isset($_POST['social_facebook']) === true) ? update_post_meta( $post_id, 'social_facebook', sanitize_text_field( $_POST['social_facebook'] ) ) : '';
	(isset($_POST['social_instagram']) === true) ?  update_post_meta( $post_id, 'social_instagram', sanitize_text_field( $_POST['social_instagram'] ) )  : '';
	(isset($_POST['social_twitter']) === true) ?  update_post_meta( $post_id, 'social_twitter', sanitize_text_field( $_POST['social_twitter'] ) )   : '';
	(isset($_POST['social_youtube']) === true) ?  update_post_meta( $post_id, 'social_youtube', sanitize_text_field( $_POST['social_youtube'] ) )   : '';
	(isset($_POST['social_tiktok']) === true) ?  update_post_meta( $post_id, 'social_tiktok', sanitize_text_field( $_POST['social_tiktok'] ) )   : '';
	(isset($_POST['social_linkedin']) === true) ?  update_post_meta( $post_id, 'social_linkedin', sanitize_text_field( $_POST['social_linkedin'] ) )   : '';
	 
}
add_action( 'save_post', 'save_user_social_data' );





function user_job_title_callback( $post ) {
	$metaData = get_post_meta($post->ID, 'user_job_title', false);
   echo '<input type="text" value="'.$metaData[0].'" placeholder="For example: Entrepreneur | Community Owner" name="user_job_title" id="user_job_title_field" style="width:100%; padding:10px; min-height:40px;"/>';
}
function save_user_job_title_meta_box( $post_id ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( $parent_id = wp_is_post_revision( $post_id ) ) {
        $post_id = $parent_id;
    }
    $fields = [
        'user_job_title',
    ];
    foreach ( $fields as $field ) {
        if ( array_key_exists( $field, $_POST ) ) {
            update_post_meta( $post_id, 'user_job_title', sanitize_text_field( $_POST[$field] ) );
        }
     }
}
add_action( 'save_post', 'save_user_job_title_meta_box' );



function meta_user_cover_callBack($post){
	$url = get_post_meta($post->ID, 'user_cover_image', true); ?>
	<input id="user_cover_image" name="user_cover_image" type="text" value="<?php echo $url;?>" style="width:400px;" />
	<input id="user_cover_image_button" type="button" value="Upload Image" /><br/>
	<img src="<?php echo $url;?>" style="width:200px;" id="picsrc" />
	<script>
	jQuery(document).ready( function($) {
	  jQuery('#user_cover_image_button').click(function() {
		window.send_to_editor = function(html) {
		  imgurl = jQuery(html).attr('src');
		  console.log(imgurl);
		  jQuery('#user_cover_image').val(imgurl);
		  jQuery('#picsrc').attr("src", imgurl);
		  tb_remove();
		}
  
		formfield = jQuery('#user_cover_image').attr('name');
		tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true' );
		return false;
	  }); // End on click
	});
	</script>
  <?php
}


function save_user_cover_image($post_id){
    if (isset($_POST['user_cover_image'])){
        update_post_meta($post_id, 'user_cover_image', $_POST['user_cover_image']);
    }
}
add_action( 'save_post', 'save_user_cover_image' );

add_action('plugins_loaded', function(){
	if($GLOBALS['pagenow']=='post.php'){
	  add_action('admin_print_scripts', 'my_admin_scripts');
	  add_action('admin_print_styles',  'my_admin_styles');
	}
});
  
function my_admin_scripts(){
	wp_enqueue_script('jquery');
	wp_enqueue_script('media-upload');
	wp_enqueue_script('thickbox');
}
   
  
function my_admin_styles(){
	wp_enqueue_style('thickbox');
}





