// try and catch
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json(); // el await en este caso no es necesario, pero se puede usar para esperar la respuesta del servidor
  return data;
}

const anotherFunction = async () => {
  try {
    const products = await fetchData(`${API}/products`);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    const category = await fetchData(`${API}/categories/${product.category.id}`);

    console.log('products', products[0]);
    console.log('product title', product.title);
    console.log('category name', category.name);
  } catch(error) {
    console.log(error);
  }
}

setTimeout(() => {
  console.log('Hello');
}, 0);

console.log('Before');
anotherFunction(API);
console.log('After');
