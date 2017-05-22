'use strict'

module.exports = function(opts){
	try{

		let routes = {};

		let addRoute = function(opts){
			routes[opts.api] = {
				method: opts.method,
				mws: opts.mws,
				ctrl: opts.ctrl
			}
		};

		return {
			routes: routes,
			addRoute: addRoute
		}
	} catch(err){
		console.log('File: APIManager, Error :', err);
		throw(err);
	}
}

//Handle API Middlewares