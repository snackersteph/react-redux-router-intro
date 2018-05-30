// @flow

// this async router will only load components when they are needed

import React, { Component } from 'react';
import Spinner from './Spinner';

// this is a HOC -> it monitors behavior
class AsyncRoute extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  props: {
    props: mixed,
    // this is a promise that returns an object with a default property, with a class of a react component
    // the stars are there because we dont know the props of the returning component
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  };
  component = null;
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

export default AsyncRoute;