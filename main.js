//Connecting to the database, these details will be gotten from environmental variables.
//TODO

const couchdb_username = 'admin';
const couchdb_password = 'password';

const nano = require('nano')('http://admin:password@localhost:5984');

//Settings that should be gotten from the database.
//TODO

const proxmox_hostname = '192.168.30.2'
const proxmox_port = '8006';
const proxomox_username = 'root@pam';
const proxmox_password = 'password';
const proxmox_reject_unauthorised = false;


//Logging into proxmox.
proxmox_token = null;
const https = require('https');

proxmoxLogin = https.request(
	{
		hostname: proxmox_hostname,
		port: proxmox_port,
		path: '/api2/json/access/ticket?username=root@pam&password=password',
		method :'POST',
		rejectUnauthorized: proxmox_reject_unauthorised
	},
	(res) => {
			res.on(
			'data', 
			(data) =>
				{
					proxmox_token = JSON.parse(data).data.CSRFPreventionToken;
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