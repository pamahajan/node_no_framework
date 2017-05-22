'use strict'

let utilities = require('./../../utilities');

module.exports = function(opts){
	try{

		console.log('Requiring Project Features');
		
		let featuresPath = './../features';

		utilities.fs.readdirSync(features).foreach((file) => {
			if(file != 'index.js'){
				require('./' + file)(opts);
			}
		});
		
	} catch(err){

		console.log('File: features, Error: ', err);
	}
}