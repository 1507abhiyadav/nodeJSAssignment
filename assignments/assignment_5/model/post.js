const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String},
    image: {type: String},
    user :{type: Schema.Types.ObjectId , ref: 'user_details'}
}, {timestamps: true})

const post_details = mongoose.model('post_details', postSchema);

module.exports = post_details;
