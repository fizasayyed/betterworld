import dotenv from 'dotenv';
dotenv.config({
    path: './config/.env.local'
});
import {
    MongoClient,
    ServerApiVersion
} from 'mongodb';
import userSchema from '../src/models/user.js';

let client;
let database;

async function createUsersCollection() {
    // Check if the 'users' collection exists, if not create it with validation
    if (!database) {
        console.error("Database is not connected. Call connectDatabase first.");
        return;
    }
    const collections = await database.listCollections({
        name: 'users'
    }).toArray();

    if (collections.length === 0) {
        console.log('Creating users collection with schema validation');
        await database.createCollection('users', {
            validator: {
                $jsonSchema: userSchema
            },
        });
        console.log('Users collection in place');
    }
}

async function connectDatabase() {
    if (client && database) {
        console.log('Reusing existing database connection');
        return database;
    }

    try {
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        client = new MongoClient(process.env.MONGO_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
            maxPoolSize: 10,
        });

        // Connect the client to the server
        await client.connect("");
        database = client.db("betterworld");

        // Send a ping to confirm a successful connection
        await database.command({
            ping: 1
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        createUsersCollection().catch(console.dir);

        return client.db("betterworld");

    } catch (error) {
        console.log(error.message);
    }
}

export {
    client,
    connectDatabase,
    database
};