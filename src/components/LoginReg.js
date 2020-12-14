import React, { Component } from 'react';
import { Container, Button, InputLabel, Box, Input } from '@material-ui/core';
import './../style/LoginReg.css'

class LoginReg extends Component {
    constructor(props){
        super(props)
        this.state = {
            registerUsername: "",
            registerPassword: "",
            loginUsername: "",
            loginPassword: ""
        }
    }



    setRegUsername = (e) => {
        this.setState({registerUsername: e.target.value})
    }
    setRegPassword = (e) => {
        this.setState({registerPassword: e.target.value})
    }
    setLoginUsername = (e) => {
        this.setState({loginUsername: e.target.value})
    }
    setLoginPassword = (e) => {
        this.setState({loginPassword: e.target.value})
    }


    handleRegister = (e) => {
        console.log(e)
        window.location('http://localhost:3000/')
    }

    handleLogin = (e) => {
        console.log(e)
    }



    render() { 
        return (
            <div className="mainBox">
                <Container>
                    <Box>
                        <h1>Register</h1>
                        <form onSubmit={this.handleRegister}>
                            <Input
                            required
                            type="string"
                            placeholder="Create a username..."
                            onChange={this.setRegUsername}>
                            </Input>
                            <Input
                            required
                            type="string"
                            placeholder="Create a password..."
                            onCHange={this.setRegPassword}>
                            </Input>
                            <Button
                            type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                        <h1>Login</h1>
                        <form onSubmit={this.handleLogin}>
                            <Input
                            required
                            type="string"
                            placeholder="Your username..."
                            onChange={this.setLoginUsername}>
                            </Input>
                            <Input
                            required
                            type="string"
                            placeholder="Your password..."
                            onChange={this.setLoginPassword}>
                            </Input>
                            <Button
                            type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Container>
            </div>
        );
    }
}
 
export default LoginReg;