'use strict'

/** * Handle Uncaught Exception * */
process.on('uncaughtException', ( err ) => {
	console.log(err, "Uncaught Exception");
});

/** * Handle Uncaught Rejection * */
process.on('uncaughtRejection', ( err ) => {
	console.log(err, "Uncaught Rejection");
});

try{

	console.log('Initializing Server');	
	// get middleware - project additional middlewares that need to be parsed

	/** * Additional middlewares that need to be parsed * */
	let middleware = require('./project_modules/middleware');
	// get Router - The one who knows what to do with url path
	// project dependecies/ features specific thing 
	// start server to listen
	// start listening 
} catch(err){
	console.log('File: Index.js, Error: ', err);
}