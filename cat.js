// the fs module will give us a special ability to read the entire contents of a file. We'll need to require it from the node library
const fs = require('fs');

// // the cat function should receive a 'fileName' as an argument from bash.js
// const cat = fileName => {
//   console.log(fileName);
// };

const cat = fileName => {
  fs.readFile((fileName, data) => {
    if (err) throw err;
    console.log(`The ${fileName} contains: `, data);
  });
};

module.exports = cat;
