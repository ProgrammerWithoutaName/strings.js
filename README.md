[![Stories in Ready](https://badge.waffle.io/fusionalliance/strings.js.png?label=ready&title=Ready)](https://waffle.io/fusionalliance/strings.js)
# strings.js

strings handling library for JavaScript

strings.js is designed to be used with [Common.js](http://www.commonjs.org/) and [Browserify](http://browserify.org/)

### Getting Started

The project depends on [Gulp.js](http://gulpjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```bash
npm install -g gulp
```

Next, clone the repository and install project dependencies:
```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:fusionalliance/strings.js.git

cd strings.js

npm install
```
### Usage

```javascript
  var strings, format, formattedString;

  strings = require('strings');

  format = 'this is test {testGiven} for a showing how to use {name}';
  formattedString = strings.format(format, {
    testGiven: 'stringFormatter',
    name: 'format'
  });
```

### Tests

Simply run:

```bash
gulp karma
```

### Contributing

If you have any suggestions, or found a bug please open a GitHub issue and we will
get to it as soon as we can.

### License

strings.js is distributed under the terms of the MIT license.

See LICENSE for details.
