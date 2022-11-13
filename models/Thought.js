const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {

        },
        reactions: {
            // array of nested document
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ReactionSchema = new Schema(
    {

    },
    {

    }
);

// virtual of reaction count that retrieves length of the thoughts reations array field on query {

// }

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;