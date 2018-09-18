function error(message) {
    return { "Error": message }
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

        return match || error("Can't find wine '" + wine + "'.")
    },
    deleteWine: function(wine) {
        let msg

        Object.keys(this.list).forEach( item => {
            if(wine === item) {
                delete this.list[wine]
                msg = { "Message": "Succesfully deleted '" + wine + "'!" }
            }
        })
        return msg || error("Can't find wine '" + wine + "'.")
    },
    addWine: function(name, data) {
        let msg

        if(!this.list[name] && name) {
            this.list[name] = data
            msg = { "Message": "Succesfully added '" + name + "'!" }
        }

        return msg || error("Can't add wine '" + name + "'.")
    },
    editWine: function(name, data) {
        let msg

        if(this.list[name]) {
            Object.keys(data).forEach( key => {
                if(this.list[name][key]) {
                    this.list[name][key] = data[key]
                }
            })

            msg = { "Message": "Successfully updated '" + name + '"!'}
        }

        return msg || error("Can't find wine '" + name + "'.")
    }
}

module.exports = wines