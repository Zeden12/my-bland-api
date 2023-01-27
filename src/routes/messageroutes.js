const express = require('express');
const Messages = require('../models/messages');
import messageVal from '../midleware/messagemidleware';
import {getMessages, insertMessage, deleteMessage, updateMessage, getOneMessage} from '../controllers/messagecontroller'
const router = express.Router();
router.get('/messages', getMessages)
router.post('/messages',messageVal, insertMessage)
router.delete('/messages/:id', deleteMessage)
router.patch('/messages/:id', updateMessage)
router.get('/messages/:id', getOneMessage)
module.exports = router