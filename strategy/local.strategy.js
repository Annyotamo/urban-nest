import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        console.log(id);
        const user = await User.findById(id);
        if (!user) throw new Error("User not found");
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) throw new Error("User not found");
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) throw new Error("Invalid password");
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    })
);
