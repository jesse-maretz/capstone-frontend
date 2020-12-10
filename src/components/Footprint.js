import React, { Component } from 'react'
import { Container, Button, InputLabel, Box, Input } from '@material-ui/core';
import iframe from 'react-iframe' 
import Navbar from './Navbar'


class Footprint extends Component{
    constructor(props){
        super(props)
        this.state = {
            footprint: 0
        }
    }

    handleFootprint = (e) => {
        this.setState({footprint: e.target.value})
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
                        src="https://www3.epa.gov/carbon-footprint-calculator/">
                    </iframe>
                </div>
                <Container>
                    <InputLabel>Your footprint: </InputLabel>
                    <Input
                        required
                        onChange={this.handleFootprint}
                        type="number"
                        placeholder="my footprint is...">
                    </Input>
                </Container>
            </div>
        )
    }
}


export default Footprint