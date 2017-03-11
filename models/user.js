const mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({
  TodoistID: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('User', UserSchema);

exports.User = User;