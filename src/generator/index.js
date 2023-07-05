// Estructura básica de una función generadora
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next().value); // 2


// funcion generadora que retorna un iterador de un array
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Ana', 'Bia', 'Carlos', 'Juan', 'Oscar', 'Yesid']);
console.log(it.next().value); // Ana
console.log(it.next().value); // Bia
console.log(it.next().value); // Carlos
console.log(it.next().value); // Juan
console.log(it.next().value); // Oscar
console.log(it.next().value); // Yesid
console.log(it.next().value); // undefined