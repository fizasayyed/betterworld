// const User = require('../models/user');

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