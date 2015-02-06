(function(window, Builder) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(Builder);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = Builder();
  } else {
    // Browser Global (strings is your global library identifier)
    window.strings = Builder();
  }
}(this, function() {
  var require, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  require = !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.strings=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var formatting = _dereq_('./utilities/formatting');

module.exports = {
  format: formatting.format
};

},{"./utilities/formatting":2}],2:[function(_dereq_,module,exports){
'use strict';

function format(stringToFormat, values) {
  return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
    return (values[value] !== undefined) ? values[value] : match;
  });
}

module.exports = {
  format: format
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=strings.js.map;

  return require(itemToExport);
}));