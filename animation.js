// JavaScript code for slideshow
window.addEventListener("DOMContentLoaded", function () {
  // Get the slideshow container and all the images
  const slideshowContainer = document.querySelector(".animation-box");
  const images = slideshowContainer.querySelectorAll(".animation-thumbnail");

  let currentIndex = 0;

  // Function to display the next image in the slideshow
  function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove("active");

    // Update the currentIndex to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].classList.add("active");
  }

  // Initially hide all images except the first one
  for (let i = 1; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  // Show the first image immediately
  images[currentIndex].classList.add("active");

  // Start the slideshow by showing the next image every 5 seconds
  setInterval(showNextImage, 5000);
});
// Get thumbs-up and thumbs-down elements
var thumbsUp = document.querySelector('.thumbs-up');
var thumbsDown = document.querySelector('.thumbs-down');

// Add click event listeners to thumbs-up and thumbs-down
thumbsUp.addEventListener('click', handleThumbsUpClick);
thumbsDown.addEventListener('click', handleThumbsDownClick);

// Function to handle thumbs-up click event
function handleThumbsUpClick() {
  if (thumbsUp.classList.contains('active')) {
    // Already clicked, remove the active class
    thumbsUp.classList.remove('active');
  } else {
    // Not clicked, add the active class
    thumbsUp.classList.add('active');
    // Remove the active class from thumbs-down if present
    thumbsDown.classList.remove('active');
  }
}

// Function to handle thumbs-down click event
function handleThumbsDownClick() {
  if (thumbsDown.classList.contains('active')) {
    // Already clicked, remove the active class
    thumbsDown.classList.remove('active');
  } else {
    // Not clicked, add the active class
    thumbsDown.classList.add('active');
    // Remove the active class from thumbs-up if present
    thumbsUp.classList.remove('active');
  }
}
