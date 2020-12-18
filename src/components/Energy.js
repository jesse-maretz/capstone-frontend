import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'
import iframe from 'react-iframe'

class Energy extends Component{
    constructor(props){
        super(props)
    }



    getEIA = () => {
        let url = "http://api.eia.gov/category/?api_key=1341388a987bd3a25dbdf3b235a7e546&category_id=3604304"
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
            })
    }

    componentDidMount = () => {
        console.log('mounted')
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the Energy page</h1>
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
                        color='inherit'
                        onClick={this.getEIA}
                        >Get EIA Info
                        </Button>
                    </Link>
                </Container>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X5P-CDVTT_8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}


export default Energy