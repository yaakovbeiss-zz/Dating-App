import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  render() {
      return (
        <logout className="">
          <button onClick={this.handleClick}>Log out</button>
        </logout>
      )
    }
  }

export default Logout;
