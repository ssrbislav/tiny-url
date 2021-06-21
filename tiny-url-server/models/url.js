const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Url = new Schema({
  longUrl: {
      type: String,
      required: true
  },
  shortUrl: {
      type: String,
      required: true
  },
  code: {
      type: String,
      required: true
  },
  dateOfCreation: {
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('Url', Url)