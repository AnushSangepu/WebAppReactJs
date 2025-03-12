const express = require('express');
const router = express.Router();

// Dummy user for authentication
const user = {
  username: 'user',
  password: 'password'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.status(200).send({ message: 'Login successful!' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

module.exports = router;
