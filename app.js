const express = require("express");
const app = express()
const Datastore = require('nedb-promises')
const datastore = Datastore.create('user.db')
//datastore.insert({grillkorv:'grillkorv'})
//const user = Datastore.create('user.db')
 const data = datastore.find({})
app.get('', (req,res)=>{
    res.send(data)
})
app.listen(8000)