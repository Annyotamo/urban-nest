import User from "../models/user.model.js";

export async function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return { valid: false, message: "Invalid email format" };

    const existingUser = await User.findOne({ email });
    if (existingUser) return { valid: false, message: "Email already registered" };

    return { valid: true };
}

export function validateName(name) {
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(name)) return { valid: false, message: "Name can only contain letters" };
    if (name.length < 2) return { valid: false, message: "Name must be at least 2 characters" };

    return { valid: true };
}
