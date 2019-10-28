'use strict';

let validator = module.exports = {};


/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */

validator.isString = (input) => {
  return typeof input === 'string';
};


validator.isArray = (input) => {
  return typeof Array.isArray(input);
}

validator.isObect = (input) => {
  return typeof input === 'object';
}

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
}

validator.isFunction = (input) => {
  return typeof input === 'function';
}
validator.isNumber = (input) => {
  return typeof input === 'number';
}
/**
 * Is this a Array?
 * @param input
 * @returns {boolean}
 */

 validator.arrayValue = (input) => {
   return typeof input === 'string';
 }

 /**
 * Does the array have corresponding values with the list?
 * @param input
 * @returns {boolean}
 */