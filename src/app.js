// app.js
console.log('ENTRY - app.js file!');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, world!</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));