/**
 * Helpscout Beacon 2 Loader (Standalone .js File)
 * Updated to use DOMContentLoaded for faster, more reliable loading.
 */

// Function to load the main Helpscout Beacon script (beacon-v2.helpscout.net)
const loadBeaconScript = () => {
    // 1. Find the first script tag on the page
    const existingScript = document.getElementsByTagName("script")[0];
    
    // 2. Create the new script element
    const newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.async = true;
    newScript.src = "https://beacon-v2.helpscout.net";
    
    // 3. Insert the new script before the existing one
    existingScript.parentNode.insertBefore(newScript, existingScript);
};

// 1. Define the Beacon queue function globally (on the window object).
// This function captures calls made before the main script loads and queues them.
window.Beacon = window.Beacon || function(method, options, data){
    // Initialize readyQueue if it doesn't exist, then push the call arguments.
    (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push({
        method: method,
        options: options,
        data: data
    });
};
// Ensure the readyQueue array exists
window.Beacon.readyQueue = window.Beacon.readyQueue || [];


// 2. Check the document state and load the script after the DOM is parsed.
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // 'complete' means everything is loaded.
    // 'interactive' means the DOM is loaded, which is enough to start the script.
    loadBeaconScript();
} else {
    // Wait for the DOM structure (the HTML) to be fully parsed.
    document.addEventListener('DOMContentLoaded', loadBeaconScript, false);
}

// 3. Queue the initialization call immediately.
window.Beacon('init', 'bf550169-3b5a-42e7-a929-195260e086e5');
