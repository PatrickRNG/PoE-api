const VError = require('verror');
const User = require('./model');

function createUser(req, res) {
  const { name, league, services } = req.body;
  const user = new User({
    name,
    league,
    services
  });

  user.save(err => {
    if (err) console.error(new VError(err, 'Failed to create user'));
  });
  
  res.status(200).end();
}

async function getUsers(req, res) {
  const users = await User.find({}, { _id: 0, __v: 0 }, err => {
    if (err) logger.error(new VError(err, 'Failed to get users'));
  });

  res.json(users);
}

async function getUser(req, res) {
  const { name } = req.params;
  const user = await User.findOne({name}, { _id: 0, __v: 0 }, err => {
    if (err) logger.error(new VError(err, 'Failed to get user'));
  });

  res.json(user);
}

async function getUsersByService(req, res) {
  const { service } = req.params;
  const user = await User.find({"services.name": service }, { _id: 0, __v: 0 }, err => {
    if (err) logger.error(new VError(err, 'Failed to get user by service'));
  });

  res.json(user);
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUsersByService
}