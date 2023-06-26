# Promise

## Qué es son las promesas
El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

Una `Promise`  es un objeto que representa la terminación o el fracaso de una operación asíncrona. Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.

Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.

Las promesas pueden suceder:
- Ahora
- En el futuro
- Nunca


## Crear una promesa
Utilizamos la palabra reservada `new` seguida de la palabra `Promise` que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: `resolve` y `reject`.

El parámetro `resolve` se utiliza cuando la promesa devuelve el valor correctamente.
El parámetro `reject`, se usa en el caso de que no funcione.

```js
const promise = new Promise(function (resolve, reject){
  resolve('hey!');
});
```

## Estados de una promesa
Una Promesa puede estar en uno de los siguientes estados:
- `pending` (pendiente) → Una promesa inicia en este estado, ni cumplido ni rechazado. Una promesa inicialmente está pendiente.

- `fulfilled` (cumplida) → Significa que la operación se completó satisfactoriamente, `.then((result) => { … })`. Cuando llamamos a `resolve` entonces la promesa pasa a estar resuelta. Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método `.then()`.

- `rejected` (rechazada) → significa que la operación falló, `.catch((error) => { … })`. Si llamamos a `reject` pasa a estar rechazada la promesa (obtenemos un error que nos va a indicar la razón del rechazo). Si la promesa es rechazada entonces se ejecuta la función que pasamos a `.catch()`.

## Fetch
Por medio de Fetch se puede realizar peticiones HTTP asíncronas de JavaScript (JS) con promesas, tales como peticiones y respuestas. La API Fetch también provee un método global `fetch()` que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

Este tipo de funcionalidad se conseguía previamente haciendo uso de `XMLHttpRequest`. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como Service Workers (en-US). Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.

### Uso de fetch desde la consola
Para poder usar fetch, primero tenemos que instalarlo:
- Ir a la terminal e instalar fetch con: `npm i node-fetch`
- Para poder compilar desde VSC, debemos registrar el modulo en package.json, abrimos el archivo y al final se agrega:

```json
"type": "module"
```

- Luego, importar fetch en el archivo que se va a usar:

```js
import fetch from 'node-fetch';
```