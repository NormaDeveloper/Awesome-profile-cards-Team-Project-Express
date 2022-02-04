// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "10mb" }));

//Configuramos ejs
server.set('view engine', 'ejs')

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

  if (req.body.palette !== '' && req.body.name !== '' && req.body.job !== '' && req.body.email !== '' && req.body.linkedin !== '' && req.body.github !== '' && req.body.photo !== '') {
    res.json(responseSuccess)
  } else {
    res.json(responseError)

  }
});

//Endpoint Show Cards
server.get('/card/:cardId', (req, res) => {
  console.log(req.params)
});

// Servidor estático
const staticServerPath = "./src/public-react"
server.use(express.static(staticServerPath));
