const { Router } = require("express");
const { sendMail, sendMailPartner } = require("../controllers/email.js");


const router = Router();
router.post("/sendMail", sendMail);
router.post("/sendMailPartner", sendMailPartner);

module.exports = router;
