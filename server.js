'use strict'

const database = require('./fakedatabase.js')
const express = require('express')
const cors = require('cors')

let app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get('/contacts', function(req, res) {
    database.sort(function(a, b) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    })
    let phrase = Object.keys(req.query)
    let data = database
    if(phrase.includes('phrase')) {
        if(req.query.phrase === '') {
            res.status(400).send({})
        }
        data = data.filter(function(item) {
            const name = item.name.toLowerCase()
            return name.includes(req.query.phrase.toLowerCase())
        })
    }
    res.json(data) 
})

app.get('/contacts/:id', function(req, res) {
    let contact = database.find(item => {
        return item.id == req.params.id
    })
    if(!contact) { res.status(404).send('No contact with that id') }
    res.json(contact)
})

app.delete('/contacts/:id', function(req, res) {
    let contact = database.find(item => {
        return item.id == req.params.id
    })
    let contactIndex = database.indexOf(contact)
    database.splice(contactIndex, 1)
    return res.send()
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Server running...')
})
