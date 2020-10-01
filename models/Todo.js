const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model('Todo', todoSchema);
