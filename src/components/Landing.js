import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './../style/Landing.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import polarBear from './../images/polarbear.png'
import cclLogo from './../images/cclLogo.png'
import natureConservancy from './../images/natureConservancy.png'
import wwfLogo from './../images/wwfLogo.png'


class Landing extends Component{
    constructor(props){
        super(props)
    }

    handleCCL = (e) => {
        window.location = "https://citizensclimatelobby.org/"
    }
    handleNatureConservancy = (e) => {
        window.location = "https://www.nature.org/en-us/"
    }
    handleWWF = (e) => {
        window.location = "https://www.worldwildlife.org/"
    }


    render(){
        return(
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <div className="land1join">
                        <h1>We'd love for you to join us!</h1>
                        <Container>
                            <Link to='/loginReg'>
                                <Button>Sign up</Button>
                            </Link>
                        </Container>
                    </div>
                    <div className="land1about">
                        <h1>Natural Data</h1>
                        <p>Welcome to Natural Data! Our site is under construction, so this is just going to be filler -- like a lorem ipsum if you will. Please don't mind the mess!</p>
                    </div>
                </main>


                <div className="land2">
                    <div className="land2img">
                        <img src={polarBear} />
                    </div>
                </div>

                <h2>Meet our friends</h2>
                <div className="land3">
                    <div className="land3card"
                    onClick={this.handleCCL}>
                        <img src={cclLogo} />
                        <h3>Citizen's Climate Lobby</h3>
                    </div>
                    <div className="land3card"
                    onClick={this.handleNatureConservancy}>
                        <img src={natureConservancy} />
                        <h3>The Nature Conservancy</h3>
                    </div>
                    <div className="land3card"
                    onClick={this.handleWWF}>
                        <img src={wwfLogo} />
                        <h3>World Wildlife Fund</h3>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}


export default Landing