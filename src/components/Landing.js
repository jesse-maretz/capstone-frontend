import React, { Component } from 'react'
import Navbar from './Navbar'


class Landing extends Component{
    constructor(props){
        super(props)
        this.state = {
            datacategories: []
        }
    }




    componentDidMount = () => {
        let url = "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories"
        fetch(url, {
            method: 'GET',
            headers: {
                //'Content-Type': 'application/json',
                'token': process.env.REACT_APP_CLIMATE_TOKEN
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.state.datacategories = data
            })
            .catch(err => {
                console.log(err)
            })
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the landing page</h1>
                
            </div>
        )
    }
}


export default Landing