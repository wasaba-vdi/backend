const https = require('https');
const nano = require('nano')('http://admin:password@localhost:5984');


const username = 'root';
const password = 'password';

proxmoxLogin = https.request(
	{
		hostname: '192.168.30.2',
		port: '8006',
		path: '/api2/json/access/ticket?username=root@pam&password=password',
		method :'POST',
		rejectUnauthorized: false
	},
	
	(res) => {
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
			res.on('data', (d) =>
				{
					process.stdout.write(d);
				}
			);
	}
);

proxmoxLogin.on(
	'error',
	(e) => {
		console.error(e);
	}
);

proxmoxLogin.end();

const nano = require('nano')('http://admin:password@localhost:5984');