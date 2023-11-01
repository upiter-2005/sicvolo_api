const { Router } = require("express");
const { getProducts, getProductById, getFeatureProducts } = require("../controllers/products.js");


const router = Router();
router.get("/getProducts", getProducts);
router.post("/getProductById", getProductById);
router.get("/getFeatureProducts", getFeatureProducts);


module.exports = router;
