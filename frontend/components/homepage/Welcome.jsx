import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TutorialScreens from '../tutorial/TutorialScreens';
import Friends from '../friends/Friends';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if ( this.props.userProfile.id !== prevProps.userProfile.id && !this.props.userProfile.id) {
      this.props.history.push('/tutorial')
    }
  }

  componentDidMount() {
    this.props.requestUserProfile(this.props.currentUser.id)
    this.props.requestFriendships();
  }

  render() {

    return (
      <welcome>
        Welcome {this.props.currentUser.first_name}
        <Switch>
          <Route path="/tutorial" component={TutorialScreens} />
          <Friends nodes={nodes} links={links} friends={this.props.friendships}/>
        </Switch>
      </welcome>
    )
  }
}

const nodes = [];
const nodeCount = 100;
for (let i = 0; i < 100; i++) {
  nodes.push({
  	r: (Math.random() * 5 ) + 2,
    x: 0,
    y: 0
  });
}

const links = [];
for (let i = 0; i < nodeCount; i++) {
  let target = 0;
  do {
    target = Math.floor(Math.random() * nodeCount);
  } while(target == i)
  links.push({
    source: i,
    target
  });
}

export default Welcome;
