const inputEl = document.querySelector('#validation-input');
console.log("inputEl", inputEl)

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) { 
    
    if (event.currentTarget.value.length === Number(inputEl.dataset.length))
    { inputEl.classList.add('valid'); inputEl.classList.remove('invalid') }
    else { inputEl.classList.add('invalid'); inputEl.classList.remove('valid')};
    
    console.log("length", event.currentTarget.value.length)
    console.log(event.currentTarget.value.length === Number(inputEl.dataset.length))
}
 
