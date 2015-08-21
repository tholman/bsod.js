/*!
 * bsod.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

(function bsod() {

    function init() {
        window.addEventListener('error', onError, false);
    }

    function onError(event) {

        // Lol, forget errors
        event.preventDefault();
        event.stopPropagation();

        // Lol, forget the dom
        wipeDom();

        // Lol, the console is dumb
        messWithConsole();

        // Lol, blue screen!
        showBSOD();
    }

    function messWithConsole() {

    }

    function wipeDom() {
        document.body.innerHTML = '';
    }

    function showBSOD() {
        console.log( "bsod this up!" );
    }

    init();

})()

// error