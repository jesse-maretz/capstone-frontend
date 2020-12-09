import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import Navbar from './Navbar'


class MacroData extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <h1>This is the MacroData page</h1>
                <Container>
                    <Link to='/data/climate'>
                        <Button
                        variant='contained'
                        color='primary'
                        >Climate Data
                        </Button>
                    </Link>
                    <Link to='/data/energy'>
                        <Button
                        variant='contained'
                        color='primary'
                        >Energy Data
                        </Button>
                    </Link>
                </Container>
                
            </div>
        )
    }
}


export default MacroData