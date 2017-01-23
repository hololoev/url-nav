# Url navigation calculator

Simple helper for url path calculation.


## Installation

```bash
npm install url-nav
```

## Usage

urlCalc = function (currentUrl, navigateTo)

returns new url

Website's hostname (in currentUrl) will be used as base url. currentUrl will be used for calculation relative path.

```js
const urlCalc = require('url-nav');

urlCalc('http://example.com/page1', 'article1/'); // http://example.com/page1/article1/

urlCalc('http://example.com/page1', '../page2/article2'); // http://example.com/page2/article2

urlCalc('http://example.com/page1/article4', '/page3/article3'); // http://example.com/page3/article3/

urlCalc('http://example.com/page1', 'http://example.com/page2'); // http://example.com/page2

```
