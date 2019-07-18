// db/index.js
const mongoose = require('./db')
const userSchema = require('./schmas/user')

const MyModel = mongoose.model('User', userSchema);

module.exports = MyModel
