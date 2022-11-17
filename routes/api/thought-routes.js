const router = require('express').Router();
const {
    getAllThoughts,
    deleteThought,
    addThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)

router
    .route('/:thoughtId')
    .delete(deleteThought)

// add custom routes for the thoughts to address users

module.exports = router;