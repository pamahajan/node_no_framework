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

	/** * Initialize Routers - The one who knows what to do with url path* */
	let custom_router = require('./custom_modules/router');

	/** * Require Api Manager * */
	let apiManager = require('./custom_modules/apiManager');
	
	/** * Require/Initiate Features * */
	require('./features');

	/** * Additional middlewares that need to be parsed by request* */
	let middleware = require('./project_modules/middleware');

	/** * Initiate Server Intance * */
	let serverInstance = require('./project_modules/server').init();

	// start listening 
	serverInstance.listen(3000);
	console.log('Server initiated at port 3000');
} catch(err){
	console.log('File: Index.js, Error: ', err);
}