const mongoose = require('mongoose');
require('dotenv').config()
module.exports = () => {
  mongoose
    .connect(process.env.mongoUrl, { useNewUrlParser: true })
    .then(() => console.log('MongoDB has been connected'))
    .catch(e => console.log(e));
};
