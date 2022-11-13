const router = require('express').Router();
const {
//  add user functions here
getAllUsers,
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(/* add user functions from schema here */)
    .post(/* user post */)

router
    .route('/')
    .get(getAllUsers)
    .put()
    .delete();

module.exports = router;