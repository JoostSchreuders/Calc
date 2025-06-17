let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Klikfunctionaliteit
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Toetsenbordfunctionaliteit
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        string += key;
        input.value = string;
    } else if (key === 'Enter') {
        try {
            string = eval(string);
            input.value = string;
        } catch (err) {
            input.value = "Error";
            string = "";
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        input.value = string;
    } else if (key === 'Escape') {
        string = "";
        input.value = string;
    }
});

// Centrale verwerkingsfunctie
function handleInput(value) {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (err) {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.slice(0, -1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}
