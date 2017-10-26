import React from 'react';

class AddPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <addPic className="modal">
          Add Pic
          <button onClick={this.props.nextScreen}>Next</button>
        </addPic>
    )
  }
}

export default AddPic;
