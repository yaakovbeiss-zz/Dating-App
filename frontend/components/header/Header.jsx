import React from 'react';
import Logout from './LogoutContainer';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <logout className="">
          <Logout />
        </logout>
      )
    } else { return null }
  }
}

export default Header;
