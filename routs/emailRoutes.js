const { Router } = require("express");
const { sendMail } = require("../controllers/email.js");


const router = Router();
router.post("/sendMail", sendMail);

module.exports = router;
