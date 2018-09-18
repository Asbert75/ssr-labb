const express = require("express")
const app = express()
const wines = require("./wines.js")
const cors = require("cors")

app.use(cors())

app.get("/", (req, res) => {
    res.send("You're probably in the wrong place visiting this link. Try /wines")
})

// Get all wines
app.get("/wines", (req, res) => {
    res.send(wines.listWines())
})

// Get wine by name
app.get("/wines/:wine", (req, res) => {
    let wine = req.params.wine

    res.send(wines.getWine(wine))
})

// Delete wine by name
app.delete("/wines/:wine", (req, res) => {
    let wine = req.params.wine

    res.send(wines.deleteWine(wine))
})

// Add a wine
app.post("/wines", (req, res) => {
    let name = req.query.name;
    let data = { 
        price: req.query.price,
        currency: req.query.currency,
        volume: req.query.volume,
        origin: req.query.origin,
        alcoholPercentage: req.query.alcoholPercentage,
        description: req.query.description
    }

    res.send(wines.addWine(name, data))
})

// Edit a wine
app.put("/wines", (req, res) => {
    let name = req.query.name;

    res.send(wines.editWine(name, req.query))
})

app.listen(3001, () => {
    console.log("Listening to port 3001!")
})