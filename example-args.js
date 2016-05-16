// parsing command line arguments to do something with them
// chaining methods and properties
var argv = require('yargs')
	.command('hello', 'Greets the user', function(yargs) {
		yargs.options({
			name: {
				// requires input name
				demand: true,
				// alias is like a shortcut: node example-args.js hello -n Amelia
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname+ '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log("Hello world!");
}