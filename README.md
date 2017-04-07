# document.scrollingElement
[![Build Status](https://travis-ci.org/yangg/scrolling-element.svg?branch=master)](https://travis-ci.org/yangg/scrolling-element)
[![npm:](https://img.shields.io/npm/v/scrolling-element.svg?style=flat)](https://www.npmjs.com/packages/scrolling-element)

A polyfill for `document.scrollingElement` as defined in the [CSSDOM specification](https://drafts.csswg.org/cssom-view/#dom-document-scrollingelement)

## Installation
```bash
npm install scrolling-element --save
```

In an HTML document:
```js
<script src="scrolling-element.js"></script>
```

For Babel and ES2015+, just import the file
```js
import 'scrolling-element'
```

## Which browser need this?
[Browser compatibility](https://developer.mozilla.org/en/docs/Web/API/document/scrollingElement#Browser_compatibility)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/yanggtest.svg)](https://saucelabs.com/u/yanggtest)

## Acknowledgements
Thanks to Mathias Bynens for his [document.scrollingElement](https://github.com/mathiasbynens/document.scrollingElement), and for allowing me to simplify the polyfill

## License
MIT
