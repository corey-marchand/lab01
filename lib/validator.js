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

validator.isNumber = (input) => {
  return typeof input === 'number';
}

validator.isArray = (input) => {
  return typeof Array.isArray(input);
}

validator.isObect = (input) => {
  return typeof input === 'object';
}

validator.isFunction = (input) => {
  return typeof input === 'function';
}

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
}

