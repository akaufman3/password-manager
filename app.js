console.log('starting password manager');

var storage = require('node-persist');
// gets computer ready to write and save variables
storage.initSync();

// register new passwords
// get exisitin passwords


// three attributes:
// account.name
// account.username
// account.password
function createAccount(account) {
	// fetching whatever is stored under accounts
	var accounts = storage.getItemSync('accounts');
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	// save account
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount(accountName) {
	// fetch account using getItemSync
	var accounts = storage.getItemSync('accounts');

	var matchedAccount;

	accounts.forEach(function(account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

// createAccount({
// 	name: 'Facebook',
// 	username: 'someemail@gmail.com',
// 	password: 'Password123!'
// });

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);