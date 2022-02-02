// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// ENDPOINTS
//Endpoint Create Cards
server.post('/card', (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: 'https://awesome-profile-cards.herokuapp.com/card/${cardId}',
  };
  const responseError = {
    success: false,
    error: 'Error description',
  };

  res.json(responseSuccess);
});

//Endpoint Show Cards
server.get('/card/99282828282', (req, res) => {
  //RUTA PARA MOSTRAR TARJETA
});
