const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUser, updateUser, updateServices, getUsersByService } = require('../api/user/controller');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/user/:name', getUser);
router.put('/user/:name', updateUser);
router.put('/user/services/:name', updateServices);
router.get('/users/:service', getUsersByService);

module.exports = router; 