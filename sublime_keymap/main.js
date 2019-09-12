// main.js

define([
    'base/js/namespace',
    'notebook/js/cell',
    'codemirror/keymap/sublime', // required for cm key reference
    ], function(Jupyter, cell, subl) { 
    var initialize = function () {
        $.extend(true, params, Jupyter.notebook.config.thisextension);
    };
    
    var load_ipython_extension = function () {
        cell.Cell.options_default.cm_config.keyMap = 'sublime';
        var cells = Jupyter.notebook.get_cells();
        for(var cl=0; cl< cells.length ; cl++){
            cells[cl].code_mirror.setOption('keyMap', 'sublime');
        }

        return Jupyter.notebook.config.loaded.then(initialize);
    };
        
    return {
        load_ipython_extension: load_ipython_extension
    };
});
