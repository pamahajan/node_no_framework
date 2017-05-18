'use strict'

/** * Router - Knows what to do with request urls * */
/** *
	opts : {
		routes <Object of api - controller>, 
		req <request>
		res <response>
	}

* */
module.exports = function(opts){
	try{

		console.log('Router Initialized');
		if(!opts.routes)
			throw('No Routes Found');

		if(typeof opts.routes[opts.url] === 'function'){
			opts.routes[opts.url]();
		} else{
			opts.res.statusCode = 404;
			opts.res.end();
			throw('Not Found');
		}
		
	} catch(err){

		console.log('File: Router, Error: ', err);
		throw(err);
	}
}