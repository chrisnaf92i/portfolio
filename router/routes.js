import express from "express";

const router = express.Router();

router.get("/api", (rep, res) => {
    res.send("bienvenu sur l'acceuil de l'api du portfolio de Christopher Nafrere");
})


export default router;