'use strict'

module.exports = function(opts){
	try{

		let routes = {};

		return {
			routes: routes;
		}
	} catch(err){
		console.log('File: APIManager, Error :', err);
		throw(err);
	}
}