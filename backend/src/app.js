import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`));