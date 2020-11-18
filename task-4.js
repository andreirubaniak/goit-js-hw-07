let counterResult = 0;
let counterValue = document.querySelector('#value').textContent;
console.log("counterValue", counterValue)
const decrementBtn = document.querySelector('[data-action = "decrement"]');
console.log("decrementBtn", decrementBtn)
const incrementBtn = document.querySelector('[data-action = "increment"]');
console.log("incrementBtn", incrementBtn)

function decrement () {
    counterValue = counterResult -= 1;
    console.log("counterValue", counterValue)
};

function increment () {
    counterValue = counterResult += 1;
    console.log("counterValue", counterValue)
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);


