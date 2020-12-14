import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'



class Climate extends Component {
    constructor(props){
        super(props)
        this.state = {
            locations: []
        }
    }



    componentDidMount = () => {


        // https://data.giss.nasa.gov/gistemp/
            // Zonal annual means 1880-present CSV
        console.log("mounted")

    }


    render() { 
        return (
            <div>
                <Navbar />
                <h1>This is the climate page</h1>
                <Container>
                    <Link to='/'>
                        <Button
                        variant='contained'
                        color='primary'
                        >Home
                        </Button>
                    </Link>
                    <Link to='/data'>
                        <Button
                        variant='contained'
                        color='primary'
                        >Back
                        </Button>
                    </Link>
                </Container>
            </div>
        );
    }
}

export default Climate;