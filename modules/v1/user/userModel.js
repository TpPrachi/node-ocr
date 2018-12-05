const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
}, { collection: 'users', timestamps: true });
const User = mongoose.model('users', userSchema);
module.exports = User; 
