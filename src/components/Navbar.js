import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import './../style/Navbar.css'


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
                        color='inherit'>
                            Home
                        </Button>
                    </Link>
                    <Link to='/data/climate'>
                        <Button
                        variant='contained'
                        color='inherit'>
                           Climate data
                        </Button>
                    </Link>
                    <Link to='/data/energy'>
                        <Button
                        variant='contained'
                        color='inherit'>
                            Energy Data
                        </Button>
                    </Link>
                    <Link to='/footprint'>
                        <Button
                        variant='contained'
                        color='inherit'>
                            Carbon Footprint
                        </Button>
                    </Link>
                    <Link to='/habits'>
                        <Button
                        variant='contained'
                        color='inherit'>
                            Habits
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    }
}


export default Navbar