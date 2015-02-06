(function(window, Builder) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = Builder();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(Builder);
  } else {
    // Browser Global (strings is your global library identifier)
    window.strings = Builder();
  }
}(this, function() {
  var _strRq_, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  _strRq_ = (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _strRq_=="function"&&_strRq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _strRq_=="function"&&_strRq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_strRq_,_stMd_,exports){
'use strict';

var formatting = _strRq_('./utilities/formatting');

_stMd_.exports = {
  format: formatting.format
};

},{"./utilities/formatting":2}],2:[function(_strRq_,_stMd_,exports){
'use strict';

function format(stringToFormat, values) {
  return stringToFormat.replace(/{(\w+)}/g, function(match, value) {
    return (values[value] !== undefined) ? values[value] : match;
  });
}

_stMd_.exports = {
  format: format
};

},{}]},{},[1]);

//# sourceMappingURL=strings.js.map;

  return _strRq_(itemToExport);
}));