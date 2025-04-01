// Appends the given value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clears the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Evaluates the expression in the display
function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace displayed symbols with valid JavaScript operators
        const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression); // Evaluate the sanitized expression
    } catch (error) {
        display.value = 'Error'; // Display error if evaluation fails
    }
}

// Calculator program made by Nexus