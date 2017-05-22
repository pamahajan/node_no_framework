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

		let handleAPIMws = function(opts){
			
			
			return new Promise((resolve, reject) => {
				let i=0; 
				
				let mwHandler = function(){
					return new Promise((resolve, reject) => {
						resolve(routes[opts.req.url].mws[i]);
					});
				}

				mwHandler.then((data) => {
					i++;
					if(opts.mws.length <= i)
						mwHandler();
					else
						resolve();
				}).catch((err) => {
					reject(err);
				})
					
			})		
		}

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