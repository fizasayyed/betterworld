// Validation schema for users collection
const userSchema = {
    bsonType: 'object',
    required: ['username', 'email'],
    properties: {
        username: {
            bsonType: 'string',
            description: 'must be a string and is required',
        },
        email: {
            bsonType: 'string',
            pattern: '^.+@.+\\..+$',
            description: 'must be a valid email and is required',
        },
    },
};

export default userSchema;