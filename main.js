// define([
//     'base/js/namespace'
// ], function(
//     Jupyter
// ) {
//     function load_ipython_extension() {
//         console.log("LOADED!!!");
//         console.log(
//             'This is the current notebook application instance:',
//             Jupyter.notebook
//         );
//     }

//     return {
//         load_ipython_extension: load_ipython_extension
//     };
// });


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
        let cm = event.notebook.get_selected_cell().code_mirror;
        let selections = cm.listSelections();

        if (selections.length > 0) {
            // has current selection
            let first_anch = selections[0]['anchor'];
            let last_head = selections[selections.length-1]['head'];
            
            let leftover = 
            // grab all text after head

            return false;
        }
        
        if (selections.every( (val, i, arr) => val === arr[0] )) {
            // Invalid bulk edit selections, none selected
            return false;
        }

        // else, select current word

        return false;
    };
    
    var load_ipython_extension = function () {

        // Once the config has been loaded, do everything else.
        // The loaded object is a javascript Promise object
        const PC_KEY_BINDING = 'Ctrl-D';
        const MAC_KEY_BINDING = 'Cmd-D'
        const bindings = [PC_KEY_BINDING, MAC_KEY_BINDING]
        
        // Ignore CodeMirror keymap defaults during edit mode
        delete CodeMirror.keyMap.default[PC_KEY_BINDING];
        delete CodeMirror.keyMap.pcDefault[PC_KEY_BINDING];
        delete CodeMirror.keyMap.macDefault[MAC_KEY_BINDING];
        
        bindings.map((key) => {
            Jupyter.keyboard_manager.edit_shortcuts.add_shortcut(key, {
                help : 'bulk edit',
                help_index : 'zz',
                handler : function (event) {
                    onCommand(event);
                    return false;
                }}
            );
        });

        return Jupyter.notebook.config.loaded.then(initialize);
    };

    // selectNextOccurrence
    // var cell = Jupyter.notebook.get_selected_cell();
    // cell.code_mirror.listSelections()

        
    return {
        load_ipython_extension: load_ipython_extension
    };
});
