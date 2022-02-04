// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

const staticServer = './src/public-react';
server.use(express.static(staticServer));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Esto lo haremos más adelante en una base de datos
const savedCards = []

// ENDPOINTS
//Endpoint Create Cards
server.post("/card", (req, res) => {
  console.log(req.body);
  const responseSuccess = {
    success: true,
    cardURL: "https://awesome-profile-cards.herokuapp.com/card/${cardId}",
  };
  const responseError = {
    success: false,
    error: "Error description",
  };
  if (
    req.body.palette !== "" &&
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "" &&
    req.body.photo !== ""
  ) {
    res.json(responseSuccess);
    //Los podemos guardar en un fichero con fs
    savedCards.push(req.body);
  } else {
    res.json(responseError);
  }
});

//Endpoint Show Cards
server.get("/card/99282828282", (req, res) => {
  //RUTA PARA MOSTRAR TARJETA
});
