const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    password: {type: String}

})

const user_details = mongoose.model('user_details', userSchema);

module.exports = user_details;
