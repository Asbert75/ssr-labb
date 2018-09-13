let wines = {
    list: {
        "Damigian Rosso": {
            "price": "255",
            "currency": "sek",
            "volume": "750ml",
            "origin": "Italy",
            "alcoholPercentage": "14",
            "description": "Nuanced, spicy taste with a hint of plums, blueberry, liquorice, dark cherries and black olives."
        },
        "Munaloss": {
            "price": "139",
            "currency": "sek",
            "volume": "750ml",
            "origin": "Italy",
            "alcoholPercentage": "12",
            "description": "Spicy, nuanced taste with a hint of forest berries, cherries, liquorice, rosemarin, tar and orange."
        },
        "Pinot Noir": {
            "price": "99",
            "currency": "sek",
            "volume": "1000ml",
            "origin": "France",
            "alcoholPercentage": "13",
            "description": "It's a wine, dude."
        }
    },
    listWines: function() {
        return this.list;
    },
    getWine: function(wine) {
        console.log("Get", wine);
        return wine;
    },
    deleteWine: function(wine) {
        console.log("Deleted", wine);
        return wine;
    },
    editWine: function(wine) {
        console.log("Edited", wine);
        return wine;
    }
}

module.exports = wines;