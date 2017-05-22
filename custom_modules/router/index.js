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
		if(!opts.apiMngr.routes)
			throw('No Routes Found');
		
		if(typeof opts.apiMngr.routes[opts.req.url].ctrl === 'function'){
			new Promise((resolve, reject) => {
				if(opts.apiMngr.routes[opts.req.url].mws.length > 0)
					resolve(opts.apiMngr.handleAPIMws(opts));
				else
					resolve();
			}).then((data) => {
				opts.apiMngr.routes[opts.req.url].ctrl(opts);
			}).catch((err) => {
				console.log(err);
				reject(err);
			})
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