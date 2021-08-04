const Mongo = require('mongoose');
const Schema = Mongo.Schema;

const orderSchema = new Schema({
    _id: Mongo.Schema.Types.ObjectId,
    product:{ type: Mongo.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity:{ type: Number, default: 1 }
});

module.exports = Mongo.model('Order', orderSchema);