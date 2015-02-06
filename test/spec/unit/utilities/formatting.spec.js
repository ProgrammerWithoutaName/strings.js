'use strict';

var utilitiesLibrary = require('../../../locationHelpers/utilitiesLibrary');

describe('String formatting Unit Test', function() {
  var formatting = utilitiesLibrary.formatting;

  it('should return same string when no replacements are made', function() {
    expect(formatting.format('Hello world!')).toEqual('Hello world!');
  });

  it('should return same string when replacements are made', function() {
    expect(formatting.format('Hello {name}!', { name: 'world' })).toEqual('Hello world!');
  });

  it('should return string with no replacements of value is not supplied', function() {
    expect(formatting.format('Hello {name}!', {})).toEqual('Hello {name}!');
  });

  it('should return same string when replacements are made and ignore additonal values', function() {
    expect(formatting.format('Hello {name}!', { name: 'world', greeting: 'Hello' })).toEqual('Hello world!');
  });

  it('should return replaced values when called with multiple replacements', function() {
    expect(formatting.format('{greeting} {name}!', { name: 'world', greeting: 'Hello' })).toEqual('Hello world!');
  });
});
