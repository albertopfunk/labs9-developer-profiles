const express = require('express')
const server = express.Router()
const db = require('../helpers/index.js')


server.get('/', (req, res) => {
    db.getUsers().then(users => {
        res.status(200).json(users)
    }).catch(err => {
        console.log(err)
    })
})

server.get('/:id', (req, res) => {
    db.getUsers(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log("error:", err)
      res.status(500).json({ message: "error fetching data" });
    })    
})

server.post('/new', (req, res) => {
  db.addUser(req.body)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log("error:", err)
    res.status(500).json({ message: "error posting data" });
  })    
})

module.exports = server