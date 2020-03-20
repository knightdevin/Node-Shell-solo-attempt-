// store the pwd function in a variable so it can be accessed here
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

// // invoke the pwd variable since it's set to a function in pwd.js...
// pwd();

// ERR thrown from invalid callback in cat.js on line 9. Need to refactor.
cat('pwd');
