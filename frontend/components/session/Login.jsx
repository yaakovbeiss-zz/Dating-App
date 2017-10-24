import React from 'react';

class Login extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       email: '',
       password: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  render() {
  return (
    <login className="login-container">
        <form onSubmit={this.handleSubmit} className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <button onClick={this.handleSubmit}>Log In</button>
        </form>
     </login>
   );
  }
}

export default Login;
