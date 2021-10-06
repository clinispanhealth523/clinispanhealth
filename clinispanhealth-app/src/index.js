import ReactDOM from 'react-dom';
import React from 'react';
import './signUp.css';
import SignUp from './components/signUp';



class Banner extends React.Component {
  render() {
    return (
      <div>
        <SignUp/>
      </div>

    )
  }
}


ReactDOM.render(<Banner />, document.getElementById("root"));