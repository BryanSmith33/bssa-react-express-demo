const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const friends = [
  {name: "Landon", age: 27, country: "United States"}
]

app.get('/api/sendFriends', (req, res) => {
  res.send(friends)
})
app.post('/api/addFriend', (req, res) => {
  const newFriend = {
    name: req.body.name,
    age: req.body.age,
    country: req.body.country
  }
  friends.push(newFriend)
  res.send(friends)
})
app.get('/api/getRandomFriend', (req, res) => {
  let randomFriend = friends[Math.floor(Math.random() * friends.length)]
  res.send(randomFriend)
})

const port = 3333
app.listen(port, () => console.log(`listening on port ${port}`))