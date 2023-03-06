const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('exphbs', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'exphbs')
app.use(express.static('public'))