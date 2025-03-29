// Function to add background color to my name and my future profession.
function addBackground() {
    // Select all elements with the "nm" class
    const nameElements = document.querySelectorAll(".nm");
  
    // Loop through all elements with the "nm" class
    nameElements.forEach(function(nameElement) {
      // Set a background color with transition effect (left to right)
      nameElement.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
      nameElement.style.webkitBackgroundClip = "text"; // For webkit browsers (like Chrome)
      nameElement.style.color = "Green"; // Makes text color transparent so background shows through
  
      // Optional: Add transition for smooth effect
      nameElement.style.transition = "background 4s ease-in-out";


      // Pause for 2 seconds, then continue the transition
    setTimeout(function() {
        // You can continue by resetting the background or applying another effect after 2 seconds
        nameElement.style.background = "linear-gradient(to left, #ff7e5f, #feb47b)";
      }, 2000); 

    });
  }
  
  // Run the function when the page loads
  window.onload = addBackground;
  