// Function to load the Helpscout Beacon script
const loadBeaconScript = () => {
    // 1. Find the first script tag in the document
    const existingScript = document.getElementsByTagName("script")[0];
    
    // 2. Create the new script element
    const newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.async = true;
    newScript.src = "https://beacon-v2.helpscout.net";
    
    // 3. Insert the new script before the existing one
    existingScript.parentNode.insertBefore(newScript, existingScript);
};

// 4. Define the Beacon queue function globally (if it doesn't exist)
// It collects calls until the main script loads.
window.Beacon = window.Beacon || function(method, options, data){
    (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push({
        method: method,
        options: options,
        data: data
    });
};
window.Beacon.readyQueue = window.Beacon.readyQueue || [];


// 5. Check document state and load the script
if (document.readyState === "complete") {
    // If the page is already loaded, execute immediately
    loadBeaconScript();
} else {
    // Otherwise, wait for the 'load' event
    window.addEventListener("load", loadBeaconScript, false);
}

// 6. Queue initialization immediately (combined from the second <script> block)
window.Beacon('init', 'bf550169-3b5a-42e7-a929-195260e086e5');
