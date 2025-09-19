document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';

    const historyList = document.getElementById('history-list');
    const themeToggle = document.getElementById('theme-toggle');
    let calculations = [];
    let isRadians = false;
    let expression = '';
    let hasError = false;

    // Add click handlers for all buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => handleInput(button.textContent));
    });

    // Add keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            handleInput(e.key);
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            handleInput(e.key);
        } else if (e.key === 'Enter') {
            handleInput('=');
        } else if (e.key === 'Escape') {
            handleInput('C');
        } else if (e.key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    });


    function handleInput(value) {
        if (hasError && value !== 'AC') return;
        
        if (value >= '0' && value <= '9' || value === '.') {
            if (value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            expression += value;
        } else if (value === 'AC') {
            clear();
            hasError = false;
        } else if (value === '=') {
            try {
                if (expression) {
                    let result = evaluateExpression(expression);
                    addToHistory(expression, result);
                    currentInput = result.toString();
                    expression = result.toString();
                }
            } catch (error) {
                currentInput = 'Error';
                hasError = true;
            }
        } else if (['(', ')'].includes(value)) {
            expression += value;
            currentInput = '';
        } else if (value === '%') {
            if (currentInput) {
                let percent = parseFloat(currentInput) / 100;
                currentInput = percent.toString();
                expression = expression.slice(0, -currentInput.length) + percent;
            }
        } else if (['sin', 'cos', 'tan', 'π', 'e', '√', 'DEG'].includes(value)) {
            handleSpecialFunction(value);
        } else {
            if (currentInput || value === '-') {
                expression += value;
                currentInput = '';
            }
        }
        updateDisplay();
    }

    function evaluateExpression(expr) {
        // Sanitize input to prevent eval() security risks
        if (!/^[0-9+\-*/(). ]*$/.test(expr)) {
            throw new Error('Invalid expression');
        }
        return Function('"use strict";return (' + expr + ')')();
    }

    function handleSpecialFunction(value) {
        try {
            switch(value) {
                case 'sin':
                case 'cos':
                case 'tan':
                    if (!currentInput) return;
                    let angle = parseFloat(currentInput);
                    if (!isRadians) {
                        angle = angle * Math.PI / 180;
                    }
                    currentInput = Math[value](angle).toFixed(8).toString();
                    expression = currentInput;
                    break;
                case 'π':
                    currentInput = Math.PI.toString();
                    expression += Math.PI;
                    break;
                case 'e':
                    currentInput = Math.E.toString();
                    expression += Math.E;
                    break;
                case '√':
                    if (!currentInput) return;
                    let num = parseFloat(currentInput);
                    if (num < 0) throw new Error('Invalid input');
                    currentInput = Math.sqrt(num).toString();
                    expression = currentInput;
                    break;
                case 'DEG':
                    isRadians = !isRadians;
                    document.querySelector('.special').textContent = isRadians ? 'RAD' : 'DEG';
                    return;
            }
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            hasError = true;
            updateDisplay();
        }
    }

    function clear() {
        currentInput = '';
        previousInput = '';
        currentOperator = '';
        expression = '';
        updateDisplay();
    }

    function updateDisplay() {
        let displayValue = currentInput || expression || '0';
        // Limit display length
        if (displayValue.length > 12) {
            displayValue = parseFloat(displayValue).toExponential(7);
        }
        result.value = displayValue;
    }

    function addToHistory(calculation, result) {
        if (calculations.length >= 10) {
            calculations.shift(); // Keep only last 10 calculations
        }
        calculations.push({
            calculation: calculation,
            result: Number(result).toLocaleString()
        });
        updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
        historyList.innerHTML = calculations
            .map(calc => `<div class="history-item">
                ${calc.calculation} = ${calc.result}
            </div>`)
            .join('');
    }

    document.getElementById('clear-history').addEventListener('click', () => {
        calculations = [];
        updateHistoryDisplay();
    });

    // Add animation to button clicks
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('button-press');
            setTimeout(() => button.classList.remove('button-press'), 200);
        });
    });
});
