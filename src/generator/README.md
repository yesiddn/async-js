# Generators
Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. La palabra reservada yield se usa para pausar y reanudar una función generadora.
Fuente: [digital ocean](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es)

Para más información sobre generadores, puedes consultar la [documentación oficial](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Generator).

## Estrucutra de un generador
La estructura del Generador consta de la palabra `function` seguido de un asterísco `*`: `function*`. Esta es una función generadora heredada, es decir, una función que devuelve un objeto generador.

El resultado que se quiere obtener se coloca al lado derecho de `yield`, puede ser de cualquier tipo (string, numérico, objeto, etc) y se puede tener tantos `yield` que se desee.

## Ejemplo
```javascript
function* gen(){
	yield 1;
	yield 2;
	yield 3;
}

const g = gen();
console.log(g.next().value); // 1
```

Para ver el ejemplo en funcionamiento, puedes ir al siguiente [enlace](./index.js) o ejecutar el siguiente comando en tu terminal:
```bash
node src/generator/index.js
```