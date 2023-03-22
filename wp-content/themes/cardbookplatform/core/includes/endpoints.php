<?php
/**
 * Register Custom API endPoints
 * 
 */

add_action('rest_api_init', 'wp_rest_user_endpoints');
function wp_rest_user_endpoints($request) {
    register_rest_route('wp-cusotm/v2', 'users/register', array(
      'methods' => 'POST',
      'callback' => 'wc_rest_user_endpoint_handler',
    ));
}

function wc_rest_user_endpoint_handler($request = null) {
    $response = array();
    $parameters = $request->get_json_params();
    $username = sanitize_text_field($parameters['username']);
    $email = sanitize_text_field($parameters['email']);
    $password = sanitize_text_field($parameters['password']);
    // $role = sanitize_text_field($parameters['role']);
    $error = new WP_Error();
    if (empty($username)) {
      $error->add(400, __("Username field 'username' is required.", 'wp-rest-user'), array('status' => 400));
      return $error;
    }
    if (empty($email)) {
      $error->add(401, __("Email field 'email' is required.", 'wp-rest-user'), array('status' => 400));
      return $error;
    }
    if (empty($password)) {
      $error->add(404, __("Password field 'password' is required.", 'wp-rest-user'), array('status' => 400));
      return $error;
    } 
    $user_id = username_exists($username);
    if (!$user_id && email_exists($email) == false) {
      $user_id = wp_create_user($username, $password, $email);
      if (!is_wp_error($user_id)) {
        // Ger User Meta Data (Sensitive, Password included. DO NOT pass to front end.)
        $user = get_user_by('id', $user_id);
        // $user->set_role($role);
        $user->set_role('subscriber');
        // WooCommerce specific code
        if (class_exists('WooCommerce')) {
          $user->set_role('customer');
        }
        // Ger User Data (Non-Sensitive, Pass to front end.)
        $response['code'] = 200;
        $response['message'] = __("User '" . $username . "' Registration was Successful", "wp-rest-user");
      } else {
        return $user_id;
      }
    } else {
      $error->add(406, __("Email already exists, please try 'Reset Password'", 'wp-rest-user'), array('status' => 400));
      return $error;
    }
    return new WP_REST_Response($response, 123);
  }
  




  function custom_users_list_rest_api() {
    register_rest_route( 'custom/v1', '/users-list', array(
        'methods'  => 'GET',
        'callback' => 'get_users_list_post_data',
        'args'     => array(
            'industries' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param);
                }
            ),
            'country' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param);
                }
            ),
            'city' => array(
                'validate_callback' => function($param, $request, $key) {
                    return is_numeric($param);
                }
            ),
            'competences' => array(
                'validate_callback' => function($param, $request, $key) {
                    return !empty($param);
                }
            ),
            'direction' => array(
                'validate_callback' => function($param, $request, $key) {
                    return !empty($param);
                }
            ),
            'expertise_level' => array(
                'validate_callback' => function($param, $request, $key) {
                    return !empty($param);
                }
            )
        )
    ) );
}
add_action( 'rest_api_init', 'custom_users_list_rest_api' );

function get_users_list_post_data($request) {
  $params = $request->get_params();
  $query_args = array(
      'post_type' => 'users_list',
      'posts_per_page' => -1, // get all posts
      'post_status' => 'publish',
      'tax_query' => array(
          'relation' => 'AND',
      ),
  );

  // add tax query for each parameter
  foreach ($params as $key => $value) {
      if (!empty($value)) {
          if ($key == 'city') {
              $value = explode(',', $value); // split comma-separated values
              $query_args['tax_query'][] = array(
                  'taxonomy' => 'city',
                  'field' => 'term_id',
                  'terms' => $value,
                  'operator' => 'IN',
              );
          } else {
              $query_args['meta_query'][] = array(
                  'key' => $key,
                  'value' => $value,
                  'compare' => 'IN',
              );
          }
      }
  }

  $query = new WP_Query($query_args);
  $posts = $query->posts;

  // loop through posts and create response data
  $data = array();
  foreach ($posts as $post) {
      $data[] = array(
          'id' => $post->ID,
          'title' => $post->post_title,
          'content' => $post->post_content,
          'industries' => get_post_meta($post->ID, 'industries', true),
          'country' => get_post_meta($post->ID, 'country', true),
          'city' => get_post_meta($post->ID, 'city', true),
          'competences' => get_post_meta($post->ID, 'competences', true),
          'direction' => get_post_meta($post->ID, 'direction', true),
          'expertise_level' => get_post_meta($post->ID, 'expertise_level', true),
      );
  }

  return $data;
}

function custom_login_endpoint_init() {
    register_rest_route( 'custom/v1', '/login', array(
        'methods'  => 'POST',
        'callback' => 'custom_login_endpoint_handler',
    ) );
}
add_action( 'rest_api_init', 'custom_login_endpoint_init' );

function custom_login_endpoint_handler( $request ) {
    $creds = array();
    $creds['user_login'] = $request['username'];
    $creds['user_password'] = $request['password'];
    $creds['remember'] = true;
    $user = wp_signon( $creds, false );
    if ( is_wp_error( $user ) ) {
        return array(
            'success' => false,
            'message' => $user->get_error_message(),
        );
    } else {
        wp_set_auth_cookie( $user->ID, true, '' );
        return array(
            'success' => true,
            'user_id' => $user->ID,
        );
    }
}