'use strict'
var cache = require('./cache.js')
var argv = require('yargs').argv

cache.clearUrl(argv._[0]).then(() => process.stdout.write('cache cleared\n'))
