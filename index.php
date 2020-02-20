<?php
/**
* Plugin Name: Text highlight animation
* Description: Highlight text and it will animation when user scroll 
* Version: 1.0
* Author: Eliran Abuhatzira
* Author URI: https://github.com/eliran1989
**/


function animation_highligts_scripts() {
    wp_enqueue_style( 'text-highlight-button-editor-css', plugin_dir_url(__FILE__).'/css/mark-highlight-button.css' );
    wp_enqueue_script( 'highlight_animation', plugin_dir_url(__FILE__) . '/js/animation.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'animation_highligts_scripts' );


add_action('enqueue_block_editor_assets', 'block_editor_text_highlight_button');
function block_editor_text_highlight_button() {
	wp_enqueue_script(
		'text-highlight-button-js',
		plugin_dir_url(__FILE__).'/js/mark-highlight-button.js',
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' ),
		'1.0',
		true
	);
}


?>


