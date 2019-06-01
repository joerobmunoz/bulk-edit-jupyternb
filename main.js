define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

    var initialize = function () {
        // update params with any specified in the server's config file.
        // the "thisextension" value of the Jupyter notebook config's
        // data may be undefined, but that's ok when using JQuery's extend
        $.extend(true, params, Jupyter.notebook.config.thisextension);

        // add our extension's css to the page
        $('<script/>')
            .attr({
                // rel: 'script',
                type: 'text/js',
                href: requirejs.toUrl('./vendor/searchCursor.js')
            })
            .appendTo('head');
    };

    var onCommand = function(event) {
        console.log("Bulk edit!");
    };
    
    var load_ipython_extension = function () {
        // Once the config has been loaded, do everything else.
        // The loaded object is a javascript Promise object
        const KEY_BINDING = 'CTRL-D';
        
        // Ignore CodeMirror keymap defaults during edit mode
        // CodeMirror.keyMap.default[KEY_BINDING] = null;
        delete CodeMirror.keyMap.default[KEY_BINDING];
        
        if (!Jupyter.keyboard_manager.edit_shortcuts.is_available_shortcut(KEY_BINDING)) {
            Jupyter.keyboard_manager.edit_shortcuts.remove_shortcut(KEY_BINDING);
        }

        Jupyter.keyboard_manager.edit_shortcuts.add_shortcut(KEY_BINDING, {
            help : 'bulk edit',
            help_index : 'zz',
            handler : function (event) {
                onCommand(event);
                return false;
            }}
        );

        return Jupyter.notebook.config.loaded.then(initialize);
    };

    // selectNextOccurrence
    // var cell = Jupyter.notebook.get_selected_cell();
    // cell.code_mirror.listSelections()

        
    return {
        load_ipython_extension: load_ipython_extension
    };
});
