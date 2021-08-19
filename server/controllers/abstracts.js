import mongoose from "mongoose";
import AbstractMessage from "../models/abstractMessage.js";

export const getAbstracts = async (req, res) => {
    try {
        const abstractMessages = await AbstractMessage.find();
        // console.log(abstractMessages);
        res.status(200).json(abstractMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAbstract = async (req, res) => {
    const abstract = req.body;
    const newAbstract = new AbstractMessage(abstract);
    try {
        await newAbstract.save();
        res.status(201).json(newAbstract);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteAbstract = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No abstract with that id');
    await AbstractMessage.findByIdAndDelete(id);
    res.json({ message: 'Post deleted Successfully' });
}