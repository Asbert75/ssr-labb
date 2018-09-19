import { Component } from 'react'
import Header from "../components/Header.js"
import WineList from "../components/WineList.js"
import Meta from "../components/Meta.js"

const bodyStyle = {
    width: "800px",
    margin: "0 auto",
    background: "white",
    padding: "1em"
}

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wines: []
        }
    }

    fetchWines = () => {
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
                volume: list[item].volume,
                origin: list[item].origin,
                alcohol: list[item].alcohol,
                description: list[item].description,
                year: list[item].year
            })
        })

        this.setState({ wines, loaded: true })
    }

    componentDidMount() {
        this.fetchWines()
    }

    render() {
        return (
            <div style={bodyStyle}>
                <Meta />
                <Header />
                { this.state.loaded ? <WineList wines={this.state.wines} updateWineList={this.fetchWines} /> : <h2>Loading...</h2> }
            </div>
        )
    }
}

export default Index