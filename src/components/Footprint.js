import React, { Component } from 'react'
import { Container, Button, InputLabel, Box, Input } from '@material-ui/core';
import iframe from 'react-iframe' 
import Navbar from './Navbar'
import Calendar from 'react-calendar'
import './../style/Footprint.css'


class Footprint extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: "",
            footprint: 0
        }
    }

    handleDate = (e) => {
        console.log(e.target)
        this.setState({date: e.target})
    }
    handleFootprint = (e) => {
        this.setState({footprint: e.target.value})
    }
    submitFootprint = (e) => {
        console.log(e)
    }


    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <div className="footprintMain">
                    <Container className="footprintForm">
                        <Box maxWidth={400}>
                            <form onSubmit={this.submitFootprint}>
                            <InputLabel>Date: </InputLabel>
                            <Calendar
                                required
                                defaultView="month"
                                onChange={this.handleDate}>
                            </Calendar>
                            <InputLabel>Your footprint: </InputLabel>
                            <Input
                                required
                                onChange={this.handleFootprint}
                                type="number"
                                placeholder="my footprint is...">
                            </Input>
                            <Button>Submit</Button>
                            </form>
                        </Box>
                    </Container>
                    <div className="calc">
                        <iframe id="footprintCalc"
                            title="Footprint Calculator"
                            width="1000"
                            height="1000"
                            src="https://www3.epa.gov/carbon-footprint-calculator/">
                        </iframe>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footprint