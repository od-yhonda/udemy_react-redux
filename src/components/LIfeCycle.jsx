import React, { Component } from 'react';

class LIfeCycle extends Component {
  constructor(props) {
    // eslint-disable-next-line no-console
    console.log('call：constructor');
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillMount');
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('call：componentDidMount');
  }

  componentWillReceiveProps() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillUpdate');
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log('call：componentDidUpdate');
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('call：componentWillUnmount');
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('call：render');

    return (
      <div className="app">
        LIfeCycleの確認用
      </div>
    );
  }
}

export default LIfeCycle;
