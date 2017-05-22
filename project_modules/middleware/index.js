'use strict'

let custom_cors = require('./../custom_modules/cors');

/** * Define all middleware that need to be passed * */
module.exports = function(opts){
	try{

		console.log('Sending Request through middlewares');

		/** * CORS * */
		let cors_opts = {
			req: opts.req,
			res: opts.res
		};

		custom_cors(cors_opts);

		// call router
	} catch(err){
		console.log('File: Middleware, Error: ', err);
		throw(err);
	}
}