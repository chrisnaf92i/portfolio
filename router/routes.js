import express from "express";
import { createMessage, getAllMessage } from "../controller/messageController.js";

const router = express.Router();

router.get("/api", (rep, res) => {
    res.send("bienvenu sur l'acceuil de l'api du portfolio de Christopher Nafrere");
})

router.post("/api/message", createMessage);
router.get("/api/message", getAllMessage);
export default router;