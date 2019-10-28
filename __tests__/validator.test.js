'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = {x:'y'};
    let func = () => {};
    let bool = false;
  });

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num || arr || func || obj || bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(input)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObect(input)).toBeTruthy();
  });

  it('booleans', () => {
    expect(validator.isBoolean(input)).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isFunction(input)).toBeTruthy();
  });

  it('numbers', () => {
    expect(validator.isNumber(input)).toBeTruthy();
  });


});



describe('validator module performs complex validations', () => {

  const corey = {


  }

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(true).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(true).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(true).toBeFalsy();
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(true).toBeFalsy();
  });

  // TODO: Cover so, so many more cases

});

