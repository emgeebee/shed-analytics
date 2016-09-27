var ua = require('universal-analytics');

var visitor = ua('UA-28963119-9');
var temp = process.argv[2];
visitor.event("Temperature", "Core", "", temp).send();
