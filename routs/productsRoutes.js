const { Router } = require("express");
const { getProducts, getProductById } = require("../controllers/products.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.get("/getProducts", getProducts);
router.post("/getProductById", getProductById);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;
