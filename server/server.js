require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const DataCenter = require('./models/schema');

const dbURI = process.env.MONGO_DB_CREDENTIALS;
const PORT = process.env.PORT || 5000;

(async () => {
	await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
	console.log('mongo db connected');

	app.use(cors());
	app.use(express.static(path.join(__dirname, '..', 'build')));
	app.use(express.static('public'));

	app.get('/server/:centerId', async (req, res) => {
		const { centerId } = req.params;
		try {
			const foundDataCenter = await DataCenter.findOne({ centerId });
			if (foundDataCenter) return res.status(200).send(foundDataCenter);
		} catch (error) {
			return res.status(500).send({ message: error });
		}
		return res.status(400).send({ message: 'wrong centerId' });
	});

	app.use((req, res) => {
		res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
	});

	app.listen(PORT, () => {
		console.log('server started on port 5000');
	});
})();
