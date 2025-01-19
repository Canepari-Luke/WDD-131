document.addEventListener("DOMContentLoaded", function() {
    // Get the select element
    const modeSelect = document.getElementById("mode-select");
    // Get the logo image element
    const logo = document.querySelector(".logo");
  
    // Add event listener for change event
    modeSelect.addEventListener("change", function() {
      // Check the selected option value
      const selectedMode = modeSelect.value;
  
      // Update the class of the body element based on the selected mode
      if (selectedMode === "Dark") {
        document.body.classList.add("dark");
        // Update the src attribute of the logo image
        logo.src = "byui-logo_white.png";
      } else {
        document.body.classList.remove("dark");
        // Update the src attribute of the logo image
        logo.src = "byui-logo_blue.webp";
      }
    });
  });