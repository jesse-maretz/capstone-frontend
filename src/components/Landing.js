import React, { Component } from 'react'
import Navbar from './Navbar'
import Trending from './Trending'
import LoginReg from './LoginReg'
import './../style/Landing.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';


class Landing extends Component{
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <div className="land1left">
                        <h1>We'd love for you to join us!</h1>
                        <Container>
                            <Link to='/loginReg'>
                                <Button>Sign up</Button>
                            </Link>
                        </Container>
                    </div>
                    <div className="land1right">
                        <Trending />
                    </div>
                </main>                
            </div>
        )
    }
}


export default Landing