'use strict'

let custom_cors = require('./../custom_modules/cors');

/** * Define all middleware that need to be passed * */
module.exports = function(opts){
	try{

		console.log('Sending Request through middlewares');

	} catch(err){
		console.log('File: Middleware, Error: ', err);
		throw(err);
	}
}