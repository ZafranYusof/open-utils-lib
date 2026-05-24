const utils = require('../src');

// String examples
console.log(utils.capitalize('hello world'));  // Hello world
console.log(utils.truncate('This is a very long string that needs truncating', 20));

// Number examples
console.log(utils.clamp(150, 0, 100));  // 100
console.log(utils.random(1, 6));  // dice roll