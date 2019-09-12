# sublime-keymap-jupyternb

Sublime KeyMap
==============

An extension to add, by default, the Sublime hotkeys (e.g. "bulk edit") to the Jupyter Notebooks.


Usage
-----

This extension adds the "Sublime" style hotkeys to all Code type cells by default. No action other 
than installing this extension is needed, such as modifying a ```custom.js``` file.

For more useful hotkeys, view the [Code Mirror Sublime KeyMap demo here](https://codemirror.net/demo/sublime.html).


Internals
---------

CodeMirror extends several key configurations in the core library, including the Sublime style key bindings. At Notebook load, each Code cell is overwritten to use the Sublime key maps.


License - MIT
-------

Copyright (c) 2019, Extension Author

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
