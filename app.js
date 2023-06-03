
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const router = require('./app/router');
const session = require('express-session');

const app = express();
const port = process.env.PORT;

app.use(
  session({
      saveUninitialized: true,
      resave: false,
      secret: 'secretauditsession',
      cookie: { secure: true }
  })
);

// On autorise tout le monde sur notre API
app.use(cors());
// On demande à Express d'extraire les données des requêtes POST
app.use(express.urlencoded({ extended: true }));

// On demande à Express d'extraire les données des requêtes POST formatées en multipart
const mutipartParser = multer();
// On utlise .none() pour dire qu'on attend pas de fichier, uniquement des inputs "classiques" !
app.use(mutipartParser.none());

app.use(express.static("public"));



app.use(router);

app.listen(port, () => {
  console.log(`Projet demarré sur http://localhost:${port}`);
});
