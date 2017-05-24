'use strict'

let mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let userSchema = new Schema({

	name: {
		first: {type: String},
		last: {type: String}
	}, 

	contactInfo: {
		email: {type: String},
		phoneNumber: {type: Number}
	}
});

mongoose.model('User', userSchema);