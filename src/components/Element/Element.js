import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Element.css';
import styled from 'styled-components';

class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnClick = event => {
    this.props.passUp(event);
  };

  render() {
    let { className, atomicNumber, symbol, name, atomicMass, groupBlock, backgroundColor } = this.props;
    let processedClassName = classnames('Element', className);
    return (
      <StyledElement
        onClick={this.handleOnClick.bind(null, [atomicNumber, groupBlock])}
        backgroundColor={backgroundColor}
        className={processedClassName}
        ref={c => (this.container = c)}>
        <span className="number">{atomicNumber}</span>
        <h3 className="symbol">{symbol}</h3>
        <h2 className="name">{name}</h2>
        <span className="mass">{atomicMass}</span>
      </StyledElement>
    );
  }
}

Element.propTypes = {
  className: PropTypes.string
};

Element.defaultProps = {
  className: ''
};
export default Element;

const StyledElement = styled.div`
  background: ${props => props.backgroundColor};
  color: #0f465c;
`;
