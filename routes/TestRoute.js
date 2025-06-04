const express = require('express');
const app = express();
const router = express.Router();
const AuthMiddleware = require('../middleware/AuthMiddleware')
const sendResponse = require('../utils/response');

router.get('/' ,AuthMiddleware , (req , res )=>{
    const data = req.body
    sendResponse(res , 200 , "Res from Router " , true , data)
})

module.exports = router;