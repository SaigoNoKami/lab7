const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const processSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId, 
    ref: 'product',
    required: true,
  },
});


module.exports = mongoose.model('process', processSchema);
