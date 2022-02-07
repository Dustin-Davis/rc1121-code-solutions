const express = require('express');
const path = require('path');
const app = express();
const combined = path.join(__dirname, '/public');

const expressStatic = express.static(combined);
app.use(expressStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
