const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!!'), 2000)
      : reject(new Error('Error!'));
  });
}

// una funcion async no detiene la ejecucion del codigo
// async y await solo ejecutan codigo asincrono con promesas
const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');