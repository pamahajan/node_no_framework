'use strict'

/** * Define all middleware that need to be passed * */
module.exports = function(opts){
	try{

		console.log('Defining middlewares ');
	} catch(err){
		console.log('File: Middleware, Error: ', err);
		throw(err);
	}
}