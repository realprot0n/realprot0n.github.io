fetch('/pages/header.html') // Get the header
.then(response => response.text()) // Turn response into text
.then(loaded_data => {
    document.getElementById('main-header-placeholder').innerHTML = loaded_data;
}) // replace the placeholder header tag
.catch(error => console.error('Error loading header:', error)); // catch errors

// i love self-explainitory comments !

async function loadScript() {
    console.log("HEADER: adding the script");
    let script = document.createElement("script");
    let response = await fetch("/scripts/music_player.js");
    let code = await response.text();
    let text = document.createTextNode(code);
    script.appendChild(text);
    document.body.appendChild(script); 
    console.log("HEADER: added the script");
}
loadScript();