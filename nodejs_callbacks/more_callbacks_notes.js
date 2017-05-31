var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function do_stuff (callback) {
  rl.question("Reverse what file?", function (filename) {
    fs.readFile(filename, function (error, buffer) {
      if (error) {
        callback(error, null);
        return;
      }
      
      var content = buffer.toString();
      content = content.split('');
      content = content.reverse();
      content = content.join('');
      fs.writeFile('reverse.txt', content, function (error) {
        if (error) {
          callback(error, null);
          return;
        }
        
        callback(null, 'File Saved!');
      });
    });
  });
}

do_stuff(function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
  
  rl.close();
});

console.log('END OF FILE');