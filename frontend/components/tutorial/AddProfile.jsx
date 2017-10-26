import React from 'react';

class AddProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <addProfile className="modal">
          Profile
          <button onClick={this.props.prevScreen}>Back</button>
        </addProfile>
    )
  }
}

export default AddProfile;
