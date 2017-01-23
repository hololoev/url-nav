const urlCalc = require('./index.js');

console.log(urlCalc('http://example.com/page1', 'article1/'));

console.log(urlCalc('http://example.com/page1', '../page2/article2'));

console.log(urlCalc('http://example.com/page1/article4', '/page3/article3'));
