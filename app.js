const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
var port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
//var cons = require('consolidate');


const app = express();
app.listen(process.env.PORT || 3000 );
// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
//app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
  console.log("Server Started :: index");
});