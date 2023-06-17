// Callbacks: Funciones que se pasan como parámetros a otras funciones para que se ejecuten después de un proceso asíncrono.

// En este ejemplo el callback es sincrono, ya que se ejecuta al momento de llamar a la función calc.
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// En este ejemplo el callback es asincrono, ya que se ejecuta despues de 2 segundos.
// setTimeout es una web api que permite que JavaScript se ejecute de manera asincrona.
setTimeout(function () {
  console.log('Hola JavaScript');
}, 2000);


function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Yesid'); // Parametros: callback, tiempo, argumentos del callback.