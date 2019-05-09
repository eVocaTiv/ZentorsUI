import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';
import '../style/toggleSwitch.css'

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isMentor: false,
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    userAuthenticatedFromAPI = (username, password) => {
        return (
            username === this.state.username
            &&
            password === this.state.password
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // **** TBD ****
        // fetch token from server api's /login. 


        // dummy tokens for testing.
        if (this.userAuthenticatedFromAPI("user", "password")) {
            localStorage.setItem('jwtToken', 'sample_JWT_Token');
            localStorage.setItem('refreshJWTToken', 'sample_JWT_REFRESH_Token');

            // update isLoggedIn in state.
            this.setState({
                ...this.state,
                isLoggedIn: true
            })
            this.props.history.push({
                pathname: "/dashboard",
                username: this.state.username
            });
            $('#loginInfoAlert').hide();
        }
        else {
            $('#loginInfoAlert').show();
        }
        // console.log("redirecting...");

        // pass user login props to dashboard!
        // use isMentor to display appropriate dashboard with name matching!

    }

    render() {
        return (
            <div>
                <form className="login-form">
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
                        className="login-input"
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <strong>Password</strong> <br /> <input
                        className="login-input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <br /><br /><br />
                    <button
                        className="login-input btn btn-info"
                        type="btn"
                        name="loginSubmitButton"
                        action="submit"
                        onKeyDown={this.handleSubmit}
                        onClick={this.handleSubmit} >
                        Login
                    </button>
                    <br /><br /><br /><br />
                    <div id="loginInfoAlert" className="alert alert-info collapse" role="alert">
                        Invalid username or password!
                       </div>
                </form>
            </div>
        )
    }
}
export default withRouter(LoginForm);
