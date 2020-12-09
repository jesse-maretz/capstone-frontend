import React, { Component } from 'react'
import Navbar from './Navbar'
import Trending from './Trending'


class Landing extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the landing page</h1>
                <Trending />
                
            </div>
        )
    }
}


export default Landing