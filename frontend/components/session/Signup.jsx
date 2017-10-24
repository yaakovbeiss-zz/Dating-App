import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      gender: '',
      month: '',
      day: '',
      year: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
    this.handleDayChange = this.handleDayChange.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  handleOptionChange(e) {
    this.setState({ gender: e.target.value})
  }

  handleMonthChange(e) {
    this.setState({ month: e.target.value })
  }

  handleDayChange(e) {
    this.setState({ day: e.target.value })
  }

  render() {
    return (
      <signup className="login-container">
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
              <select onChange={this.handleMonthChange}>
                <option value="">Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select onChange={this.handleDayChange}>
                <option value="">Day</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>

              <br/>
              <label onChange={this.handleOptionChange}>Male
                <input type="radio"
                  name="gender"
                  value="male"
                  className="login-input"
                />Female
                <input type="radio"
                  name="gender"
                  value="female"
                  className="login-input"
                />
              </label>
              <br/>
              <button onClick={this.handleSubmit}>Sign up</button>
          </form>
       </signup>
    )
  }
}

export default Signup;
