const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const userSchema = new Schema({
    _id: Mongo.Schema.Types.ObjectId,
    email:{ type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    password:{ type: String, required: true }
});

module.exports = Mongo.model('User', userSchema);