// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '10mb' }));

//Configuramos ejs
server.set('view engine', 'ejs');

const staticServer = './src/public-react';
server.use(express.static(staticServer));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];
// ENDPOINTS
//Endpoint Create Cards
server.post('/card', (req, res) => {
  if (
    req.body.palette !== '' &&
    req.body.name !== '' &&
    req.body.job !== '' &&
    req.body.email !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== '' &&
    req.body.photo !== ''
  ) {
    const newCardData = {
      ...req.body,
      id: uuidv4(),
    };
    savedCards.push(req.body);
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:${serverPort}/card/${newCardData.id}`,
    };
    console.log(savedCards);
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Error description',
    };
    res.json(responseError);
  }
});

//Endpoint Show Cards
server.get('/card/:cardId', (req, res) => {
  const foundCard = savedCards.find((card) => card.id === req.params.id);
  res.render('card', foundCard);
  console.log(foundCard);
  console.log(req.params);
});

// Servidor estático
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

// Servidor estático
const staticServerStyles = './src/public-styles';
server.use(express.static(staticServerStyles));
