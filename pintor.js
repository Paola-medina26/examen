const express= require('express');
let pintor = require('../controllers/PintoresControllers.js');

let router = express.Router();

router.get('/', pintor.list);

module.exports = router;
