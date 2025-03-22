document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let currentValue = '';
    let previousValue = '';
    let operation = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                currentValue += value;
                result.value = currentValue;
            } else if (button.classList.contains('operator')) {
                if (currentValue === '') return;
                if (previousValue !== '') {
                    calculate();
                }
                operation = value;
                previousValue = currentValue;
                currentValue = '';
            } else if (button.classList.contains('equals')) {
                if (currentValue === '' || previousValue === '') return;
                calculate();
                operation = null;
                previousValue = '';
                return;
            } else if (button.classList.contains('clear')) {
                currentValue = '';
                previousValue = '';
                operation = null;
                result.value = '';
            }
        });
    });

    function calculate() {
        let computation;
        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }

        currentValue = computation.toString();
        result.value = currentValue;
    }
});
