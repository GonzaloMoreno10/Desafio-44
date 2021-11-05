const socket = io.connect('http://localhost:8080', { forceNew: true });

// Cuando arrancamos pedimos la data que hay actualmente enviando un socket
socket.emit('askProducts');
socket.emit('askMensajes');
let f = new Date();

function sendProduct(e) {
  let fecha = new Date();
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const date = new Date();
  const stock = document.getElementById('stock').value;
  const code = document.getElementById('code').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;
  let objeto = {
    title: title,
    price: price,
    date: date,
    code: code,
    stock: stock,
    description: description,
    image: image,
  };

  console.log(objeto);
  socket.emit('productos', objeto);
  socket.emit('mensajes', {
    email: 'boot',
    fecha: fecha,
    texto: 'Se cargo un nuevo producto',
  });
}

function sendMensaje(e) {
  let email = document.getElementById('email').value;
  let fecha = Date.now();
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let edad = document.getElementById('edad').value;
  let alias = document.getElementById('alias').value;
  let avatar = document.getElementById('avatar').value;
  let texto = document.getElementById('texto').value;
  let objeto = {
    author: {
      email: email,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      alias: alias,
      avatar: avatar,
    },
    texto: texto,
    fecha: fecha,
  };

  socket.emit('mensajes', objeto);
}

function renderProducts(data) {
  let cuerpo = document.getElementById('cuerpo');
  let newElement = document.createElement('tr');
  let htmlProducto = `
    <td>${data.title}</td>
    <td>${data.price}</td>
    <td>${data.date}</td>
    <td>${data.code}</td>
    <td>${data.description}</td>
    <td>${data.stock}</td>
    <td>
      <div class='text-center wd-100'>
        <div
          class='card'
          style='width: 4rem; margin-left: auto; margin-right: auto;'
        >
          <img
            src='${data.image}'
            class='card-img-top mx-auto d-block'
            alt='...'
          />
        </div>
      </div>
    </td>
    `;
  newElement.innerHTML = htmlProducto;
  cuerpo.appendChild(newElement);
}

socket.on('productos', function (data) {
  document.getElementById('cuerpo').innerHTML = '';

  for (let i in data) {
    renderProducts(data[i]);
  }
});

function renderMensaje(data) {
  let caja = document.getElementById('caja');
  let newElement = document.createElement('p');
  let htmlMensaje = `
   <strong style="color:blue">${data.author} </strong>  <small style="color:red"> ${data.date} </small> <em style="color:green"> ${data.text} <em> <img width="20" height="20" src="${data.avatar}">`;
  newElement.innerHTML = htmlMensaje;
  caja.appendChild(newElement);
}

socket.on('mensajes', function (data) {
  let normali = JSON.stringify(data).length;

  //Calcular porcentaje de compresion
  let menDen = normalizr.denormalize(data.entities.mensajes, data, data);
  let desnormali = JSON.stringify(menDen).length;
  let porcentaje = Math.round((desnormali * 100) / normali);
  let footer = document.getElementById('footer');
  footer.append('PORCENTAJE DE COMPRESION: ' + porcentaje + '%');

  document.getElementById('caja').innerHTML = '';
  for (let i in menDen) {
    renderMensaje(menDen[i]);
  }
});
