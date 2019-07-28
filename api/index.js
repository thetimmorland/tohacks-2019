const sequelize = require('./models').sequelize;
sequelize.sync();

const express = require('express');
const app = express();

const users = require('./routes/users');
const jobs = require('./routes/jobs');
const postings = require('./routes/postings');

app.use('/api/jobs', jobs);
app.use('/api/users', users);
app.use('/api/postings', postings);

app.listen(process.env.API_PORT);
app.get('/', (req, res) => res.send('Hello World'));
