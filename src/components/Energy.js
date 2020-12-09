import React, { Component } from 'react'
import Navbar from './Navbar'


class Energy extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the Energy page</h1>
                
            </div>
        )
    }
}


export default Energy