const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const productSchema = new Schema({
    _id: Mongo.Schema.Types.ObjectId,
    name:{ type: String, required: true },
    price:{ type: Number, required: true },
    productImage:{ type: String, required: false }
});

module.exports = Mongo.model('Product', productSchema);