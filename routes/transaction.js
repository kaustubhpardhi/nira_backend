const router = require("express").Router();
const transactionController = require("../controllers/transactionController");

router.post("/success/:fName", transactionController.successfulTransaction);
router.post("/failed", transactionController.failedTransaction);
router.post("/success/admin", transactionController.successfulTransactionAdmin);
router.post("/failed/admin", transactionController.failedTransactionAdmin);

module.exports = router;
