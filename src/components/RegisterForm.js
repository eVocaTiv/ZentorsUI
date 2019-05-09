import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';

class RegisterForm extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isMentor: false, // DEFAULT is 'Mentee'
            isRegistrationSuccessful: true,
            registeredUser: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleChange = (event) => {
        const { name, value, type } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleToggle = (event) => {
        this.setState({
            ...this.state,
            isMentor: !this.state.isMentor
        })
    }
    handleRegisterSubmit = (event) => {
        event.preventDefault();
        // makes a call to the register API 
        if (this.state.isRegistrationSuccessful) {
            $('#registerInfoAlert').show();
            this.setState({
                ...this.state,
                registeredUser: this.state.username,
                username: "",
                password: "",
                isRegistrationSuccessful: true
            })
        } else {
            $('#registerInfoAlert').false();
            this.setState({
                ...this.state,
                registeredUser: "",
                username: "",
                password: "",
                isRegistrationSuccessful: false
            })
        }

    }

    render() {
        return (
            <div>
                <form className="register-form">
                    <div>
                        <label className="switch">
                            <input
                                checked={this.state.isMentor}
                                onChange={this.handleToggle} type="checkbox" />
                            <span className="slider round">{this.state.isMentor ? 'Mentor' : 'Mentee'}</span>
                        </label>
                    </div>
                    <br /><br />
                    <strong>Username</strong> <br /> <input
                        className="register-input"
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <strong>Password</strong> <br /> <input
                        className="register-input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <br /><br /><br />
                    <button
                        className="register-input btn btn-info"
                        type="btn"
                        name="registerSubmitButton"
                        action="submit"
                        onKeyDown={this.handleRegisterSubmit}
                        onClick={this.handleRegisterSubmit} >
                        Register
                    </button>
                    <br /><br /><br /><br />
                    <div id="registerInfoAlert" className="alert alert-info collapse" role="alert">
                        Registered {this.state.registeredUser} Successfully!..
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(RegisterForm);
