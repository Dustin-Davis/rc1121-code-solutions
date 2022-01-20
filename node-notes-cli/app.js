const command = process.argv[2].toLowerCase();

if (command === 'read') {
  require('./read');
} else if (command === 'create') {
  require('./add');
} else if (command === 'update') {
  require('./update');
} else if (command === 'delete') {
  require('./delete');
}
