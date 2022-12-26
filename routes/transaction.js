const router = require("express").Router();
const transactionController = require("../controllers/transactionController");

router.post("/success", transactionController.successfulTransaction);

module.exports = router;
