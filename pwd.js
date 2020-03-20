// Output a prompt
const outputPrompt = process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
const stdinData = process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline at the end

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

// exporting a single anonymous function with the code I need
module.exports = function() {
  console.log(`Hey, Dev! Current Path is: ${process.cwd()}`);
};

// // exporting the two functions above...(trying this syntax, but won't work in next page)
// module.exports = {
//   outputPrompt,
//   stdinData,
// };
