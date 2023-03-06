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

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  // restaurantList.results.name
  // restaurantList.results.name_en
  // restaurantList.results.category
  const restaurantData = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurantData , keyword: keyword})
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