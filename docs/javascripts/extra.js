/**
 * Helpscout Beacon 2 Loader - MkDocs Compatible Version
 * This version simplifies the loading logic and relies on the script being 
 * correctly placed and executed by MkDocs.
 */

// 1. Function to load the main Helpscout Beacon script
const loadBeaconScript = () => {
    // Check if the script is already present to prevent duplicates on navigation.
    if(document.querySelector('script[src="https://beacon-v2.helpscout.net"]')) return;
    
    // Find the first script tag on the page
    const existingScript = document.getElementsByTagName("script")[0];
    
    // Create the new script element
    const newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.async = true;
    newScript.src = "https://beacon-v2.helpscout.net";
    
    // Insert the new script before the existing one
    if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.insertBefore(newScript, existingScript);
    } else {
        // Fallback: append to head if no existing script found (unlikely in MkDocs)
        document.head.appendChild(newScript);
    }
};

// 2. Define the Beacon queue function globally (necessary for initialization)
window.Beacon = window.Beacon || function(method, options, data){
    (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push({
        method: method,
        options: options,
        data: data
    });
};
window.Beacon.readyQueue = window.Beacon.readyQueue || [];


// 3. Trigger the script loading immediately.
// Since MkDocs typically loads extra.js right before the </body>, the DOM is 
// essentially ready.
loadBeaconScript();


// 4. Queue the initialization call immediately.
window.Beacon('init', 'bf550169-3b5a-42e7-a929-195260e086e5');
