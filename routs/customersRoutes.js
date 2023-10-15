const { Router } = require("express");
const { getCustomers, registerCustomer } = require("../controllers/customers.js");
// const checkAuth = require("../utils/checkAuth.js");

const router = Router();
// /api/options/getTree
router.get("/getCustomers", getCustomers);
router.post("/registerCustomer", registerCustomer);

// /api/options/setTree
//router.patch("/setTree", checkAuth, setTree);

module.exports = router;
