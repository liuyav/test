const mongoose = require('../db')
const Schema = mongoose.Schema;

module.exports =  new Schema({
  name: String,
  sex: String
});
