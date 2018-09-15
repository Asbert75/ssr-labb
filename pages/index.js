import { Component } from 'react';
import Link from 'next/link';

const isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

class Index extends Component {
    constructor(props) {
        super()

        this.state = {
            wines: []
        }
    }
    testDeleteWine = () => {
        fetch("http://localhost:3001/wines/Pinot Noirrr", { method: "DELETE" })
        .then( data => data.json())
        .then( res => console.log(res));
    }

    fetchWines = () => {
        console.log("Fetching");
        fetch("http://localhost:3001/wines")
        .then( data => data.json())
        .then ( res => this.displayWines(res))
    }

    displayWines = (list) => {
        let newList = []
        Object.keys(list).forEach( item => {
            newList.push(item)
            newList.push("\n")
        })

        this.setState({ wines: newList })
    }

    componentDidMount() {
        this.fetchWines();
    }

    render() {
        return (
            <div>
                <p>Hello World!</p>
                <Link href="/modify">
                    <a>Modify</a>
                </Link>

                <button onClick={ this.testDeleteWine }>Delete A Wine!</button>
                <div>
                    { this.state.wines }
                </div>
            </div>
        )
    }
}

export default Index