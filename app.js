const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/main');
const bookRoutes = require('./routes/books');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bookRoutes);
app.use(mainRoutes);

app.listen(3000);