import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Button } from '@material-ui/core';
import './../style/Footer.css'

class Footer extends Component {
    render() { 
        return(
            <div className="footer">
                <div className="footerLinks">
                    <p>This is where</p>
                    <p>some more external links</p>
                    <p>may go.</p>
                </div>
                <div className="footerContact">
                    <p>This is where</p>
                    <p>some contact info</p>
                    <p>may go.</p>
                </div>
                <div className="footerSocial">
                    <p>This is where</p>
                    <p>some social media links</p>
                    <p>may go.</p>
                </div>
            </div>
        );
    }
}
 
export default Footer;