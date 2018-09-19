import Link from "next/link"
import { Component } from 'react'

const ulStyle = {
    border: "0px solid red"
}

const liStyle = {
    listStyleType: "none",
    padding: "2em",
    paddingBottom: "0.5em",
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
}

const successStyle = {
    background: "#bceda6",
    display: "inline-block",
    listStyleType: "none",
    width: "100%",
    paddingTop: "0.5em",
    paddingBottom: "0.5em"
}

const errorStyle = {
    background: "#eaa4a4",
    display: "inline-block",
    listStyleType: "none",
    width: "100%",
    paddingTop: "0.5em",
    paddingBottom: "0.5em"
}

const messageStyle = {
    marginLeft: "1em",
    fontWeight: "600",
    color: "#333"
}

const wineFragment = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em"
}

const description = {
    maxWidth: "75%",
    paddingBottom: "2em",
    opacity: "0.8"
}

const wineButtons = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
}

const editButtons = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "1em"
}

const wineImage = {

}

const wineHead = {
    display: "flex",
    flexDirection: "row"
}

class WineList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            recentlyEdited: false
        }
    }

    deleteWine = (wine) => {
        fetch("http://localhost:3001/wines/" + wine, { method: "DELETE" })
        .then( data => data.json())
        .then( res => {
            // Refresh Wines List
            this.props.updateWineList()
            this.displayInformation(res)
        })
    }

    editWine = (data) => {
        let query = ""

        if(data.name) {
            query += "name=" + data.name
            if(data.price) query += "&price=" + data.price
            if(data.volume) query += "&volume=" + data.volume
            if(data.origin) query += "&origin=" + data.origin
            if(data.alcohol) query += "&alcohol=" + data.alcohol
            if(data.description) query += "&description=" + data.description
            if(data.year) query += "&year=" + data.year
        }

        fetch("http://localhost:3001/wines?" + query, { method: "PUT" })
        .then( data => data.json())
        .then( res => {
            // Refresh wine list and remove edit data
            this.props.updateWineList()
            this.setState({ edit: false, data: null }, () => { this.displayInformation(res) })
        })
    }

    displayInformation(res) {
        this.setState({ res }, () => {
            setTimeout( () => {
                this.setState({ res: null })
            }, 2000)
        })
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
            <ul style={ulStyle}>
                { this.state.res 
                    ?   this.state.res.Message 
                        ?   (<li style={successStyle}>
                                <p style={messageStyle}>{ this.state.res.Message }</p>
                            </li>) 
                        :   (<li style={errorStyle}>
                                <p style={messageStyle}>{ this.state.res.Error }</p>
                            </li>)
                    : null } 
                { this.props.wines.map( wine => (
                    this.state.edit ? 
                        this.state.data.tempName === wine.name ? 
                            <li style={liStyle} key={wine.name}>
                                <h3>Editing {this.state.data.tempName}</h3>
                                <br />
                                <label>Name</label>
                                <input name="name" type="text" value={ this.state.data.name } onChange={ this.handleInput } /><br />
                                <label>Price</label>
                                <input name="price" type="text" value={ this.state.data.price } onChange={ this.handleInput } /><br />
                                <label>Volume</label>
                                <input name="volume" type="text" value={ this.state.data.volume } onChange={ this.handleInput } /><br />
                                <label>Origin</label>
                                <input name="origin" type="text" value={ this.state.data.origin } onChange={ this.handleInput } /><br />
                                <label>Year</label>
                                <input name="year" type="text" value={ this.state.data.year } onChange={ this.handleInput } /><br />
                                <label>Percentage</label>
                                <input name="alcohol" type="text" value={ this.state.data.alcohol } onChange={ this.handleInput } /><br />
                                <label>Description</label>
                                <input name="description" type="text" value={ this.state.data.description } onChange={ this.handleInput } />
                                <div style={editButtons}>
                                    <button onClick={ () => { this.editWine(this.state.data) } } >Confirm</button>
                                    <button className="delete" onClick={ () => { this.setState({ edit: false, data: null }) } } >Discard</button>
                                </div>
                            </li>
                        :   null
                    :   <li style={liStyle} key={wine.name}>
                            <div style={wineFragment}>
                                <div style={wineHead}>
                                    <div className="outline" style={wineImage}>
                                        <img className="placeholder" src="https://i.imgur.com/ifP1DzO.png" />
                                    </div>
                                    <div className="outline" style={wine}>
                                        <h2>{ wine.name }</h2>
                                        <p>{ wine.origin }, { wine.year }</p>
                                    </div>
                                </div>
                                <div className="outline">
                                    <h2 className="price">{ wine.price }:-</h2>
                                    <p>{ wine.alcohol }%, { wine.volume }</p>
                                </div>
                            </div>
                            <div style={wineFragment}>
                                <p style={description}>{ wine.description }</p>
                                <div style={wineButtons}>
                                    <button className="edit" onClick={ () => { 
                                        let data = {
                                            ...wine,
                                            tempName: wine.name
                                        }

                                        this.setState({ edit: true, data })
                                    }} >Edit</button>
                                    <button className="delete" onClick={ () => { this.deleteWine(wine.name) } } >Remove</button>
                                </div>
                            </div>
                        </li>
                )) }
            </ul>
        )
    }
}

export default WineList