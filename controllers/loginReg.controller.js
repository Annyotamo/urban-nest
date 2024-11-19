import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const newUser = new User({ username: username, email: email, password: bcrypt.hashSync(password, salt) });
        await newUser.save();
        console.log("Success");
        res.status(201).json({ message: "New user successfully created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
}
