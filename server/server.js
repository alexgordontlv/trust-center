const path = require('path');
const express = require('express');
const app = express(); // create express app
const cors = require('cors');

// add middlewares
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));
app.use(cors());

app.get('/users/:userId', async (req, res) => {
	console.log(req.params.userId);
	res.send(`<h1>Hi ${req.params.userId}</h1>`);
});
app.get('/centers/:centerId', async (req, res) => {
	console.log(req.params.centerId, new Date());
	const { centerId } = req.params;

	if (centerId == 1234) {
		res.status(200).send({ msg: 'ok' });
	} else {
		res.status(400).send({ message: 'wrong centerId' });
	}
});
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// start express server on port 5000
app.listen(5000, () => {
	console.log('server started on port 5000');
});
