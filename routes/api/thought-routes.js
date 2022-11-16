const router = require('express').Router();
const {
    getAllThoughts,
    deleteThought,
    addThought
} = require('../../controllers/thought-controller')

router
    .route('/').get(getAllThoughts)

router
    .route('/:thoughtId')
    .put(addThought)
    .delete(deleteThought)

// add custom routes for the thoughts to address users

module.exports = router;