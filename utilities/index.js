'use strict'

let http = require('http');

let custom_http = function(){
	try{

		let createServer = function(opts){
			console.log('Creating Server');
			return http.createServer(opts.onRequest);
		}

		return {
			createServer: createServer
		};
	} catch(err){

		console.log('File: utilities, Custom HTTP, Error: ', err);
		throw(err);
	}
}

exports.http = custom_http();
