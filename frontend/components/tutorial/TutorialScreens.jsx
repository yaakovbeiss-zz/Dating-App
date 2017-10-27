import React from 'react';
import AddPic from './AddPicContainer';
import AddProfile from './AddProfile';

class TutorialScreens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
    this.nextScreen = this.nextScreen.bind(this)
    this.prevScreen = this.prevScreen.bind(this)
  }

  nextScreen() {
    this.setState({ index: this.state.index + 1})
  }

  prevScreen() {
    this.setState({ index: this.state.index - 1})
  }

  currentScreen() {
    if ( this.state.index === 0 ) {
      return <AddPic nextScreen={this.nextScreen}/>
    } else if ( this.state.index === 1 ){
      return <AddProfile prevScreen={this.prevScreen} />
    }
  }

  render() {

    return (
      <div className="modal-container" >
        {this.currentScreen()}
      </div>
    );
  }

};

export default TutorialScreens;
