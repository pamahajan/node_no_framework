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
	
	/** * Initialize Routers * */
	let custom_router = require('./custom_modules/router');
	
	// get feature dependencies

	/** * Require/Initiate Features * */
	require('./features');

	// start server to listen

	/** * Initiate Server Intance * */
	let serverInstance = require('./project_modules/server').init();

	// start listening 
	serverInstance.listen(3000);
	console.log('Server initiated at port 3000');
} catch(err){
	console.log('File: Index.js, Error: ', err);
}