import React, { Component } from 'react'
import iframe from 'react-iframe' 
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
                <div>
                    <iframe id="footprintCalc"
                        title="Footprint Calculator"
                        width="1000"
                        height="1000"
                        src="https://www.carbonfootprint.com/calculator.aspx">
                    </iframe>
                </div>                
            </div>
        )
    }
}


export default Footprint