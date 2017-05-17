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
} catch(err){
	console.log('File: Index.js, Error: ', err);
}