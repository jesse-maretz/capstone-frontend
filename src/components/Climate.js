import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'
import { Line } from 'react-chartjs-2'
import testCsv from './../datasets/test.csv'


class Climate extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData: {}
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
                </Container>
            </div>
        );
    }
}

export default Climate;