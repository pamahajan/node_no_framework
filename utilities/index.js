'use strict'

let http = require('http'), 
	fs = require('fs'),
	path = require('path');

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

let custom_fs = function(){
	try{

		let readdirSync = function(path){
			return fs.readdirSync(path);
		}

		return {
			readdirSync: readdirSync
		};
	} catch(err){

		console.log('File: Utilities, Custom FS, Error: ', err);
		throw(err);
	}
}

let custom_path = function(){
	try{

		let join = function(){

			return path.join(arguments[0], arguments[1]);
		}

		return {
			join: join
		}
	} catch(err){
		console.log('File: utilities, Custom path, Error: ', err);
	}
}

exports.http = custom_http();
exports.fs = custom_fs();
exports.path = custom_path();