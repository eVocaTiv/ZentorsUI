import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';


class RegisterForm extends Component {

    constructor() {
        super();
        this.state = {
            username  : "",
            password  : "",
            isMentor  : false, // DEFAULT is 'Mentee'
            isRegistrationSuccessful : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }
    handleChange = (event) => {
        const { name, value, type } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        // makes a call to the register API 
        if ( this.state.isRegistrationSuccessful ) {
            this.setState({
                ...this.state,
                isRegistrationSuccessful: true
            })
            $('#registerInfoAlert').hide();
        } else {
            this.setState({
                ...this.state,
                isRegistrationSuccessful: false
            })
            $('#registerInfoAlert').show();
        }   
        
    }

    render() {
        return (
            <div>
                <form className = "register-form">
                    <strong>Username</strong> <br /> <input
                        className   = "register-input"
                        type        = "text"
                        name        = "username"
                        value       = {this.state.username}
                        placeholder = "Username"
                        onChange    = {this.handleChange}
                    />
                    <br /><br />
                    <strong>Password</strong> <br /> <input
                        className   = "register-input"
                        type        = "password"
                        name        = "password"
                        value       = {this.state.password}
                        placeholder = "Password"
                        onChange    = {this.handleChange}
                    />
                    <br /><br />
                    <button
                        className   = "register-input"
                        type   = "btn"
                        name   = "registerSubmitButton"
                        action = "submit"
                        onKeyDown = {this.handleRegisterSubmit}
                        onClick   = {this.handleRegisterSubmit} >
                        Register
                    </button>
                    <br /><br /><br /><br />
                        <div id = "registerInfoAlert" className = "alert alert-info collapse" role = "alert">
                            Registered Successfully!..
                       </div>
                </form>
            </div>
        )
    }
}
export default withRouter(RegisterForm);
