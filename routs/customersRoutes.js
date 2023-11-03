const { Router } = require("express");
const { getCustomers, registerCustomer, sendCodeToEmail, resetCustomerPasswordWithCode } = require("../controllers/customers.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.get("/getCustomers", getCustomers);
router.post("/registerCustomer", registerCustomer);
router.post("/sendCodeToEmail", sendCodeToEmail);
router.post("/resetCustomerPasswordWithCode", resetCustomerPasswordWithCode);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;
