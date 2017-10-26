import React from 'react';
import TutorialScreens from '../tutorial/TutorialScreens';
import AddPic from '../tutorial/AddPic';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [AddPic, "two"],
    }

    this.removeItemHandler = this.removeItemHandler.bind(this)
  }

  screens() {
    return ( this.state.screens[0] )
  }

  removeItemHandler() {
    const newScreens = this.state.screens.slice(1)
    this.setState({ screens: newScreens })
  }

  render() {
    return (
      <welcome>
        Welcome
        <TutorialScreens />
      </welcome>
    )
  }
}

export default Welcome;
