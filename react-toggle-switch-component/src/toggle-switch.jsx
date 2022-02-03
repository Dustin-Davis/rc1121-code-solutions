import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className='mainContainer'>
        <div onClick={this.handleClick} className={this.state.isClicked ? 'containerOn' : 'container'}>
          <div className={this.state.isClicked ? 'circleOn' : 'circle'}>
          </div>
          <div className='status'>{this.state.isClicked ? 'ON' : 'OFF'}</div>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
