const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  // console.log(values);
  const keys = Object.keys(employees);
  // console.log(keys);
  let message = '';
  let bestValue = values[0];
  // console.log(bestValue);
  for (let i = 0; i < values.length; i += 1) {
    if (bestValue < values[i]) {
      bestValue = values[i];
    }
    //console.log(values.indexOf(bestValue));
    message = keys[values.indexOf(bestValue)];
  }

  return message;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

console.log(findBestEmployee({}));
