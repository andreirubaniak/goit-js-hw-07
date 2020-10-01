# goit-js-hw-05

Задача 5-1 function-constructor

Напиши функцию-конструктор Account, которая создает объект со свойствами login и
email.

В prototype функции-конструктора добавь метод getInfo(), который возвращает
строку со значениями свойств login и email объекта.

Задача 5-2 class

Напиши класс User для создания пользователя со следующим свойствами:

name - строка age - число followers - число Добавь метод getInfo(), который,
выводит строку: User ${имя} is ${возраст} years old and has \${кол-во фоловеров}
followers

Задача 5-3 использование методов класса

Напиши класс Storage, который будет создавать объекты для управления складом
товаров. При вызове будет получать один аргумент - начальный массив товаров, и
записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров addItem(item) - получает новый
товар и добавляет его к текущим removeItem(item) - получает товар и, если он
есть, удаляет его из текущих

Задача 5-4 переиспользование методов класса

Напиши класс StringBuilder. На вход он получает один параметр - строку, которую
записывает в свойство \_value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля \_value Метод append(str) -
получает параметр str (строку) и добавляет ее в конец \_value Метод
prepend(str) - получает параметр str (строку) и добавляет ее в начало value
Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в
конец \_value Метод pad должен использовать методы append и prepend

Задача 5-5 класс

Напиши класс Car с указанными свойствами и методами.

class Car { /\*

- Добавь `статический` метод
- `getSpecs(car)`, который принимает
- объект-машину как параметр
- и возвращает шаблонную строку
- со свойствами и значениями объекта.
- Свойства:
- maxSpeed,
- speed,
- isOn,
- distance,
- price
- Пример строки, полученной этим методом:
- 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000' \*/

/\*

- Конструктор получает объект настроек.
-
- Добавь свойства будущеего экземпляра класса:
- speed - текущая скорость,
-          начальное значение `0`
- price - цена автомобиля
- maxSpeed - максимальная скорость
- isOn - заведен ли автомобиль.
-         Значения `true` или `false`,
-         начальное значение false
- distance - пробег в километрах,
-             начальное значение `0`
  \*/ constructor() {}

/\*

- Добавь геттер и сеттер
- для свойства `price`, который будет
- работать с свойством цены автомобиля.
-
- ВАЖНО: для записи методов get и set
- значение параметра записывают с
- подчеркиванием. См. ниже пример 1. \*/

/\*

- Метод, который заводит автомобиль
- Записывает в свойство `isOn` значение `true` \*/ turnOn() {}

/\*

- Метод, чтобы заглушить автомобиль
- Этот метод должен записывать
- в свойство isOn значение false,
- и сбрасывать текущую скорость до 0 \*/ turnOff() {}

/\*

- Этот метод должен добавлять
- к свойству `speed` полученное
- значение, при условии,
- что результирующая скорость
- не больше чем значение свойства `maxSpeed` \*/ accelerate(value) {}

/\*

- Этот метод должен отнимать
- от свойства `speed`
- полученное значение, при условии,
- что результирующая скорость не меньше 0 \*/

decelerate(value) {}

/\*

- Этот метод должен добавлять к свойству
- `distance` пробег в километрах,
- т.е. hours \* speed,
- но только в том случае,
- если машина заведена! \*/ drive(hours) {} }

#### Пример 1.

```js
class Guest {
  // Собственные свойства класса размещаем в конструкторе
  constructor(name, roomNumber) {
    /* параметр name не должен
     *   совпадать с названием свойства
     *   но должен быть похож.
     *   Поэтому используют прием смены
     *   названия добавляя символ '_'.
     *   Хотя это может любой другой символ
     */
    this._name = name;
  }

  // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```
