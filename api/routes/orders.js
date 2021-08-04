const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrderController = require('../controllers/orders');

// List all Order
router.get('/', checkAuth, OrderController.orders_get_all);

// Create Order
router.post('/', checkAuth, OrderController.orders_create_order);

// Get a Order
router.get('/:orderId', checkAuth, OrderController.orders_get_order);

// Delete a Order
router.delete('/:orderId', checkAuth, OrderController.orders_delete);

module.exports = router;