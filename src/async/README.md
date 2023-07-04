# Funciones asíncronas
La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.
Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.

La palabra async antes de la función, hace que la función devuelva una promesa.
La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.

Más información sobre [async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function).

Ejemplo de [uso](./index.js).