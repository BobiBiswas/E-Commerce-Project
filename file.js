// script.js

// Function to increment the input value
function incrementValue() {
    var inputElement = document.getElementById('input'); // Access the input element by its ID
    var currentValue = parseInt(inputElement.value); // Get the current value and convert it to an integer
    inputElement.value = currentValue + 1; // Increment the value by 1
}

// Function to decrement the input value
function decrementValue() {
    var inputElement = document.getElementById('input'); // Access the input element by its ID
    var currentValue = parseInt(inputElement.value); // Get the current value and convert it to an integer
    
    // Decrement the value by 1 but ensure it doesn't go below 0
    if (currentValue > 0) {
        inputElement.value = currentValue - 1; // Decrement the value by 1
    }
}
