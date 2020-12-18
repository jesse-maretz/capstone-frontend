import React, { Component } from 'react'
import Navbar from './Navbar'
import './../style/Habits.css'
import construction from './../images/construction.png'

class Habits extends Component{
    constructor(props){
        super(props)
        this.state = {
            footprintHist: []
        }
    }


    componentDidMount = (e) => {
        let url = "http://localhost:8000/footprint/"
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "*"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({footprintHist: data})
            })

    }

    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>Under construction</h1>
                <img src={construction} />
            </div>
        )
    }
}


export default Habits