import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TutorialScreens from '../tutorial/TutorialScreens';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if ( !nextProps.userProfile.id ) {
      this.props.history.push('/tutorial');
    }
  }

  componentDidMount() {
    this.props.requestUserProfile(this.props.currentUser.id)
  }

  render() {
    return (
      <welcome>
        Welcome
        <Switch>
          <Route path="/tutorial" component={TutorialScreens} />

        </Switch>
      </welcome>
    )
  }
}

export default Welcome;
