import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
});

const messageModel = mongoose.model("message", messageSchema);

export default messageModel;