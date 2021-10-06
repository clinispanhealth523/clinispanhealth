import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
    </div>
  );
}

class Banner extends React.Component {
  render() {
    return (
      <h1>Hello world!</h1>
    )
  }
}

export default App;

ReactDOM.render(<Banner />, document.getElementById("root"));