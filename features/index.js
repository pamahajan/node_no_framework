'use strict'

let utilities = require('./../utilities');

module.exports = function(opts){
	try{

		console.log('Requiring Project Features');
		
		let featuresPath = utilities.path.join(__dirname, './../features');

		utilities.fs.readdirSync(featuresPath).forEach((file) => {
			if(file != 'index.js'){
				require('./' + file)(opts);
			}
		});
		
	} catch(err){

		console.log('File: features, Error: ', err);
		throw(err);
	}
}