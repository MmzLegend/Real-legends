// Wait for the logo animation to complete
document.addEventListener('DOMContentLoaded', function() {
    // Get the logo element
    var logo = document.querySelector('.logo');

    // Add a transitionend event listener to the logo
    logo.addEventListener('transitionend', function() {
        // Remove the hidden class from the main element to display the home page content
        var main = document.querySelector('main');
        main.classList.remove('hidden');
    });

    // Redirect to the home page after a specified delay (in milliseconds)
    var redirectDelay = 3000; // Adjust this value as needed
    setTimeout(function() {
        window.location.href = 'home page.html'; // Replace 'index.html' with the path to your home page
    }, redirectDelay);
});
