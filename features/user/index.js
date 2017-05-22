'use strict'
	
let utilities = require('./../../utilities');

module.exports = function(opts){
	try{

		let modelsPath = './model', apiPath = './api';

		utilities.fs.readdirSync(modelsPath).foreach((file) => {
			require(modelsPath + '/' + file);
		});

		utilities.fs.readdirSync(apiPath).foreach((file) => {
			require(apiPath + '/' + file)(opts);
		});

	} catch(err){

		console.log('Error: User Index, Error: ', err);
		throw(err);
	}
}