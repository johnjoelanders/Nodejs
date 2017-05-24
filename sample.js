function Account(){
	this.accountNumber = 0;
	this.firstName = "";
	this.lastName = "";
	this.username = "";
	this.password = "";
	this.pin = "";
	this.balance = 0;
}

var Johnjoe = new Account();
Johnjoe.accountNumber = 1;
Johnjoe.name = "Johnjoe";
Johnjoe.lastName = "Landers";
Johnjoe.username = "memes";
Johnjoe.password = "memes";
Johnjoe.pin = "1234567";
Johnjoe.balance = 10000;

var Luke = new Account();
Luke,accountNumber = 2;
Luke.name = "Luke";
Luke.lastName = "Bluett";
Luke.username = "Bluett";
Luke.password = "Bluett";
Luke.pin = "7654321";
Luke.balance = 4000;


var amount = 200;
//Transfer
transferMoney(Johnjoe,Luke,amount);
console.log("Johnjoe: " + Johnjoe.balance);
console.log("Luke: " + Luke.balance);

//Withdraw
withdrawMoney(Johnjoe,amount);
console.log("Johnjoe: " + Johnjoe.balance);

//Deposit
var depositmoney = 10000;
depositMoney(Johnjoe,depositmoney);
console.log("Johnjoe: " + Johnjoe.balance);

var accountNumber = '1';
var username = 'memes';
var password = 'memes';
login(accountNumber,username,password);

createAccount('Test','Test','Test','Test','121322321');