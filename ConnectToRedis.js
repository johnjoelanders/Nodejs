var redis = require('redis');
var client = redis.createClient('32768','192.168.99.100');
client.on('connect', function() {
    console.log('connected');
});

//Withdraw
function withdrawMoney(accountNumber,amount){
	client.hgetall(accountNumber, function(err, object) {
		if(object.username == username && object.password == password){
			var balanceAfterWithdraw = parseInt(object.balance) - parseInt(amount);
			console.log(object.firstName + " withdraws " + amount);
			console.log('Balance is now: ' + balanceAfterWithdraw);
			updateMoney(accountNumber,balanceAfterWithdraw);
		}else{
		console.log("Wrong details");
		}
	});
}
function updateMoney(accountNumber,newBalance){
	console.log('Updating money: ' + newBalance);
	client.hmset(accountNumber, {
		'balance' : newBalance
	});
}
//Deposit
function depositMoney(accountNumber,amount){
	client.hgetall(accountNumber, function(err, objectDep) {
		if(objectDep.username == username && objectDep.password == password){
			console.log('Balance is now dep: ' + objectDep.balance);
			var balanceAfterDeposit = parseInt(objectDep.balance) + parseInt(amount);
			updateMoney(accountNumber,balanceAfterDeposit);
			console.log(objectDep.firstName + " deposits " + amount);
			console.log('Balance is now: ' + balanceAfterDeposit);
		}else{
		console.log("Wrong details");
		}
	});
}
//Transfer
function transferMoney(senderAccount,receiverAccount,amount){
		client.hgetall(senderAccount, function(err, object) {
			client.hgetall(receiverAccount, function(err, object1) {
				if(object.username == username && object.password == password){
					object1.balance += amount;
					object.balance -= amount;
					console.log(object.firstName + " gives " + amount + " to " + object1.firstName);
					console.log('Senders account is now: ' + object.balance);
					console.log('Receivers account is now: ' + object1.balance);
				}else{
				console.log("Wrong details");
				}
			});
		});
}

function login(accountNumber,username,password){
	client.hgetall(accountNumber, function(err, object) {
		if(object.username == username && object.password == password){
		console.log("Welcome");
		}else{
		console.log("Wrong details");
		}
	});
}

function createAccount(firstName,lastName,username,password,pin){
	client.dbsize( function (err, numKeys) {
		var numberOfPeople = numKeys + 1;
		client.hmset(numberOfPeople,{
		'firstName': firstName,
		'lastName' : lastName,
		'username' : username,
		'password' : password,
		'pin' : password,
		'balance' : '0'
		});
		//console.log('Number of keys: '+numKeys +' numberOfPeople: '+numberOfPeople);
		console.log('User created');
	});
}
var username = 'Test';
var password = 'Test';
var accountNum = '1';

withdrawMoney(accountNum,'100');
depositMoney(accountNum,'1000');
//withdrawMoney(accountNum,'100');
//transferMoney(accountNum,'2','100');



