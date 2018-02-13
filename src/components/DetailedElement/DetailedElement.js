import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './DetailedElement.css';
import pt from 'periodic-table';
import Element from '../Element/Element';
import colors from '../../util/colors';

class DetailedElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { className, element } = this.props;

    let processedClassName = classnames('DetailedElement', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <Element
          backgroundColor={colors[element.groupBlock]}
          atomicNumber={element.atomicNumber}
          symbol={element.symbol}
          name={element.name}
          atomicMass={element.atomicMass}
          groupBlock={element.groupBlock}
        />
        {/* <span> {element.atomicNumber}</span>
        <span> {element.symbol}</span>
        <span> {element.name} </span>
        <span> {element.atomicMass}</span>
        <span> {element.cpkHexColor} </span>
        <span> {element.electronicConfiguration} </span>
        <span> {element.electronegativity} </span>
        <span> {element.atomicRadius} </span>
        <span> {element.ionRadius} </span>
        <span> {element.vanDelWaalsRadius}</span>
        <span> {element.ionizationEnergy} </span>
        <span> {element.electronAffinity} </span>
        <span> {element.oxidationStates} </span>
        <span> {element.standardState} </span>
        <span> {element.bondingType} </span>
        <span> {element.meltingPoint}</span>
        <span> {element.boilingPoint} </span>
        <span> {element.density} </span>
        <span> {element.groupBlock} </span>
        <span> {element.yearDiscovered}</span> */}
      </div>
    );
  }
}

DetailedElement.propTypes = {
  className: PropTypes.string
};

DetailedElement.defaultProps = {
  className: ''
};
export default DetailedElement;
