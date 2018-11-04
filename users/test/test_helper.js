//initial setup to connect Mongoose and Mongo

const mongoose = require('mongoose');
//connects to users_test DB on the Mongo instance running on my local machine
mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
	.once('open', () => console.log('Good to go!'))
	.on('error', (error) => {
		console.warn('Warning', error);
	});