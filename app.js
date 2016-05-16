console.log('starting password manager');

var storage = require('node-persist');
// gets computer ready to write and save variables
storage.initSync();

// save a new variable to machine
// storage.setItemSync('name', 'Amelia');

// storage.setItemSync('accounts', [{
// 	username: 'Amelia',
// 	balance: 0
// }])

// retrieve stored variable
var accounts = storage.getItemSync('accounts');

// add a new account
// accounts.push({
// 	username: 'Sam',
// 	balance: 75
// });

storage.setItemSync('accounts', accounts);

console.log(accounts);