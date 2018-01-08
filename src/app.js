// Styles
require('bootstrap-beta/dist/css/bootstrap.min.css')
require('ilyabirman-likely/release/likely.css')
require('./main.css')

// Scripts
var likely = require('ilyabirman-likely');
require('./main.js')
require('./gtag.js')

// Finds all the widgets in the DOM and initializes them
likely.initiate();
