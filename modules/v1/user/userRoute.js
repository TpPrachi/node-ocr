const express = require('express');
const userCtr = require('./userController');
const userRouter = express.Router();


// Routes
userRouter.get('/ocr', userCtr.ocrImage);
module.exports = userRouter;
