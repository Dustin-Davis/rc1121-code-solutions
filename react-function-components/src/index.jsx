import React from 'react';
import ReactDOM from 'react-dom';

// function CustomButton(props) {
//   return <button>Click, Me!</button>;
// }

// ReactDOM.render(
//   <CustomButton />,
//   document.getElementById('root')
// );

class CustomButton extends React.Component {
  render() {
    return <button>Click, Me!</button>;
  }
}
const element = <CustomButton />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
