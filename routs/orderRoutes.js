const { Router } = require("express");
const { createOrder } = require("../controllers/order.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.post("/createOrder", createOrder);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;
