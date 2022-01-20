const fs = require('fs');
const data = require('./data');
const notes = data.notes;
const input = process.argv[3];

delete notes[input];

const string = JSON.stringify(data, null, 2);

fs.writeFile('data.json', string, err => {
  if (err) { throw err; }

});
