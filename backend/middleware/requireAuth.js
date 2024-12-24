import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

export const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers; // Use 'headers' instead of 'header'
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    const token = authorization.split(" ")[1]; // Extract the token from "Bearer <token>"
    try {
        const { _id } = jwt.verify(token, process.env.JWTSECRATEKEY); // Verify JWT token
        const user = await User.findById(_id).select("_id"); // Fetch the user from DB
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user; // Attach user to request
        next(); // Proceed to the next middleware
    } catch (err) {
        console.error("Authentication error:", err.message);
        return res.status(401).json({ error: "Authorization token is not valid" });
    }
};
