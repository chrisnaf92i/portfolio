import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`lancement du serveur sur le port ${PORT}`));