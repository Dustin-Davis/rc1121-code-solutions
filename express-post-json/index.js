const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const property in grades) {
    arr.push(grades[property]);
  }
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const newGrade = {};
  newGrade.id = nextId;
  newGrade.name = body.name;
  newGrade.course = body.course;
  newGrade.score = body.score;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
