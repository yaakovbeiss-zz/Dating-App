import React from 'react';
import merge from 'lodash/merge';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      gender: '',
      month: '',
      day: '',
      year: '',
      birthday: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
    this.handleDayChange = this.handleDayChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  validateEmail() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const birthday = new Date(`${this.state.year + '/' + this.state.month + '/' + this.state.day}`);

    const user = merge({}, this.state, {birthday});
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

  handleYearChange(e) {
    this.setState({ year: e.target.value })
  }

  errors() {
    return (
      this.props.errors
    )
  }

  render() {
    return (
      <signup className="login-container">
        {this.errors()}
          <form onSubmit={this.handleSubmit} className="login-form">
              <br/>
              <label>
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className=""
                  placeholder="First name"
                />
              </label>
              <br/>
              <label>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className=""
                  placeholder="Last name"
                />
              </label>
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
              <select onChange={this.handleYearChange}>
                <option value="">Year</option>
                <option value="00">2000</option>
                <option value="99">1999</option>
                <option value="98">1998</option>
                <option value="97">1997</option>
                <option value="96">1996</option>
                <option value="95">1995</option>
                <option value="94">1994</option>
                <option value="93">1993</option>
                <option value="92">1992</option>
                <option value="91">1991</option>
                <option value="90">1990</option>
                <option value="89">1989</option>
                <option value="88">1988</option>
                <option value="87">1987</option>
                <option value="86">1986</option>
                <option value="85">1985</option>
                <option value="84">1984</option>
                <option value="83">1983</option>
                <option value="82">1982</option>
                <option value="81">1981</option>
              </select>

              <br/>
              <label onChange={this.handleOptionChange}>Male
                <input type="radio"
                  name="gender"
                  value="male"
                  className=""
                />Female
                <input type="radio"
                  name="gender"
                  value="female"
                  className=""
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
