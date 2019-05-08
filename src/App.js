import React from 'react';
import LoginAndSignup from './components/LoginAndSignup';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';
import { BrowserRouter, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AuthRoute from './Routes/AuthRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="main-container">
          <Header />
          <Route path="/" exact strict render={
            props =>
              <Redirect to={{ pathname: '/home' }} />
          } />
          <Route path="/home" exact strict component={LoginAndSignup} />
          {/* pass user props to dashboard */}
          <AuthRoute path="/dashboard" exact strict component={Dashboard} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
