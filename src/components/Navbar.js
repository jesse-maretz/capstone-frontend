import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import './../style/Navbar.css'

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='navbar'>
                <h1>This is the navbar</h1>
            </div>
        )
    }
}


export default Navbar