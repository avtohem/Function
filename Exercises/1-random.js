'use strict';

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN

const random = (min, max = 0) => {
  if (max === 0) {
    max = min;
    min = 0;
  }
  return Math.floor(min + Math.random() * (max - min));
};

module.exports = { random };
