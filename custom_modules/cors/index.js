'use strict'

module.exports = function*(opts){
	try{
		
		let res = opts.response;
		if(req.method == 'OPTIONS'){
			res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.statusCode = 204;
            res.end();
		}
		
	} catch(err){
		console.log('Error while handling Cross Origin Resourse Sharing: ', err);
		throw(err);
	}
}