import User from "../models/user.model.js";

export async function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return { valid: false, message: "Invalid email format" };

    const existingUser = await User.findOne({ email });
    if (existingUser) return { valid: false, message: "Email already registered" };

    return { valid: true };
}
export async function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_]([a-zA-Z0-9_.]*[a-zA-Z0-9_])?$/;
    if (!regex.test(username)) return { valid: false, message: "Invalid username format" };

    const existingUser = await User.findOne({ username });
    if (existingUser) return { valid: false, message: "Try a different username" };

    return { valid: true };
}
