// parsing command line arguments to do something with them
var argv = require('yargs').argv;

console.log(argv);

if (argv._[0] == 'hello') {
	console.log('Hello world!');
}