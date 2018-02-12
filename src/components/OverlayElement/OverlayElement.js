import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './OverlayElement.css';

class OverlayElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { className } = this.props;
    let processedClassName = classnames('OverlayElement', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <h2></h2>
      </div>
    );
  }
}

OverlayElement.propTypes = {
  className: PropTypes.string
};

OverlayElement.defaultProps = {
  className: ''
};
export default OverlayElement;
