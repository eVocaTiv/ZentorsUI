import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      username: "", 
      // USERNAME PASSED FROM LOGIN USING 'MATCH' 
      // => ALL OTHER STATE VARIABLES FETCHED.
      isMentor: false
    }
  }

  componentDidMount() {
    // If username not in props
    // then use JWT token to retrieve username from backend
    // then map it with 'match'
    //  *** TO UPDATE STATE VARIABLES FROM DB EVERYTIME COMPONENT MOUNTS.
    // PASS USERNAME TO DB AND FETCH DATA.
    // 
  }

   logout = () => {
    console.log('logging out')
    localStorage.clear();
    this.props.history.push("/home");
}

  render = (props) => {
    const divStyle = {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#287799',
    };
    return (
      <div style={divStyle}>
        <h1>Welcome {this.props.location.username} to the Dashboard!</h1>
        <div class="logout-container">
          <button class="login-input btn btn-info" onClick={this.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Dashboard