let counterResult = 0;
const counterValue = document.querySelector('#value');
console.log("counterValue", counterValue)
const decrementBtn = document.querySelector('[data-action = "decrement"]');
console.log("decrementBtn", decrementBtn)
const incrementBtn = document.querySelector('[data-action = "increment"]');
console.log("incrementBtn", incrementBtn)

function decrement () {
    console.log("counterValue", counterValue)
    counterValue.textContent = counterResult -= 1;
};

function increment () {
    console.log("counterValue", counterValue)
    counterValue.textContent = counterResult += 1;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


