/* eslint-disable */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
      data: Buffer,
      contentType: String
  }
});


module.exports = mongoose.model('workers', workerSchema);
