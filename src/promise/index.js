// Esta es la forma de crear una promesa. Estructura básica.
const promise = new Promise(function (resolve, reject) {
  resolve('Hey!');
});

// const cows = 15;
const cows = 9;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There are not enough cows on the farm');
  }
});

// promise.then(en caso de que se cumpla correctamente la promesa).catch(en caso de que no se cumpla la promesa).finally(en cualquier caso, se ejecuta al finalizar la promesa)
countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('This is the end');
});