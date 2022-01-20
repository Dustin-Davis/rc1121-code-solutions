const file = require('fs');
let i = 2;

const list = (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  if (i < process.argv.length) {
    file.readFile(process.argv[i++], 'utf8', list);
  }
};

if (process.argv.length >= 3) {
  file.readFile(process.argv[i++], 'utf8', list);
}
