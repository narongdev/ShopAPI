const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const fileFilter = (req, file, cb) =>{
    if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
};
const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


const ProductController = require('../controllers/products');

// List all Product
router.get('/', checkAuth, ProductController.products_get_all);

// Store new Product
router.post('/', checkAuth, upload.single('productImage'), ProductController.products_create_product);

// Get a Product
router.get('/:productId', checkAuth, ProductController.products_get_product);

// Update a Product
router.patch('/:productId', checkAuth, ProductController.products_update_product);

// Delete a Product
router.delete('/:productId', checkAuth, ProductController.products_delete);

module.exports = router;