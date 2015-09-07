/*!
 * bsod.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

(function bsod() {

    /**
     * Utils
     */
    function applyProperties( target, properties ) {

      for( var key in properties ) {
        target.style[ key ] = properties[ key ];
      }
    }

    /**
     * BSON
     */

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

        var body = document.body;

        /**
         * Main Container
         */
        
        var bgStyles = {
            'font-family': "'Lucida Console', 'Lucida Sans Typewriter', monaco, 'Bitstream Vera Sans Mono', monospace",
            'background': '#0000AA',
            'position': 'fixed',
            'top': '0px',
            'left': '0px',
            'width': '100%',
            'height': '100%',
            'color': '#fff'
        }

        var bsodContainer = document.createElement('div');
        applyProperties( bsodContainer, bgStyles );

        /**
         * BSOD Error
         */

        var errorStyles = {
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'transform': 'translateX(-50%) translateY(-50%)',
            'font-size': '14px',
            'max-width': '420px'
        }

        var error = document.createElement('div');
        applyProperties( error, errorStyles );
        bsodContainer.appendChild( error );

        /**
         * Header
         */

        var headerStyles = {
            'text-align': 'center',
            'margin-bottom': '10px'
        }

        var header = document.createElement('div');
        applyProperties( header, headerStyles );
        error.appendChild( header );

        /**
         * Header Contents
         */

        var headerContentStyles = {
            'background': 'rgba(255, 255, 255, 0.7)',
            'color': '#0000AA',
            'margin': 'auto'
        }

        var headerContent = document.createElement('span');
        applyProperties( headerContent, headerContentStyles );
        headerContent.innerHTML = 'Chrome'; // @TODO: Browser sniffing here.
        header.appendChild( headerContent );

        /**
         * Main Text
         */

        var mainContent = document.createElement('div');
        
        // Yeah, its pretty strange that its on one line. Oh well.
        mainContent.innerHTML = "A problem has been detected with your JavaScript, and this tab has been shut down to prevent damage to your computer.<br><br>If this is the first time you're seeing this error, restart your computer.<br><br>If problems continue, press ctrl + z on the files you're working on, until it resolves itself.";
        error.appendChild( mainContent );
        



        body.appendChild(bsodContainer);
    }

    init();

})()

// error