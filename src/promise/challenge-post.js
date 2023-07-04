import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

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

// id: 242
/*
const data = {
  title: 'Leather Jacket',
  price: 199.99,
  description: 'A stylish and durable leather jacket for a fashionable look.',
  categoryId: 5,
  images: [
    'https://source.unsplash.com/640x480/?leather,jacket',
  ],
};
*/

// id: 244
const data = {
  title: 'Running Shoes',
  price: 89.99,
  description:
    'High-performance running shoes designed for maximum comfort and support during workouts.',
  categoryId: 5,
  images: [
    'https://source.unsplash.com/640x480/?running-shoes'
  ],
};

postData(`${API}/products/`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));