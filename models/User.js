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
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
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