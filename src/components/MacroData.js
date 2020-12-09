import React, { Component } from 'react'
import Navbar from './Navbar'


class MacroData extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the MacroData page</h1>
                
            </div>
        )
    }
}


export default MacroData