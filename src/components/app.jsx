import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleButtonClick() {
    this.setState({ name: 'Bob' });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <input type="text" value={name} onChange={e => this.handleNameChange(e.target.value)} />
        <button type="button" onClick={() => this.handleButtonClick()}>I am Bob</button>
        <Greeting name={name} />
      </div>
    );
  }
}

export default App;
