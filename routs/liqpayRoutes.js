const { Router } = require("express");
const { doPayment } = require("../controllers/liqpay.js");

const router = Router();

router.post("/doPayment", doPayment);



module.exports = router;
