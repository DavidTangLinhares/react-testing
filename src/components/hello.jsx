// src/components/hello.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    return (
      <div>Hello {this.props.name}, how are you?</div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default Hello;
