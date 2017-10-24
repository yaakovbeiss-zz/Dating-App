import React from 'react';
import Login from './LoginContainer';
import SignUp from './SignUpContainer';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <loginSignupPage>
        <Login />
        <SignUp />
      </loginSignupPage>
    )
  }
}

export default LoginSignUp;
