/*
 * process 모듈을 사용해 프로세스와 시스템 정보에 접근.
 */
var util = require('util');
console.log('Current directory: ' + process.cwd());
console.log('Environment Settings: ' + JSON.stringify(process.env));
console.log('Node Args: ' + process.argv);
console.log('Excution Path: ' + process.execPath);
console.log('Excution Args: ' + JSON.stringify(process.execArgv));
console.log('Node Versrion: ' + process.version);
console.log('Module Versions: ' + JSON.stringify(process.versions));
console.log('Process ID: ' + process.pid);
console.log('Process Title: ' + process.title);
console.log('Process Platform: ' + process.platform);
console.log('Process Architecture: ' + process.arch);
console.log('Memory Usage: ' + util.inspect(process.memoryUsage()));

var start = process.hrtime();

setTimeout(function() {
	var delta = process.hrtime(start);
	console.log('High-Res timer took %d seconds and %d nanoseconds', delta[0], delta[1]);
	console.log('Node has been running %d seconds', process.uptime());
}, 1000);