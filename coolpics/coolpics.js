document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is running!"); // Debugging check

  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  // Check if menu button and menu elements exist
  if (!menuButton || !menu) {
    console.error("Menu button or menu not found!");
    return;
  }

  // Function to toggle menu visibility on button click
  function toggleMenu() {
    console.log("Menu button clicked!"); // Debugging check
    menu.classList.toggle("hide");
  }

  menuButton.addEventListener("click", toggleMenu);

  // Function to handle window resize
  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }

  // Call handleResize on page load
  handleResize();

  // Listen for window resize events
  window.addEventListener("resize", handleResize);
});

// Modal-related functions

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
          </div>`;
}

function viewHandler(event) {
  const clickedImage = event.target;
  
  // Get the src attribute of the clicked image and adjust it for the larger image
  const src = clickedImage.src.replace("-sm", "-full"); // Change the source to the full image
  const altText = clickedImage.alt;

  // Generate the modal HTML with the large image and alt text
  const modalHTML = viewerTemplate(src, altText);

  // Insert the modal at the top of the body
  document.body.insertAdjacentHTML("afterbegin", modalHTML);

  // Add event listener to close the modal
  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);

  // Check if the image width is 1000px or greater and apply the expanded class
  const viewer = document.querySelector(".viewer");
  const image = viewer.querySelector("img");

  // Check if the image width is at least 1000px
  if (image.width >= 1000) {
    viewer.classList.add("viewer-expanded"); // Add the class to switch the background to a border
  }
}

// Function to close the modal
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove(); // Remove the modal from the DOM
}

// Add the event listener to the gallery
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
