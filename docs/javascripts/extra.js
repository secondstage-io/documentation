(function(window, document){
    // Queue Beacon commands until the script loads
    window.Beacon = window.Beacon || function(){
        (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push(arguments);
    };

    function loadBeacon() {
        if(document.querySelector('script[src="https://beacon-v2.helpscout.net"]')) return;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://beacon-v2.helpscout.net';
        document.head.appendChild(script);
    }

    // Load Helpscout script after page load
    window.addEventListener('load', loadBeacon, false);

    // Queue initialization safely
    window.Beacon('init', 'bf550169-3b5a-42e7-a929-195260e086e5');
})(window, document);
