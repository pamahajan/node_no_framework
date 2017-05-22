'use strict'

module.exports = function(opts) {
    try {

        console.log('Initaiting data parser');

        return new Promise((resolve, reject) => {
            switch (request.method) {

                case 'Post':
                    {
                        console.log('Request Type: Post');
                        let data = [];
                        opts.req.on('data', function(chunk) {
                            data.push(chunk);
                        });

                        opts.req.on('end', function() {
                            data = Buffer.concat(data).toString();
                            opts.requestData = data;
                            resolve(data);
                        })
                    }
                    break;
                case 'Get': 
                	{

                	}
                	break;
                default: 
                	{
                		console.log('Unable to handle request');
                		reject(new Error('Unknown Request Type'));
                	}
            }

        });

    } catch (err) {
        console.log(err);
    }
}
