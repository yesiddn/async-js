# Ejecutar el proyecto o scripts usando la terminal de comandos
Existen dos formas de ejecutar el script de este proyecto:
1. Ejecutar el script usando el comando `node` y el nombre del archivo a ejecutar, por ejemplo:
```bash
node src/callback/challenge.cjs
```

2. Ejecutar el script usando el comando `npm` y el nombre del script definido en el archivo `package.json`, por ejemplo:
```bash
npm run callback
```

Para esto, en el archivo `package.json` se debe definir el script a ejecutar, por ejemplo:
```json
{
  "scripts": {
    "callback": "node src/callback/challenge.js"
  }
}
```

> **Nota:** Es necesario que la extensión del archivo sea `.cjs` para que se pueda ejecutar con el comando `node` y que sea `.js` para que se pueda ejecutar con el comando `npm`, ya que en el archivo `package.json` se define que el `type` del proyecto es `module` y por lo tanto solo se pueden ejecutar archivos con extensión `.mjs` o `.js`.

# Callbacks

## Qué son los callbacks
Un Callback es una una función que se pasa como argumento de otra función y que será invocada.

Al principio es difícil entender un callback de esta forma. Piensas, “si ya tengo la función sum, para qué hacer un callback, puedo llamarla tal cual y omitir ese paso”.
Pero piensa que tienes funciones para sumar, restar, multiplicar y dividir, como en una calculadora. Las declaras todas en lista, y abajo solo tienes que usar un callback que va tirando de todas a la vez.

```js
function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};
```

De esta forma, si queremos sumar, restar, multiplicar y dividir, solo tenemos que llamar a la función calc y pasarle el callback que queremos que ejecute.

## XMLHTTPRequest
XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs).

### Tipos de estado de una petición XMLHttpRequest
- **0:** request not initialized
- **1:** server connection established (loading, todavía no se ha ejecutado el método send() que envía la petición)
- **2:** request received (loaded, se ha ejecutado el método send() que envía la petición)
- **3:** processing request (interactive, se está descargando o procesando la petición, todavía no se ha terminado de recibir la respuesta)
- **4:** request finished and response is ready (complete, se ha terminado de recibir la respuesta y ya está lista para usarse)

### Métodos de XMLHttpRequest
- **xmlhttp.open(method, url, async):** método que inicializa una petición HTTP. Los parámetros son:
  - **method:** el método HTTP a usar, GET o POST.
  - **url:** la dirección del servidor.
  - **async:** true (asíncrono) o false (síncrono).
- **xmlhttp.readyState:** propiedad que devuelve el estado de la petición.
- **xmlhttp.onreadystatechange:** Un eventHandler que se dispara cuando el estado de la petición (readyState) cambia.
- **xmlhttp.status:** propiedad que devuelve el estado de la respuesta del servidor. Los valores más comunes son:
  - **100:** "Continue"
  - **200:** "OK"
  - **300:** "Multiple Choices"
  - **400:** "Bad Request"
  - **500:** "Internal Server Error"
- **xmlhttp.send():** método que envía la petición al servidor. Si la petición es asincrónica, este método devuelve inmediatamente después de enviar la petición. Si la petición es síncrona, este método no devuelve hasta que la respuesta del servidor esté disponible.
- **xmlhttp.responseText:** propiedad que devuelve el contenido de la respuesta del servidor como un string.

#### Verbos del protocolo HTTP
- **GET:** se usa para obtener datos del servidor.
- **POST:** se usa para enviar o crear datos al servidor.
- **HEAD:** se usa para obtener la cabecera de una respuesta HTTP. Es similar a GET, pero sin el cuerpo de la respuesta. Útil para comprobar si un recurso existe, es correcto, puede ser procesado, o para obtener metadatos sobre un recurso.
- **PUT:** se usa para actualizar por completo los datos del servidor.
- **PATCH:** se usa para actualizar parcialmente los datos del servidor.
- **DELETE:** se usa para eliminar datos del servidor.

### Callback Hell
Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’ y por eso se debe evitar. Para evitar la mala práctica de un Call Hell, no es recomendable exceder de 3 callback, para ello se utilizan las promesas o el Async Away.