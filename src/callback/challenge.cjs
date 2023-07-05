// XMLHTTPRequest
// Se requiere instalar el modulo xmlhttprequest con `npm i xmlhttprequest` para que funcione usando code runner ya que esta es una funcion del navegador
// https://www.npmjs.com/package/xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// las contantantes en mayusculas indican que son valores que no van a cambiar dentro de nuestros archivos
const API = 'https://api.escuelajs.co/api/v1';

// funcion principal que se encarga de hacer la peticion a la API
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
  xhttp.open('GET', urlApi, true); // GET es el metodo, urlApi es la url a la que se va a hacer la peticion, true es para que sea asincrona la peticion
  
  // funcion que se encarga de validar el estado en el que se encuentra la peticion
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      // el estado 4 es que la peticion se completo
      if (xhttp.status === 200) {
        // el estado 200 es que la peticion fue exitosa
        callback(null, JSON.parse(xhttp.responseText)); // el primer parametro es el error, el segundo es la respuesta la cual se parsea a JSON porque viene en formato string y se necesita que sea un objeto
      } else {
        const error = new Error('Error ' + urlApi); // se crea un nuevo error con el mensaje de error y la url de la peticion
        return callback(error, null); // se regresa el error y la respuesta es null
      }
    }
  };
  
  xhttp.send(); // se envia la peticion
}

fetchData(`${API}/products`, function (error1, data1) {
  // Petición para recibir toda la lista de productos
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    // Petición para recibir el primer producto de la lista
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      // Petición para recibir la categoría del primer producto
      if (error3) return console.error(error3);
      // si se continua anidando callbacks se crea el callback hell
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});