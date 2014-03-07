Parts of the code here are copied from James Burke's [documentation](https://github.com/jrburke/almond#exporting-a-public-api).

Illustrates how to use almond to completely wrap a library produced
with RequireJS in such a way that:

1. RequireJS is not installed (`require` and `define` do not exist in
the global namespace).

2. The main module is loaded synchronously.

3. The main module exports two variables into the global space (`Foo`
and `Bar`).

Everything is ready to use as is. Just open `index.html` in a
browser. The code in `build/built.js` was produce with:

    $ r.js build.js

After you load, the output to the console should be:

    outside
    loaded modC
    inside
    out in the HTML!
    value of window.Foo: Object {someValue: 1}
    value of window.Bar: Object {someValue: 2}


If the bundle created by `r.js` loaded asynchronously the output would
be something like:

    outside
    out in the HTML!
    value of window.Foo: undefined
    value of window.Bar: undefined
    loaded modC
    inside
