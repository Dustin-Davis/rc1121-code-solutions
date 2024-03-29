const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const jsonMiddleWare = express.json();

app.use(jsonMiddleWare);

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from grades
    `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const score = Number(req.body.score);
  if (!body.name || !body.course || !body.score) {
    res.status(400).json({ error: 'Entry must contain "Name", "Course", and "Score"' });
    return;
  } else if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Invalid integer' });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const values = [body.name, body.course, body.score];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows[0];
      res.status(201).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const body = req.body;
  const id = Number(req.params.gradeId);
  const score = Number(req.body.score);
  if (!id || id <= 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Invalid Id' });
    return;
  } else if (!body.name || !body.course || !body.score) {
    res.status(400).json({ error: 'Entry must contain name, course, and score' });
    return;
  } else if (!score || score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Invalid integer' });
    return;
  }
  const sql = `
     update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
    where "gradeId" = $4
    returning *
  `;
  const values = [body.name, body.course, body.score, id];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'gradeId does not exist' });
        return;
      }
      res.status(200).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!id || id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Invalid Id' });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const values = [id];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows[0];
      if (!grades) {
        res.status(404).json({ error: 'gradeId does not exist' });
        return;
      }
      res.status(204).json(grades);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
