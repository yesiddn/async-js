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

## Fetch POST
Para hacer un POST con fetch, se debe pasar un objeto con la configuración de la petición.
- `method`: método HTTP a utilizar (GET, POST, PUT, DELETE, etc.). Por defecto es GET.
- `mode`: modo de la petición, por ejemplo cors, no-cors, same-origin, etc. Tener en cuenta que `mode: "no-cors"` solo permite un conjunto limitado de encabezados en la solicitud:
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type` with a value of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

- `credentials`: indica si se deben enviar las credenciales con la petición (cookies, cabeceras HTTP de autenticación o TLS). Por defecto es omit, que no envía las credenciales.
- `headers`: objeto con las cabeceras HTTP que se quieren enviar.
- `body`: cuerpo de la petición, normalmente se envía en formato JSON.

Para ver más opciones, ver la documentación de [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

Un ejemplo de uso de fetch POST:

```js
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST', // metodo de envio. GET, POST, PUT, DELETE, etc
    mode: 'cors', // modo de envio. cors, no-cors, same-origin
    credentials: 'same-origin', // son las credenciales que se envian. omit, same-origin
    headers: {
      'content-type': 'application/json' // tipo de contenido que se envia, en caso de ser un blog de datos, archivos, etc., tendriamos que cambiar el tipo de contenido. application/json, multipart/form-data, text/plain, etc
    },
    body: JSON.stringify(data) // datos que se envian. string, FormData, Blob, BufferSource, URLSearchParams, etc
  });

  return response;
}
```

⚠️ Hay permisos que se deben tomar en cuenta para que el intercambio sea seguro, hay que especificar el modo (mode), aquí se indica si se permite solicitudes de origen cruzado. Por ejemplo, si se está en un servidor local y se quiere hacer una petición a un servidor externo, se debe especificar el modo cors. Si se está en un servidor externo y se quiere hacer una petición a un servidor local, se debe especificar el modo no-cors.

### Qué es origen cruzado
Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado “Cross Origin” es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la petición.
Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas. En el enlace detallan más sobre el concepto de Cors [aquí](https://javascript.info/fetch-crossorigin) y [aquí](https://developer.mozilla.org/en-US/docs/Glossary/CORS).