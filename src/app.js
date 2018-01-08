// Styles
import 'bootstrap-beta/dist/css/bootstrap.min.css'
import 'ilyabirman-likely/release/likely.css'
import './main.css'

// Scripts
import likely from 'ilyabirman-likely/release/likely-commonjs'
import './main.js'
import './gtag.js'

// Finds all the widgets in the DOM and initializes them
likely.initiate()
