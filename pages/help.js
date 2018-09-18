import { Component } from 'react'
import Header from "../components/Header.js"
import Actions from "../components/Actions.js"

class Help extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>Welcome to the Wines API Helpcenter</p>
                <Actions />
            </div>
        )
    }
}

export default Help