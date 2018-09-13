const express = require("express")
const app = express()
const wines = require("./wines.js");

app.get("/", (req, res) => {
    res.send("Welcome!");
})

// Get all wines
app.get("/wines", (req, res) => {
    res.send(wines.listWines());
})

// Get wine by name
app.get("/wines/:wine", (req, res) => {
    let wine = req.params.wine;

    res.send(wines.getWine(wine));
})

// Delete wine by name
app.delete("/wines/:wine", (req, res) => {
    let wine = req.params.wine;

    res.send(wines.deleteWine(wine));
})

app.post("/", (req, res) => {
    res.send("Post test");
})

app.put("/", (req, res) => {
    res.send("Put test");
})

app.listen(3001, () => {
    console.log("Testing!");
})