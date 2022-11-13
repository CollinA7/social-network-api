const router = require('express').Router();
const {
//  add user functions here
getAllUsers,
createUser,
getUserById
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put()
    .delete();

module.exports = router;