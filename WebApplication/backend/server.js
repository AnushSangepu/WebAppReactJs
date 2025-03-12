const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  res.send('Server is running. Use the /api/auth/login endpoint to log in.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
