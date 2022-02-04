import React from 'react';

class ValidatedInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      password: '',
      message: 'A password is required'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
    const length = value.length;
    if (length === 0) {
      this.setState({
        status: false,
        message: 'A password is required'
      });
    } else if (length >= 8) {
      this.setState({
        status: true,
        message: ''
      });
    } else if (length < 8 && length > 0) {
      this.setState({
        status: false,
        message: 'Password is too short'
      });
    }
  }

  render() {
    return (
      <form>
        <div className='container'>
          <label className='title' htmlFor='password'>Password</label>
          <div className='box'>
            <input type="password" onChange={this.handleChange} name='password' id='password'/>
            <i className={this.state.status ? 'fas fa-check text-green' : 'fas fa-times text-red'}></i>
          </div>
          <div className='notification'>
            <p className='message'>{this.state.message}</p>
          </div>
        </div>
      </form>
    );
  }
}

export default ValidatedInputs;
