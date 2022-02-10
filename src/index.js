// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const DataBase = require("better-sqlite3");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: "10mb" }));

//Configuramos ejs
server.set("view engine", "ejs");

const staticServer = "./src/public-react";
server.use(express.static(staticServer));

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new DataBase("./src/db/DataBase.db", { verbose: console.log() });

// ENDPOINTS
//Endpoint Create Cards
server.post("/card", (req, res) => {
  if (
    req.body.palette !== "" &&
    req.body.name !== "" &&
    req.body.job !== "" &&
    req.body.email !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== "" &&
    req.body.photo !== ""
  ) {
    const newCardData = {
      ...req.body,
      id: uuidv4(),
    };
    const insertCard = db.prepare(
      "INSERT INTO cards (id, palette, name, job, email, phone, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    const response = insertCard.run(
      newCardData.id,
      newCardData.palette,
      newCardData.name,
      newCardData.job,
      newCardData.email,
      newCardData.phone,
      newCardData.linkedin,
      newCardData.github,
      newCardData.photo
    );
    const responseSuccess = {
      success: true,
      cardURL: `https://project-promo-o-module-4-team5.herokuapp.com/index.html#/cards/card/${newCardData.id}`,
    };
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: "Error",
    };
    res.json(responseError);
  }
});

//Endpoint Show Cards
server.get("/card/:cardId", (req, res) => {
  const query = db.prepare("SELECT * FROM cards WHERE id = ?");
  const response = query.get(req.params.cardId);
  res.render('card', response);
});

// Servidor estático
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Servidor estático
const staticServerStyles = "./src/public-styles";
server.use(express.static(staticServerStyles));
