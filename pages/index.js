import { Component } from 'react'
import Header from "../components/Header.js"
import WineList from "../components/WineList.js"

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wines: []
        }
    }

    fetchWines = () => {
        this.setState({ loaded: false })
        fetch("http://localhost:3001/wines", { method: "GET" })
        .then( data => data.json())
        .then ( res => this.displayWines(res))
    }

    displayWines = (list) => {
        let wines = []
        Object.keys(list).forEach( item => {
            wines.push( { 
                name: item,
                price: list[item].price,
                currency: list[item].currency,
                volume: list[item].volume,
                origin: list[item].origin,
                alcoholPercentage: list[item].alcoholPercentage,
                description: list[item].description
            })
        })

        this.setState({ wines, loaded: true })
    }

    componentDidMount() {
        this.fetchWines()
    }

    render() {
        return (
            <div>
                <Header />
                { this.state.loaded ? <WineList wines={this.state.wines} updateWineList={this.fetchWines} /> : <h2>Loading...</h2> }
            </div>
        )
    }
}

export default Index