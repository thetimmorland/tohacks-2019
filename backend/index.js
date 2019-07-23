const express = require('express');
const app = express();

const UserRoutes = require('./UserRoutes');
app.use('/api/users', UserRoutes);

const PostingRoutes = require('./PostingRoutes');
app.use('/api/postings', PostingRoutes);

app.listen(process.env.API_PORT);
app.get('/', (req, res) => res.send('Hello World'));
