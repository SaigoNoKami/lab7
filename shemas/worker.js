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
    validate: {
      validator: (v) => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(v),
      message: props => `${props.value} не є телефонним номером`
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v),
      message: props => `${props.value} не є валідною електронною адресою`
    },
  },
  avatar: {
      data: Buffer,
      contentType: String
  }
});


module.exports = mongoose.model('workers', workerSchema);
