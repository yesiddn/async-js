// XMLHTTPRequest
// Se requiere instalar el modulo xmlhttprequest con `npm i xmlhttprequest` para que funcione usando code runner ya que esta es una funcion del navegador
// https://www.npmjs.com/package/xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// las contantantes en mayusculas indican que son valores que no van a cambiar dentro de nuestros archivos
const API = ' https://api.escuelajs.co/api/v1';

// funcion principal que se encarga de hacer la peticion a la API
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
  xhttp.open('GET', urlApi, true); // GET es el metodo, urlApi es la url a la que se va a hacer la peticion, true es para que sea asincrona la peticion

  // funcion que se encarga de validar el estado en el que se encuentra la peticion
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readystate === 4) {
      // el estado 4 es que la peticion se completo
      if (xhttp.status === 200) {
        // el estado 200 es que la peticion fue exitosa
        callback(null, JSON.parse(xhttp.responseText)); // el primer parametro es el error, el segundo es la respuesta la cual se parsea a JSON porque viene en formato string y se necesita que sea un objeto
        console.log('xhttp.responseText', xhttp.responseText);
      }
    } else {
      const error = new Error('Error ' + urlApi); // se crea un nuevo error con el mensaje de error y la url de la peticion
      return callback(error, null); // se regresa el error y la respuesta es null
    }
  };
  
  xhttp.send(); // se envia la peticion
}