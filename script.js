// Select the image element
const creativeImage = document.querySelector('.creative');

// Initialize variables
let imageIndex = 1;
const totalImages = 16;

// Function to change the image source
function changeImage() {
  // Update the image src attribute
  creativeImage.src = `./creative${imageIndex}.png`;
  
  // Update the index for the next image
  imageIndex++;
  
  // Reset index if it exceeds the total number of images
  if (imageIndex > totalImages) {
    imageIndex = 1;
  }
}

// Run changeImage every 100 milliseconds (0.1 seconds)
setInterval(changeImage, 100);












// Select the elements
const developerText = document.querySelector('.developer');
const designerText = document.querySelector('.designer');

// Initial color states
let isOrange = true;

// Function to toggle colors
function toggleColors() {
  if (isOrange) {
    developerText.style.color = "#f9ac54";
    designerText.style.color = "black";
  } else {
    developerText.style.color = "black";
    designerText.style.color = "#f9ac54";
  }
  
  // Toggle the state
  isOrange = !isOrange;
}

// Run toggleColors every 800 milliseconds (0.8 seconds)
setInterval(toggleColors, 800);