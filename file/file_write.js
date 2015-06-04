var fs = require('fs');
var config = {
		maxFiles: 20,
		maxConnections: 15,
		rootPath: "/webroot"
};

var configTxt = JSON.stringify(config);
var optiions = {encoding:'utf8', flag:'w'};
fs.writeFile('./config.txt', configTxt, optiions, function(err) {
	if (err) {
		consolg.log("Config Write Failed.");
	} else {
		console.log("Config Saved.");
	}
});