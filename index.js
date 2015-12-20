/*
Return value of something anyway.
*/
var anyway = function() {

	var object = arguments[0],i=1;
	if (arguments.length>0 && ("object"!==typeof object || object===null)) return undefined;

	for (;i<arguments.length;++i) {
		if (i<arguments.length-1&&"object"!==typeof object) {
			return undefined;
		} else {
			object = object[arguments[i]];
		}
	}
	return object;
};

module.exports = anyway;