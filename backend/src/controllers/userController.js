import {
    database
} from "../../config/database.js";

export async function storeAllUsers(req, res) {
    try {
        const string = "Hello testing backend";
        res.status(200).json(string);
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

export async function registerUser(req, res) {
    try {
        // Get the 'users' collection
        const usersCollection = database.collection('users');
        // Validate and insert the user data according to userSchema
        const user = {
            username: req.body.username,
            email: req.body.email,
        };

        // Insert the new user into the database
        const result = await usersCollection.insertOne(user);

        res.status(201).json({
            message: 'User stored successfully',
            userId: result.insertedId,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to register user',
            error: error.message,
        });
    }
};