const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  }
});

const Activity = mongoose.model('Activity', UserSchema);

module.exports = Activity;
