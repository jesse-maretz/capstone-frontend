import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'
import { Line } from 'react-chartjs-2'
import testCsv from './../datasets/test.csv'
const axios = require('axios').default

class Climate extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData: {},
            noaaData: {}
        }
    }





    chart = () => {
        this.setState({chartData: {
            labels: [],
            datasets: [
                {
                    label: 'zonal means',
                    data: []
                }
            ]
        }
        })
    }



    getNoaa = (e) => {
        console.log(e)
        fetch("http://www.ncdc.noaa.gov/cdo-web/api/v2/locations",{
            header: {
                "token": "process.env.REACT_APP_CLIMATE_TOKEN"
            }
        })
            .then((e)=>{
                console.log(e)
            })
            /*
            .then((res) => res.json())
            .then((noaa)=>{
                console.log(noaa)
                this.setState({noaaData:noaa})
            })
            */
    }




    componentDidMount = () => {
        fetch(testCsv)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
            })
    }

    updateData = () => {

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
                    <Button
                    onClick={this.getData}>
                        Get Nasa Data
                    </Button>
                    <Button
                    onClick={this.getNoaa}>
                        Get NOAA Data
                    </Button>
                    <Button
                    onClick={this.getData}>
                        Get Nasa Data
                    </Button>
                </Container>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X5P-CDVTT_8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}

export default Climate;