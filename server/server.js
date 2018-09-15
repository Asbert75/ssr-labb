const express = require("express")
const app = express()
const wines = require("./wines.js");

app.get("/", (req, res) => {
    // Edit this to send a .html file for server-side rendering! :-)
    res.send("Welcome!")
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
    res.send("Post test")
})

// Edit a wine
app.put("/wines", (req, res) => {
    res.send("Put test")
})

app.listen(3001, () => {
    console.log("Testing!")
})