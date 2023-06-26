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

// consultas anidadas con fetch
fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then((response) => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then((response) => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó la petición'));