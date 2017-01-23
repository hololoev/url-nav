# Url navigation calculator

Simple helper for calculation url path.


## Installation

```bash
npm install url-nav
```

## Usage

urlCalc = function (currentUrl, navigateTo)

returns new url

Website's hostname will be used as base url. Current url will be used for calculation relative path.

```js
const urlCalc = require('url-nav');

urlCalc('http://example.com/page1', 'article1/'); // http://example.com/page1/article1/

urlCalc('http://example.com/page1', '../page2/article2'); // http://example.com/page2/article2

urlCalc('http://example.com/page1/article4', '/page3/article3'); // http://example.com/page3/article3/

```
