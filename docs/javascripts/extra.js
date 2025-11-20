(function(window, document) {
    // Create a function to queue calls until the script loads
    window.Beacon = window.Beacon || function() {
        (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push(arguments);
    };

    // Load the Helpscout script asynchronously
    function loadBeacon() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://beacon-v2.helpscout.net';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    }

    if (document.readyState === 'complete') {
        loadBeacon();
    } else {
        window.addEventListener('load', loadBeacon, false);
    }

    // Initialize your Beacon
    window.Beacon('init', 'bf550169-3b5a-42e7-a929-195260e086e5');
})(window, document);
