const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello from live server')
});

app.listen(80, console.log('listening'));

