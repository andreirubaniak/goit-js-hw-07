const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsEl = ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.textContent = ingredient;
    return element;
});
// console.log(listIngredients);

const ingredientsEl = document.querySelector('ul#ingredients');
// console.log(ingredientsEl);

ingredientsEl.append(...listIngredientsEl);