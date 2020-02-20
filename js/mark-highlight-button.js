( function( wp ) {

    var TextHighlighButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, 
            {
                icon: 'admin-customizer', 
                title: 'Highlight text',
                onClick: function() {
                    props.onChange( 
                        wp.richText.toggleFormat(props.value, {
                            type: 'custom/text-highlight'
                        }) 
                    );
                }
            }
        );
    }

    wp.richText.registerFormatType(
        'custom/text-highlight', {
            title: 'Highlight text',
            tagName: 'mark',
            className: 'animated_highlight',
            edit: TextHighlighButton,
        }
    );
} )( window.wp );