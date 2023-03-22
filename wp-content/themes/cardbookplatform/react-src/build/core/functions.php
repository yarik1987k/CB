<?php
/**
 * Functions.
 *
 * This file defines all functions that are intended to be used by developers,
 * and therefore are not hidden behind a class for simplicity.
 *
 * @package    WordPress
 * @subpackage cardBook
 * @since      cardBook 1.0
 */

/**
 * Recursively include all files from specified directory (and it's subdirectories).
 *
 * @param string $dir       Directory to include all files from.
 * @param int    $max_depth Maximum depth allowed.
 * @param int    $depth     Number of levels below specified directory current recursive call is on.
 */



function recursive_include( $dir, $max_depth = 5, $depth = 0 ) {
	if ( $depth > $max_depth ) {
		return;
	}

	$scan = glob( $dir . DIRECTORY_SEPARATOR . '*' );
	foreach ( $scan as $path ) {
		if ( preg_match( '/\.php$/', $path ) ) {
			include_once $path;
		} elseif ( is_dir( $path ) ) {
			recursive_include( $path, $max_depth, $depth + 1 );
		}
	}
}

 
  
      
 

  
add_action( 'rest_api_init', function () {
	register_rest_route( 'wp/v2', '/themes/header', array(
	  'methods' => 'GET',
	  'callback' => 'get_header_data',
	  'permission_callback' => '__return_true'
	) ); 
  } );
  
  function get_header_data() {
	ob_start();
	get_header();
	$header_data = ob_get_clean();
	return $header_data;
  }
  



add_action( 'rest_api_init', 'my_custom_namespace_login' );

function my_custom_namespace_login() {
    register_rest_route( 'profile/v1', '/login', array(
        'methods' => WP_REST_SERVER::CREATABLE,
		'callback' => 'login_callback',
		'args' => array(),
		'permission_callback' => function () {
			return true;
		}
    ) );
}

function login_callback( WP_REST_Request $request) {
	$parameters = $request->get_params(); 
    $creds = array(
        'user_login'    => $parameters['username'],
        'user_password' => $parameters['password'],
        'remember'      => true,
    );

	$user = wp_signon( $creds, false );
	if ( is_wp_error( $user ) ) {
        return $user;
    }
	$secret_key = 'bubu';
    $issued_at  = time();
    $not_before = apply_filters( 'jwt_auth_not_before', $issued_at, $issued_at );
    $expire     = apply_filters( 'jwt_auth_expire', $issued_at + ( DAY_IN_SECONDS * 7 ), $issued_at );

	$token = array(
        'iss'  => get_bloginfo( 'url' ),
        'iat'  => $issued_at,
        'nbf'  => $not_before,
        'exp'  => $expire,
        'data' => array(
            'user' => array(
                'id' => $user->data->ID,
            ),
        ),
    );
	$jwt = base64_encode( json_encode( $token ) );
    

	return new WP_REST_Response($jwt, 200);
}

add_action('rest_api_init', function () {
	register_rest_route( 'api/v1', '/is-loggedin', array(
        'methods' => WP_REST_SERVER::CREATABLE,
		'callback' => 'is_logedin',
		'args' => array(),
		'permission_callback' => '__return_true',
	));
}); 

function is_logedin( WP_REST_Request $request) {
	$jwt_secret_key = 'bubu';

	$headers = $request->get_headers();
    if ( ! isset( $headers['authorization'] ) ) {
        return false;
    }
	$jwt = $headers['authorization'];
	$test = base64_decode($jwt );
	$bubu = json_decode($test);
	print_r($test);
	  
}

add_action( 'rest_api_init', 'my_custom_namespace_is_logged_in' );

function my_custom_namespace_is_logged_in() {
    register_rest_route( 'my-custom-namespace/v2', '/is-logged-in', array(
        'methods'  => 'GET',
        'callback' => 'my_custom_is_logged_in',
    ) );
}

function my_custom_is_logged_in( $request ) {
	
    $jwt_secret_key = 'bubu';
    $headers = $request->get_headers();
    if ( ! isset( $headers['authorization'] ) ) { 
        return false;
    }

    $jwt = $headers['authorization'];
	$jwt_strip = str_replace('Bearer ', '', $jwt[0]);
	$jwt_return = json_decode(base64_decode($jwt_strip));
	
	 if($jwt_return){
		wp_set_auth_cookie( $jwt_return->data->user->id, 1, is_ssl() );
		
		return $jwt_return;
	 }else{
		 return false;
	 }
	
}



function get_insta_code(){ 
	if (isset($_COOKIE['access_token_inst'])) {
		 

	}else{
		$instagram = isset($_GET['code']);
		if($instagram == true){
			$client_id = '911199126564549';
			$client_secret = 'b4a1f59d12fcc96dca55730e4fe5cbd8';
			$redirect_uri = 'https://cardplat.local/profile/edit/profile-info';
			$code = $_GET['code'];
	
			$data = array(
				'client_id' => $client_id,
				'client_secret' => $client_secret,
				'grant_type' => 'authorization_code',
				'redirect_uri' => $redirect_uri,
				'code' => $code,
			);
	
			$options = array(
				'http' => array(
					'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
					'method'  => 'POST',
					'content' => http_build_query($data),
				),
			);
	
			$context  = stream_context_create($options);
	
			if($context){
				$result = file_get_contents('https://api.instagram.com/oauth/access_token', false, $context);
				$response = json_decode($result, true);
				 
				if ($response['access_token']) { 
					// Success! Store the access token in a session or cookie
					// DOTO: store the token inside the DB
					setcookie('access_token_inst_ui', $response['user_id']);
					setcookie('access_token_inst', $response['access_token']);
				} else {
					// Error! Handle the error
				}
			}
			
		}

	}
 }

 get_insta_code();
 

 function enqueue_slick_styles() {
    wp_enqueue_style( 'slick-style', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' );
    wp_enqueue_style( 'slick-theme-style', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' );
}
add_action( 'wp_enqueue_scripts', 'enqueue_slick_styles' );

 