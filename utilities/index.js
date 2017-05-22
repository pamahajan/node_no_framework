'use strict'

let http = require('http'), 
	fs = require('fs');

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

let custom_fs = function(opts){
	try{

		let readdiirSync = function(opts.path){
			return fs.readdiirSync(path);
		}

		return {
			readdiirSync: readdiirSync
		};
	} catch(err){

		console.log('File: Utilities, Custom FS, Error: ', err);
		throw(err);
	}
}

exports.http = custom_http();
exports.fs = custom_fs();