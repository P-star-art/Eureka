import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const signin = async (req, res) => {
    const { teamName, password } = req.body;

    try {
        const existingUser = await User.findOne({ teamName });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) res.status(400).json({ message: "invalid credentials" });
        const token = jwt.sign({ teamName: existingUser.teamName, id: existingUser._id }, 'test', { expiresIn: "24h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ messge: "Something went error" });
    }

}

export const signup = async (req, res) => {
    const { teamName, title, members, mentors, summary, password, confirmPassword } = req.body;
    try {
        const existingUser = await User.findOne({ teamName });
        if (existingUser) return res.status(400).json({ message: "User already exists" });
        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ teamName, title, members, mentors, summary, password: hashedPassword });
        const token = jwt.sign({ teamName: result.teamName, id: result._id }, 'test', { expiresIn: "24h" });
        res.status(200).json({ result, token });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}