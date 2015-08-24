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

    // The easiest way to mess with someones console,
    // is to constantly smash the logs.
    function messWithConsole() {
        // setInterval()
    }

    function addLog() {

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