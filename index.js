const express = require('express');
const path = require('path');
const guid = require('guid');


const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/employees', (req, res) => {
	const employees = {
		id: guid.create(),
		name: 'Janatbek',
		lastName: 'Orozaly',
		email: 'janatbek@gmail.com',
		city: 'Boise',
		state: 'Idaho'
	};
	res.json(employees);
});

app.listen(3000, console.log('listening'));

