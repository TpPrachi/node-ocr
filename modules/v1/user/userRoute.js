const express = require('express');
const userCtr = require('./userController');
const userRouter = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


// Routes
userRouter.post('/ocr', multipartMiddleware, userCtr.ocrImage);
module.exports = userRouter;
