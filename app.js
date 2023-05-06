const express = require('express');
const app = express();
require('./swagger')(app);

/**
 * @swagger
 * tags:
 *   name: Tests
 *   description: API endpoints for managing tests
 */
/**
 * @swagger
 * /api/hello:
 *   get:
 *     tags: [Tests]
 *     description: Says hello
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/', (req, res) => {
    res.redirect('/swagger');
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
