// the fs module contains our 'ls' command. we need to require it from the node library here
const fs = require('fs');

// fs.readdir will get files from a directory
fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
});
