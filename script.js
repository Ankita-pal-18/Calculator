document.addEventListener('DOMContentLoaded', () => {
    const inputbox = document.getElementById('inputbox');
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.id === 'clear') {
                // Clear the display
                inputbox.value = '';
            } else if (button.id === 'delete') {
                // Delete the last character
                inputbox.value = inputbox.value.slice(0, -1);
            } else if (value === '=') {
                // Evaluate the expression
                try {
                    inputbox.value = eval(inputbox.value) || '';
                } catch {
                    inputbox.value = 'Error'; // Show error if evaluation fails
                }
            } else {
                // Append the clicked button's value to the display
                inputbox.value += value;
            }
        });
    });
});
