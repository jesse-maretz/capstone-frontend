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
                <Container>
                    <Link to='/'>
                        <Button
                        variant='contained'
                        color='primary'>
                            Home
                        </Button>
                    </Link>
                    <Link to='/data'>
                        <Button
                        variant='contained'
                        color='primary'>
                            Data charts
                        </Button>
                    </Link>
                    <Link to='/footprint'>
                        <Button
                        variant='contained'
                        color='primary'>
                            Carbon Footprint
                        </Button>
                    </Link>
                    <Link to='/habits'>
                        <Button
                        variant='contained'
                        color='primary'>
                            Habits
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}


export default Navbar