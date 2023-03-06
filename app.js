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
  res.render('index', { restaurants: restaurantData })
})

app.get('/restaurants/:restaurantID', (req, res) => {
  const id = req.params.restaurantID
  const restaurant = restaurantList.results.find(restaurant => {
    return restaurant.id.toString() === id
  })
  res.render('show', { restaurant: restaurant })
})

app.listen(port, () => {
  console.log(`Now Server is working on localhost:${port}`)
})