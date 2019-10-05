const express 	  = require('express');
const router 	  = express.Router();
const insertQuest = require('./models/Quest');

router.post('/insertQuest', insertQuest);

module.exports = router;
