const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.json());

// Dummy data for example
const users = [
  { email: 'user@example.com', password: '$2b$10$EixZ.DmrRasB6eFiB/cVoOmSoIvG09lym7kg.mEk4E4MWdb2aB5ga' }, // password is 'password'
  { email: 'vedantuiuc@vt.com', password: 'password' } 
];

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protecting routes
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

// Protected route example
app.get('/api/auth/user', authenticateJWT, (req, res) => {
  res.json({ email: req.user.email });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
