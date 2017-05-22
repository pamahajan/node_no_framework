'use strict'
	
let utilities = require('./../../utilities');

module.exports = function(opts){
	try{

		let modelsPath = utilities.path.join(__dirname, './model'), apiPath = utilities.path.join(__dirname, './api');

		utilities.fs.readdirSync(modelsPath).forEach((file) => {
			require(utilities.path.join(modelsPath, file));
		});

		utilities.fs.readdirSync(apiPath).forEach((file) => {
			require(utilities.path.join(apiPath, file))(opts);
		});

	} catch(err){

		console.log('Error: User Index, Error: ', err);
		throw(err);
	}
}