document.getElementById('converButton').addEventListener('click', function () {
    const inputValue = parseFloat(document.getElementById('inputTask').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const targetUnit = document.getElementById('targetUnit').value;

    if (isNaN(inputValue)) {
        celsiusValue.innerHTML = 'Please enter a valid number';
        return;
    }

    let celsiusValue;

    // Convert input to Celsius
    switch (inputUnit) {
        case 'Celsius':
            celsiusValue = inputValue;
            break;
        case 'Fahrenheit':
            celsiusValue = (inputValue - 32) * 5 / 9;
            break;
        case 'Kelvin':
            celsiusValue = inputValue - 273.15;
            break;
    }

    let result;

    // Convert Celsius to target unit
    switch (targetUnit) {
        case 'Celsius':
            result = celsiusValue;
            break;
        case 'Fahrenheit':
            result = (celsiusValue * 9 / 5) + 32;
            break;
        case 'Kelvin':
            result = celsiusValue + 273.15;
            break;
    }

    // Display result
    document.getElementById('output').innerText = `Converted Temperature: ${result.toFixed(2)} °${targetUnit.charAt(0)}`;
});