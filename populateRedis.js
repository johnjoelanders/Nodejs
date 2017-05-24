var redis = require('redis');
var client = redis.createClient('32768','192.168.99.100');
client.on('connect', function() {
    console.log('connected');
});

client.flushdb();
client.hmset('1',{
	'firstName':'Johnjoe',
	'lastName' : 'Landers',
	'username' : 'Test',
	'password' : 'Test',
	'pin' : '1234567',
	'balance' : '10000'
});

client.hmset('2',{
	'firstName':'Luke',
	'lastName' : 'Bluett',
	'username' : 'Bluett',
	'password' : 'Bluett',
	'pin' : '7654321',
	'balance' : '4000'
});

client.hmset('3',{
	'firstName':'Leroy',
	'lastName' : 'Kurtis',
	'username' : 'Kurtis',
	'password' : 'Kurtis',
	'pin' : '9876543',
	'balance' : '7500'
});

client.hmset('3',{
	'firstName':'Rose',
	'lastName' : 'Magee',
	'username' : 'Magee',
	'password' : 'Magee',
	'pin' : '8765432',
	'balance' : '700'
});
client.hmset('3',{
	'firstName':'Linda',
	'lastName' : 'Smith',
	'username' : 'Smith',
	'password' : 'Smith',
	'pin' : '1234567',
	'balance' : '2500'
});

