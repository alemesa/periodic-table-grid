import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Title.css';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { className } = this.props;
    let processedClassName = classnames('Title', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <h2>The Periodic Table of the Elements</h2>
      </div>
    );
  }
}

Title.propTypes = {
  className: PropTypes.string
};

Title.defaultProps = {
  className: ''
};
export default Title;
