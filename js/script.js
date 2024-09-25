// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the photos and documentary elements
    const mukimPhoto = document.querySelector('.first_photo img');
    const rakibPhoto = document.querySelector('.secend_photo img');
    const mukimDocumentary = document.querySelector('.first_documentory');
    const rakibDocumentary = document.querySelector('.secend_documentory');
    const documentaryContainer = document.querySelector('.dv_documantory'); // The entire container

    // Function to show Mukim's documentary
    function showMukimDocumentary() {
        mukimDocumentary.classList.add('show'); // Show Mukim's documentary
        rakibDocumentary.classList.remove('show'); // Hide Rakib's documentary
        documentaryContainer.classList.add('show'); // Show the documentary container
    }

    // Function to show Rakib's documentary
    function showRakibDocumentary() {
        rakibDocumentary.classList.add('show'); // Show Rakib's documentary
        mukimDocumentary.classList.remove('show'); // Hide Mukim's documentary
        documentaryContainer.classList.add('show'); // Show the documentary container
    }

    // Add click event listeners for Mukim's and Rakib's photos
    mukimPhoto.addEventListener('click', showMukimDocumentary);
    rakibPhoto.addEventListener('click', showRakibDocumentary);
});





