function error(message) {
    return { "Error": message }
}

// Check to see if all parameters are matched ---- FUNGERAR INTE ÄNNU
function validateData(data) {
    if(
        (typeof data.name === "string" && data.price.length > 0)
        && (typeof data.price === "string" && data.price.length > 0)
        && (typeof data.currency === "string" && data.currency.length > 0)
        && (typeof data.volume === "string" && data.volume.length > 0)
        && (typeof data.origin === "string" && data.origin.length > 0)
        && (typeof data.alcoholPercentage === "string" && data.alcoholPercentage > 0)
        && (typeof data.description === "string" && data.description > 0)) {
        return true
    }
    
    return false
}

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
        return this.list
    },
    getWine: function(wine) {
        let match

        Object.keys(this.list).forEach( item => {
            if(wine === item) {
                match = this.list[item]
            }
        })

        return match || error("Can't find wine'" + wine + "'!")
    },
    deleteWine: function(wine) {
        let msg

        Object.keys(this.list).forEach( item => {
            if(wine === item) {
                delete this.list[wine]
                msg = { "Message": "Succesfully deleted '" + wine + "'!" }
                console.log("Deleted '" + wine + "'!")
            }
        })
        return msg || error("Can't find wine'" + wine + "'!")
    },
    addWine: function(name, data) {
        let msg

        if(!this.list[name]) {
            this.list[name] = data
            msg = { "Message": "Succesfully added '" + name + "'!" }
        }

        return msg || error("Can't add wine '" + name + "'. Wine already exists.")
    },
    editWine: function(name, data) {
        let msg

        if(this.list[name]) {
            Object.keys(data).forEach( key => {
                if(this.list[name][key]) {
                    this.list[name][key] = data[key]
                }
            })

            msg = { "Message": "Updated '" + name + '"!'}
        }

        return msg || error("Can't find wine '" + name + "'!")
    }
}

module.exports = wines