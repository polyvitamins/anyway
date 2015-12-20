var tap = require('tap'),
anyway = require('./index.js');

var allVariants = {
	'property': {test: 1},
	'noproperty': {},
	'subhash': {test:{level2:3}},
	'fakeobject': null,
	'noobject': "hello",
	"number": 12,
	"date": new Date(),
	"undefined": undefined,
	"NaN": parseInt("Hello world"),
	"array": [1,2,3]
}

tap.test('Lets go', function(t) {

	t.ok("function"===typeof anyway, "anyway must be function");
	for (var name in allVariants) {
		if (allVariants.hasOwnProperty(name)) {
			console.log('result for '+name+' is ', anyway(allVariants[name], 'test'));
		}
	}

	t.end();
});