import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'



class Climate extends Component {
    constructor(props){
        super(props)
        this.state = {
            datacategories: [],
            locations: [],
            locationcategories: [],
            datasets: []
        }
    }



    componentDidMount = () => {
        /*
        let dataCatUrl = "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories"
        fetch(dataCatUrl, {
            method: 'GET',
            headers: {
                'token': process.env.REACT_APP_CLIMATE_TOKEN
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.state.datacategories = data.results
                console.log(this.state.datacategories)
            })
            .catch(err => {
                console.log(err)
            })

            */
        let locationsUrl = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations"
        fetch(locationsUrl, {
            method: 'GET',
            headers: {
                'token': process.env.REACT_APP_CLIMATE_TOKEN
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.state.locations = data.results
                console.log(this.state.locations)
            })
            .catch(err => {
                console.log(err)
            })

/*
        let locationCategoriesUrl = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locationcategories/CITY"
        fetch(locationCategoriesUrl, {
            method: 'GET',
            headers: {
                'token': process.env.REACT_APP_CLIMATE_TOKEN
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.state.locationcategories = data.results
                console.log(this.state.locationcategories)
            })
            .catch(err => {
                console.log(err)
            })
            */
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