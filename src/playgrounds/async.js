/*
En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API Not Found.

Para lanzar el error debes usar el siguiente bloque de código:

throw new Error('API Not Found');

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada, dentro del cuerpo de la función runCode debes escribir tu solución.

Ejemplo:

```js
Input:
await runCode();

Output:
Error: API Not Found
```

Más información sobre throw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
*/

export async function runCode() {
  // Tu código aquí 👈
  const url = 'https://domain-api-com';
  try {
    await fetch(url);
  } catch (error) {
    throw new Error('API Not Found');
  }
}

runCode();