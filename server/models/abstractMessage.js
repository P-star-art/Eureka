import mongoose from "mongoose";

const abstractSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const AbstractMessage = mongoose.model('AbstractMessage', abstractSchema);

export default AbstractMessage;