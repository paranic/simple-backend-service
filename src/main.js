'use strict';

const express = require('express');
const app = express();
const http = require('http');
const options = {};
const server = http.createServer(options, app);

const casual = require('casual');

app.get('/scoreboard/:tournament_id', async (request, response) => {

	let data = [
		{
			id: casual.integer(),
			start_datetime: casual.moment,
			participants: [casual.city, casual.city],
			score: [casual.integer(), casual.integer()]
		}
	]
	response.status(200).send(data);

});

server.listen(3000, () => {
	console.log('Book Service API listening at 0.0.0.0:3000');
});
