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

	// let db = require('./custom_modules/db');
	// db.init();

	/** * Initialize Routers - The one who knows what to do with url path* */
	let custom_router = require('./custom_modules/router');

	/** * Require Api Manager * */
	let apiMngr = require('./custom_modules/apiManager')();
	
	/** * Require/Initiate Features * */
	let feature_opts = {
		apiMngr: apiMngr
	}

	require('./features')(feature_opts);
	console.log(apiMngr.routes);
	/** * Additional middlewares that need to be parsed by request* */
	let mw = require('./project_modules/middleware');

	/** * Initiate Server Intance * */
	let server_opts = {
		router: custom_router,
		apiMngr: apiMngr,
		mw: mw
	}; 

	let serverInstance = require('./project_modules/server').init(server_opts);

	// start listening 
	serverInstance.listen(3000);
	console.log('Server initiated at port 3000');
} catch(err){
	console.log('File: Index.js, Error: ', err);
}