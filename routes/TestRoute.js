const express = require('express');
const app = express();
const router = express.Router();
const testController = require("../controllers/TestController")
const TestValidation  = require('../validations/TestValidator');
const AuthMiddleware = require("../middleware/AuthMiddleware")

router.get('/',AuthMiddleware, testController.getData);
router.get('/get', testController.getUsers);
router.post('/email',AuthMiddleware, testController.getData);
router.post('/validation', TestValidation, testController.validation);


module.exports = router;