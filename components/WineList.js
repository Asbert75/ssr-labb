import Link from "next/link"
import { Component } from 'react'

const ulStyle = {
    border: "0px solid red"
}

const liStyle = {
    listStyleType: "none"
}

class WineList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    deleteWine = (wine) => {
        fetch("http://localhost:3001/wines/" + wine, { method: "DELETE" })
        .then( data => data.json())
        .then( res => {
            console.log(res)
            // Refresh Wines List
            this.props.updateWineList()
        })
    }

    createWine = (data) => {
        let query
        query += "name=" + data.name
        query += "&price=" + data.price
        query += "&currency=" + data.currency
        query += "&volume=" + data.volume
        query += "&origin=" + data.origin
        query += "&alcoholPercentage=" + data.alcoholPercentage
        query += "&description=" + data.description

        fetch("http://localhost:3001/wines?" + query, { method: "POST" })
        .then( data => data.json())
        .then( res => { 
            console.log(res)
            // Refresh Wines List
            this.props.updateWineList()
        })
    }

    editWine = (data) => {
        let query
        if(data.name) {
            query += "name=" + data.name
            if(data.price) query += "&price=" + data.price
            if(data.currency) query += "&currency=" + data.currency
            if(data.volume) query += "&volume=" + data.volume
            if(data.origin) query += "&origin=" + data.origin
            if(data.alcoholPercentage) query += "&alcoholPercentage=" + data.alcoholPercentage
            if(data.description) query += "&description=" + data.description   
        }

        fetch("http://localhost:3001/wines?" + query, { method: "PUT" })
        .then( data => data.json())
        .then( res => { 
            console.log(res)
            // Refresh Wines List
            this.props.updateWineList()
        })
    }

    handleInput = (event) => {
        let changedKey = event.target.name
        let data = {
            ...this.state.data,   
        }
        
        data[changedKey] = event.target.value
        this.setState({ data })
    }

    render() {
        return (
            <ul style={ulStyle}>
                <li style={liStyle} key="addWine">
                    
                    <button onClick={ this.createWine } >Add Wine</button>
                </li>
                { this.props.wines.map( wine => (
                    this.state.edit ? 
                        this.state.data.name === wine.name ? 
                            <li style={liStyle} key={wine.name}>
                                <h4>Editing {wine.name}</h4>
                                <label>Name</label>
                                <input name="name" type="text" value={ this.state.data.name } onChange={ this.handleInput } />
                                <label>Price</label>
                                <input name="price" type="text" value={ this.state.data.price } onChange={ this.handleInput } />
                                <label>Currency</label>
                                <input name="currency" type="text" value={ this.state.data.currency } onChange={ this.handleInput } />
                                <label>Volume</label>
                                <input name="volume" type="text" value={ this.state.data.volume } onChange={ this.handleInput } />
                                <label>Origin</label>
                                <input name="origin" type="text" value={ this.state.data.origin } onChange={ this.handleInput } />
                                <label>Alcohol</label>
                                <input name="alcoholPercentage" type="text" value={ this.state.data.alcoholPercentage } onChange={ this.handleInput } />
                                <label>Description</label>
                                <input name="description" type="text" value={ this.state.data.description } onChange={ this.handleInput } />
                                <button onClick={ () => { } } >Confirm</button>
                                <button onClick={ () => { this.setState({ edit: false, data: null }) } } >Discard</button>
                            </li>
                        :   null
                    :   <li style={liStyle} key={wine.name}>
                            <h3>{ wine.name }</h3>
                            <p>Price: { wine.price + wine.currency }</p>
                            <p>Volume: { wine.volume }</p>
                            <p>Origin: { wine.origin }</p>
                            <p>Alcohol: { wine.alcoholPercentage }%</p>
                            <p>Description: { wine.description }</p>
                            <button onClick={ () => { this.deleteWine(wine.name) } }>Delete</button>
                            <button onClick={ () => { this.setState({ edit: true, data: wine }) } } >Edit</button>
                        </li>
                )) }
            </ul>
        )
    }
}

export default WineList