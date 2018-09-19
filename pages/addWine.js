import { Component } from 'react'
import Header from "../components/Header.js"
import WineList from "../components/WineList.js"
import Meta from "../components/Meta.js"
import Link from "next/link";
import Router from 'next/router'

const bodyStyle = {
    width: "800px",
    margin: "0 auto",
    background: "white",
    padding: "1em",
}

const containerStyle = {
    listStyleType: "none",
    padding: "2em",
    paddingBottom: "0.5em",
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
}

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                name: "",
                price: "",
                volume: "",
                origin: "",
                alcohol: "",
                description: "",
                year: ""
            }
        }
    }
    createWine = () => {
        let data = this.state.data

        if(data.name && data.price && data.volume && data.origin && data.alcohol && data.description && data.year) {
            let query = ""
            query += "name=" + data.name
            query += "&price=" + data.price
            query += "&volume=" + data.volume
            query += "&origin=" + data.origin
            query += "&alcohol=" + data.alcohol
            query += "&description=" + data.description
            query += "&year=" + data.year

            fetch("http://localhost:3001/wines?" + query, { method: "POST" })
            .then( data => data.json())
            .then( res => {
                console.log(res)
                Router.push("/")
            })
        }
    }

    handleInput = (event) => {
        let changedKey = event.target.name

        let data = {
            ...this.state.data
        }
        
        data[changedKey] = event.target.value
        this.setState({ data })
    }
    render() {
        return (
            <div style={bodyStyle}>
                <Meta />
                <Header />
                <div style={containerStyle}>
                    <h2>Add New Wine</h2>   
                    <br />
                    <label>Name</label>
                    <input name="name" type="text" value={this.state.data.name} onChange={this.handleInput} placeholder="Pinot Noir"/><br />
                    <label>Price</label>
                    <input name="price" type="text" value={this.state.data.price} onChange={this.handleInput} placeholder="199" /><br />
                    <label>Volume</label>
                    <input name="volume" type="text" value={this.state.data.volume} onChange={this.handleInput} placeholder="250ml" /><br />
                    <label>Origin</label>
                    <input name="origin" type="text" value={this.state.data.origin} onChange={this.handleInput} placeholder="France" /><br />
                    <label>Year</label>
                    <input name="year" type="text" value={this.state.data.year} onChange={this.handleInput} placeholder="1995" /><br />
                    <label>Alcoholic Percentage</label>
                    <input name="alcohol" type="text" value={this.state.data.alcohol} onChange={this.handleInput} placeholder="15.0" /><br />
                    <label>Description</label>
                    <input name="description" type="text" value={this.state.data.description} onChange={this.handleInput} placeholder="A fresh taste of grape" /><br />
                    
                    <div>
                        <button onClick={ this.createWine } >Add Wine</button>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Index