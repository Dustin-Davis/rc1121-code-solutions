const file = require('fs');

file.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
