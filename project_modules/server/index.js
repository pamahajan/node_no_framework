'use strict'

let utilities = require('./../../utilities');

/** * Function To Start a new instance of server * */
let init = function(opts) {
    try {

    	console.log('Initaing Server Instance To handle Request');

    	/** * Everything that needs to be done with a request starts from here * */
    	let onRequest = function(req, res){
    		console.log('request recieved');

            let mw = opts.mw;
            delete opts.mw;
            opts.req = req;
            opts.res = res;

            mw(opts);
    	}

    	let server_opts = {
    		onRequest: onRequest
    	};

    	let server = utilities.http.createServer(server_opts);
    	console.log('Server Initiated');
        return server;
    } catch (err) {

        console.log(err);
    }
}

exports.init = init;
