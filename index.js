const express = require('express');
const path = require('path');
const serverRoutes = require('./routes/routes');
const exphbs = require('express-handlebars')
const session = require('express-session');
const varMiddleware = require('./middleware/variables');
const auth = require('./middleware/auth.js')

const app = express();

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', 'views')
app.use(express.static('public'))

app.use(express.json());

app.use(session({
	secret: 'secret key',
	resave: false,
	saveUninitialized: false
}))
app.use(varMiddleware)
app.use(serverRoutes)

app.listen(3000);