'use strict'

exports.getUserCtrl = function(opts){
	try{

		console.log('get user data ctrl');
	} catch(err){

		console.log('File: User, controller, Error: ', err);
		throw(err);
	}
}

exports.addUserCtrl = function(opts){
	try{

		console.log('Request to Add User');
	} catch(err){

		console.log('File: User, controller, Error: ', err);
		throw(err);
	}
}