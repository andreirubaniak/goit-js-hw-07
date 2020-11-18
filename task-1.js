const countEl = document.querySelectorAll('ul#categories li.item');
console.log(`В списке ${countEl.length} категории.`);

// const everyoneItemsEl = document.querySelectorAll('li.item');
countEl.forEach(array => console.log(`Категория: ${array.firstElementChild.textContent}\nКоличество элементов: ${array.lastElementChild.children.length}`));