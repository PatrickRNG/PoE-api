const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUser, getUsersByService } = require('../api/user/controller');

router.get('/users', getUsers);
router.post('/users', createUser);
// router.get('/users/:name', getUser);
router.get('/users/:service', getUsersByService);

module.exports = router;