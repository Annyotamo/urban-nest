import { validateEmail, validateUsername } from "../helpers/register.helper.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // validation check for email
        const isEmailValid = await validateEmail(email);
        if (!isEmailValid.valid) return res.status(400).json({ message: isEmailValid.message });

        // validation check for username
        const isUsernameValid = await validateUsername(username);
        if (!isUsernameValid.valid) return res.status(400).json({ message: isUsernameValid.message });

        const salt = bcrypt.genSaltSync(10);
        const newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, salt),
        });
        await newUser.save();

        res.status(201).json({ message: "New user successfully created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
}
