// JavaScript code for slideshow
window.addEventListener("DOMContentLoaded", function () {
    // Get the slideshow container and all the images
    const slideshowContainer = document.querySelector(".slideshow");
    const images = slideshowContainer.querySelectorAll("img");
  
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
  