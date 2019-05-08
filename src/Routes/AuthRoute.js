import React from '../../node_modules/react';
import decode from '../../node_modules/jwt-decode';
import { Route, Redirect } from '../../node_modules/react-router-dom';
// a function which checks user authentication
// and renders appropriate components.


const checkAuth = () => {

  // *************************** TBD ***********************************
  // TOKEN IS GENERATED FROM FLASK API 
  // AND PUT IN LOCALSTORAGE/ SESSIONSTORAGE by LoginForm's handleSubmit ( after fetching http response )

  // thereafter, in every other request, pass token and verify at server.
  // or just verify in client side.
  // delet token when logout().

  // check validity of token and refresh token
  // restrict access incase both are not found.
  const token = localStorage.getItem('jwtToken');
  const refreshToken = localStorage.getItem('jwtToken');

  if (!token || !refreshToken) {
    console.log(token)
    return false;
  }
  return true;
  // try {
  //   const { exp } = decode(refreshToken);
  //   // check expiration of refresh token
  //   console.log(exp);
  //   if (exp < new Date().getTime() / 1000) {
  //     // token expired 
  //     sessionStorage.removeItem('jwtToken');
  //     return false;
  //   }
  // }
  // catch (e) {
  //   return false;
  // }
  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth()
      ? (
        <Component {...props} />
      )
      : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)
export default AuthRoute; 