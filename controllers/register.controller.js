import { validateEmail, validateUsername } from "../helpers/register.helper.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        console.log(req.body);

        const isUsernameValid = await validateUsername(username);
        if (!isUsernameValid.valid) return res.status(400).json({ message: isUsernameValid.message });

        const isEmailValid = await validateEmail(email);
        if (!isEmailValid.valid) return res.status(400).json({ message: isEmailValid.message });

        // hash generator for password
        const salt = bcrypt.genSaltSync(10);

        // create new user
        const newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, salt),
        });

        // save the user in database
        await newUser.save();

        res.status(201).json({ message: "New user successfully created" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal server error" });
    }
}
