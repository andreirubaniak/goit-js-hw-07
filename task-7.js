const fontSizeControlEl = document.querySelector("#font-size-control");
console.dir(fontSizeControlEl.value);
const textEl = document.querySelector("#text");
console.log(textEl.style.fontSize);

fontSizeControlEl.addEventListener('input', onInput);

function onInput(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
