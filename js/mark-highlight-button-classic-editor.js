(function() {

    console.log(tinymce);

    tinymce.PluginManager.add('highlight', function(editor, url) {


        editor.on('init', function() {
            editor.formatter.register('animated_highlight', {inline: 'mark', classes: 'animated_highlight'});
        });

        editor.addButton('highlight', {
            icon:'admin-customizer',
            title: 'Highlight text',
            onclick: function() {
                tinymce.activeEditor.formatter.toggle('animated_highlight');
            },
            onPostRender: function() {
                var ctrl = this;

                editor.on('NodeChange', function(e) {
                    ctrl.active(e.element.className == 'animated_highlight');
                });
            }
        });

    });
})();