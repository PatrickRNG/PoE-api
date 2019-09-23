const VError = require('verror');

/**
 * Listen to connection events.
*/
function createListeners(connection) {  
  connection.on('all', () => {
    //this.emit('info', 'MongoDB successfully connected to all replicas');
    console.log('info', 'MongoDB successfully connected to all replicas');
  });
  connection.on('fullsetup', () => {
    //this.emit('info', 'MongoDB successfully connected to the primary and at least one secondary replica');
    console.log('info', 'MongoDB successfully connected to the primary and at least one secondary replica');
  });
  connection.on('reconnected', () => {
    //this.emit('info', 'MongoDB has reconnected');
    console.log('info', 'MongoDB has reconnected');
  });
  connection.on("connected", err => {
    //this.emit("info", "MongoDB is connected");
    console.log("info", "MongoDB is connected");
  });
  connection.on('disconnected', () => {
    //this.emit('warn', new VError('MongoDB has suffered a disconnection'));
    console.log('warn', new VError('MongoDB has suffered a disconnection'));
  });
  connection.on('error', (err) => {
    //this.emit('error', new VError(err, 'An error ocurred in the MongoDB connection'));
    console.log('error', new VError(err, 'An error ocurred in the MongoDB connection'));
  });
}

module.exports = {
  createListeners
}