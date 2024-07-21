document.addEventListener('DOMContentLoaded', function () {
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null,
        history: []
    };

    const display = document.querySelector('.calculator-screen');
    const keys = document.querySelector('.calculator-keys');
    const historyList = document.getElementById('history-list');
    const themeToggle = document.getElementById('theme-toggle');

    function updateDisplay() {
        display.value = calculator.displayValue;
    }

    function addHistoryEntry(entry) {
        calculator.history.push(entry);
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    }

    function handleOperator(nextOperator) {
        const { firstOperand, displayValue, operator } = calculator;
        const inputValue = parseFloat(displayValue);

        if (operator && calculator.waitingForSecondOperand) {
            calculator.operator = nextOperator;
            return;
        }

        if (firstOperand == null && !isNaN(inputValue)) {
            calculator.firstOperand = inputValue;
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            calculator.displayValue = String(result);
            calculator.firstOperand = result;

            addHistoryEntry(`${firstOperand} ${operator} ${inputValue} = ${result}`);
        }

        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
    }

    function calculate(firstOperand, secondOperand, operator) {
        if (operator === '+') return firstOperand + secondOperand;
        if (operator === '-') return firstOperand - secondOperand;
        if (operator === '*') return firstOperand * secondOperand;
        if (operator === '/') return firstOperand / secondOperand;

        return secondOperand;
    }

    function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
        calculator.history = [];
        historyList.innerHTML = '';
    }

    keys.addEventListener('click', (event) => {
        const { target } = event;
        if (!target.matches('button')) return;

        if (target.classList.contains('operator')) {
            handleOperator(target.value);
            updateDisplay();
            return;
        }

        if (target.classList.contains('all-clear')) {
            resetCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equal-sign')) {
            handleOperator('=');
            updateDisplay();
            return;
        }

        if (target.classList.contains('decimal')) {
            if (!calculator.displayValue.includes(target.value)) {
                calculator.displayValue += target.value;
            }
            updateDisplay();
            return;
        }

        if (calculator.waitingForSecondOperand) {
            calculator.displayValue = target.value;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = calculator.displayValue === '0' ? target.value : calculator.displayValue + target.value;
        }

        updateDisplay();
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });

    updateDisplay();
});
