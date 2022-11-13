const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            match: /.+@.+..+/,
            unique: true
        },
        thoughts: {
            // array of id referencing thought models
        },
        friends: {
            // array of id referencing user models
        }
    },
    {
        // Add virtuals here
    }
);

// add virtual function meat and potatoes
UserSchema.virtual('commentCount').get(function() {
    // return this./    /.reduce(
        // (total, /    /) => total + /    / + 1.
        // 0
    // );
})

const User = model('User', UserSchema);

module.exports = User;