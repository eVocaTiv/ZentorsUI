import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

   logout = () => {
    console.log('logging out')
    localStorage.clear();
    this.props.history.push("/home");
}

  render = (props) => {
    const divStyle = {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#287799'
    };
    return (
      <div style = {divStyle}>
        <h1>Welcome {this.props.username} to the Dashboard!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default Dashboard