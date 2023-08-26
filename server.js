const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');

app.use(bodyParser.json());

app.use('/books', booksRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
