const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

module.exports = Books = mongoose.model("Books", bookSchema);
