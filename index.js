'use strict'

console.log('Url-nav is only wrapper above native url.resolve function. Do not use it on production. It was bad experiment.')

const urlCalc = require('url').resolve

module.exports = urlCalc 
