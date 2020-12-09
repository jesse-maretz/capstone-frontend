import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';

//import './../style/Navbar.css'

class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='navbar'>
                <h1>This is the navbar</h1>
                <Container>
                    <Link to='/data'>
                        <Button
                        variant='contained'
                        color='primary'
                        >Data charts
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}


export default Navbar