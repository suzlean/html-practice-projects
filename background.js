// Listen for clicks on the button with ID "ColorButton"
document.getElementById('ColorButton').addEventListener('click', function () {

    // Generate a random hex color:
    const randomColor = '#' +                       // Start with a hash symbol
      Math.floor(                                  // Round down the random number
        Math.random() * 16777215                   // Generate a number between 0 and 16777215 (0xFFFFFF)
      )
      .toString(16)                                // Convert the number to a hexadecimal string
      .padStart(6, '0');                           // Ensure it's 6 characters long by padding with zeros if needed
  
    // Change the background color of the entire page to the new random color
    document.body.style.backgroundColor = randomColor;
  
    // Update the content of the paragraph with ID "colorCode"
    // to display the current hex color value
    document.getElementById('colorcode').textContent =
      'Current Color: ' + randomColor;
  
  });
  
  