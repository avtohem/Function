'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

//before solutions
//hardcoded length
// ip.split('.').reduce((total, currVal, index) => (
//    total += parseInt(currVal) << (8 * (3 - index))), 0)

const ipToInt = (ip = '127.0.0.1') => (
  ip.split('.').reduce((total, currVal) => (
    total = (total << 8) + parseInt(currVal)), 0)
);

module.exports = { ipToInt };
