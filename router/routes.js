import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { createMessage, getAllMessage } from "../controller/messageController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();

router.get("/api", (rep, res) => {
    res.send("bienvenu sur l'acceuil de l'api du portfolio de Christopher Nafrere");
})

router.post("/api/message", createMessage);
router.get("/api/message", getAllMessage);

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../porfolio/build/index.html"));
});

export default router;