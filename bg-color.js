// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to add a custom color button to the color panel
function addCustomColor() {
    const colorInput = document.getElementById('colorInput').value;
    if (isValidColor(colorInput)) {
        const colorPanel = document.getElementById('colorPanel');
        
        // Create a new button element
        const newButton = document.createElement('button');
        newButton.classList.add('color-button');
        newButton.style.backgroundColor = colorInput;
        
        // Add click event to change background color when the button is clicked
        newButton.onclick = function () {
            changeBackgroundColor(colorInput);
        };

        // Add the new button to the color panel
        colorPanel.appendChild(newButton);

        // Clear the input field
        document.getElementById('colorInput').value = '';
    } else {
        alert('Invalid color! Please enter a valid color code or name.');
    }
}

// Function to validate color input (name or hex)
function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}