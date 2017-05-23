'use strict'

let userCtrl = require('./../controller'),
	parse = require('./../../../custom_modules/parser');

module.exports = function(opts){
	try{
		
		opts.apiMngr.addRoute({
			api: '/v1/user',
			method: 'get',
			mws: [],
			ctrl: userCtrl.getUserCtrl
		});

		opts.apiMngr.addRoute({
			api: '/v1/user',
			method: 'post',
			mws: [parse],
			ctrl: userCtrl.addUserCtrl
		});	

	} catch(err){	

		console.log('File: User API, Error: ', err);
		throw(err);
	}
}