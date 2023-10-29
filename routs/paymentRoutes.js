const { Router } = require("express");
const { makePayment } = require("../controllers/payment.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.post("/makePayment", makePayment);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;
