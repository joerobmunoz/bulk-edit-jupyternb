define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

    function load_ipython_extension() {
        const KEY_BINDING = 'CTRL, D'
        Jupyter.keyboard_manager.command_shortcuts.remove_shortcut(KEY_BINDING);
        Jupyter.keyboard_manager.command_shortcuts.add_shortcut(KEY_BINDING, 'jupyter-notebook:restart-kernel');
    }

    // selectNextOccurrence
    // var cell = Jupyter.notebook.get_selected_cell();
    // cell.code_mirror.listSelections()

        
    return {
        load_ipython_extension: load_ipython_extension
    };
});
