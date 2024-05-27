// const greet = function (name) {
//   return 'Hi ' + name;
// };

// console.log(greet('Ariel'));
// console.log(greet);

// const a = 'Hey! ';

// function global() {
//   const b = `Wath's `;

//   function local() {
//     const c = 'up?';
//     return a + b + c;
//   }

//   return local;
// }

// console.log(global());
// console.log(global()());

// const closure = global();
// console.log(closure());

const myCounter = (function () {
  let _counter = 0;

  function increment() {
    return _counter++;
  }

  function decrement() {
    return _counter--;
  }

  function value() {
    return _counter;
  }

  return {
    increment,
    decrement,
    value,
  };
})();

console.log(myCounter.value());
myCounter.increment();
console.log(myCounter.value());
myCounter.increment();
myCounter.increment();
console.log(myCounter.value());
myCounter.decrement();
console.log(myCounter.value());
