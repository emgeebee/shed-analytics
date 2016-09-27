var ua = require('universal-analytics');

var visitor = ua('UA-28963119-9');
visitor.pageview("/Movement", "Movement", "").send();
