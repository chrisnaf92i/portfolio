import messageModel from "../model/message.js";
import message from "../model/message.js";

export const createMessage = (req, res) => {
    const newMessage = new message(req.body);

    newMessage.save()
        .then(()=> res.status(201).json({reponse:"Message créer"}))
        .catch((err) => res.status(400).json({err}));
}

export const getAllMessage = (_, res) => {
    messageModel.find({})
        .then((lstMessage) => res.status(200).json({listOfMessage:lstMessage}))
        .catch((err) => res.status(400).json({err}))
}
