import React, { Component } from 'react'
import Navbar from './Navbar'


class Footprint extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the Footprint calc</h1>                
            </div>
        )
    }
}


export default Footprint