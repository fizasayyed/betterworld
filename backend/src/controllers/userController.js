import {
    database
} from "../../config/database.js";

export async function storeAllUsers(req, res) {
    try {
        const string = "Hello testing backend";
        res.status(200).json(string);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export async function registerUser(req, res) {
    try {
        const usersCollection = database.collection('users');

        const {
            username,
            email
        } = req.body;

        // Check if a user with the same email already exists
        const existingUser = await usersCollection.findOne({
            email: email
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists',
            });
        }

        // Create a new user object
        const newUser = {
            username,
            email,
        };

        // Insert the new user into the database
        const result = await usersCollection.insertOne(newUser);

        res.status(201).json({
            message: '✅ User stored successfully',
            userId: result.insertedId,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: '❌ Failed to store user',
            error: error.message,
        });
    }
}