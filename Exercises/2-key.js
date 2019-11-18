'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * possible.length);
    result += possible[position];
  }
  return result;
};

module.exports = { generateKey };
