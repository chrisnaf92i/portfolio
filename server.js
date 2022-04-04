import express from "express";
import dotenv from "dotenv";
import router from "./router/routes.js";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static("portfolio/build"));

app.use(express.json());

app.use(router);

mongoose.connect(process.env.MONGODB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(PORT, console.log(`lancement du serveur sur le port ${PORT}`))