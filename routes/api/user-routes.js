const router = require('express').Router();
const {
//  add user functions here
getAllUsers,
createUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(/* add user functions from schema here */)
    .post(createUser)

router
    .route('/')
    .get(getAllUsers)
    .put()
    .delete();

module.exports = router;