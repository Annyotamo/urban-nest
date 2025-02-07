import { validateEmail, validateName } from "../helpers/register.helper.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function registerUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        const isFirstNameValid = validateName(firstName);
        if (!isFirstNameValid.valid) return res.status(400).json({ message: isFirstNameValid.message });

        const isLastNameValid = validateName(lastName);
        if (!isLastNameValid.valid) return res.status(400).json({ message: isLastNameValid.message });

        const isEmailValid = await validateEmail(email);
        if (!isEmailValid.valid) return res.status(400).json({ message: isEmailValid.message });

        // hash generator for password
        const salt = bcrypt.genSaltSync(10);

        // create new user
        const newUser = new User({
            firstName,
            lastName,
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
