'use strict'

module.exports = function(){
	try{

		let allowedMethods = ['get', 'post'];
		let routes = {

		};

		for(let i=0; i<allowedMethods.length; i++){
			routes[allowedMethods[i]] = {}
		}

		let addRoute = function(opts){

			opts.method = opts.method.toLowerCase();
			routes[opts.method][opts.api] = {
			
				method: opts.method,
				mws: opts.mws,
				ctrl: opts.ctrl
			
			}
		};

		let handleAPIMws = function(opts){
			
			
			return new Promise((resolve, reject) => {
				let i = 0; 
				
				let mwHandler = function(){
					return new Promise((resolve, reject) => {
						resolve(routes[opts.req.method][opts.req.url].mws[i]);
					});
				};

				mwHandler().then((data) => {
					
					i++;
					if(i < routes[opts.req.method][opts.req.url].mws.length)
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
			addRoute: addRoute,
			handleAPIMws: handleAPIMws
		}
	} catch(err){
		console.log('File: APIManager, Error :', err);
		throw(err);
	}
}

//Handle API Middlewares