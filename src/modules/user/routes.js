const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
	res.set('Content-Type', 'application/json');
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

router.options('/', (req, res) => {
	res.status(200).send('OK');
});

router.post('/login', (req, res) => {
	if(req.body.userName === req.body.password) {
		res.status(200).send({token: '231321321321'});
	} else{
		res.status(401).send('Invalid userName/password');
	}
});

module.exports = router;
