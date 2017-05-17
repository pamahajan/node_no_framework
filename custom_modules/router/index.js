'use strict'

/** * Router - Knows what to do with request urls * */
module.exports = function(opts){
	try{

		console.log('Router Initialized');

	} catch(err){

		console.log('File: Router, Error: ', err);
		throw(err);
	}
}