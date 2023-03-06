const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  const restaurantData = restaurantList.results
  res.render('index', {restaurants: restaurantData})
})

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port}`)
})