const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (value === 'C') {
      currentInput = '';
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (/[0-9+\-*/.=]/.test(key)) {
    if (key === '=' || key === 'Enter') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += key;
    }
    display.value = currentInput;
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key === 'c' || key === 'C') {
    currentInput = '';
    display.value = '';
  }
});
