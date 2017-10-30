import React from 'react';

class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.closeTutorial = this.closeTutorial.bind(this)
  }

  closeTutorial() {
    this.props.history.push('/FindFriends');
  }

  render() {
    return (
        <addProfile className="modal">
          Profile
          <button onClick={this.props.prevScreen}>Back</button>
          <button onClick={this.closeTutorial}>Finish</button>
        </addProfile>
    )
  }
}

export default AddProfile;
