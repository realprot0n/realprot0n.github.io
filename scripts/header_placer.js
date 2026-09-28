fetch('pages\\header.html') // Get the header
.then(response => response.text()) // Turn response into text
.then(loaded_data => {
    document.getElementById('main-header-placeholder').innerHTML = loaded_data;
}) // replace the placeholder header tag
.catch(error => console.error('Error loading header:', error)); // catch errors

// i love self-explainitory comments !
