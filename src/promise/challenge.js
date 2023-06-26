import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPi) {
  return fetch(urlAPi);
}

// fetch realiza una petición a la API, luego el primer then recibe la respuesta y la convierte en un objeto JSON, el segundo then recibe el objeto JSON y lo imprime en consola.
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
  })
  .catch(error => console.log(error));