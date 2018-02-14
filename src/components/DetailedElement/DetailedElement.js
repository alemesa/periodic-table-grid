import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './DetailedElement.css';
import pt from 'periodic-table';
import Element from '../Element/Element';
import colors from '../../util/colors';
import styled from 'styled-components';

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
        <Primary className="main-data" backgroundColor={colors[element.groupBlock]}>
          {element.atomicNumber && <h4>Atomic Number: {element.atomicNumber}</h4>}
          {element.symbol && <h4>Symbol: {element.symbol}</h4>}
          {element.name && <h4>Name: {element.name}</h4>}
          {element.atomicMass && <h4>Atomic Mass: {element.atomicMass}</h4>}
          {element.groupBlock && <h4>GroupBlock: {element.groupBlock}</h4>}
          {element.atomicRadius && <h4>Atomic Radius: {element.atomicRadius}</h4>}
        </Primary>
        <Primary className="secondary-data" backgroundColor={colors[element.groupBlock]}>
          {element.cpkHexColor && <h4>cpk Hex Color: {element.cpkHexColor}</h4>}
          {element.electronicConfiguration && <h4>Electronic Configuration: {element.electronicConfiguration}</h4>}
          {element.electronegativity && <h4>Electronegativity: {element.electronegativity}</h4>}
          {element.ionRadius && <h4>Ion Radius: {element.ionRadius}</h4>}
          {element.vanDelWaalsRadius && <h4>VanDelWaals Radius: {element.vanDelWaalsRadius}</h4>}
          {element.ionizationEnergy && <h4>IonizationEnergy: {element.ionizationEnergy}</h4>}
          {element.electronAffinity && <h4>ElectronAffinity: {element.electronAffinity}</h4>}
        </Primary>
        <Primary className="extra-data" backgroundColor={colors[element.groupBlock]}>
          {element.oxidationStates && <h4>OxidationStates: {element.oxidationStates}</h4>}
          {element.standardState && <h4>StandardState: {element.standardState}</h4>}
          {element.bondingType && <h4>BondingType: {element.bondingType}</h4>}
          {element.meltingPoint && <h4>MeltingPoint: {element.meltingPoint}</h4>}
          {element.boilingPoint && <h4>BoilingPoint: {element.boilingPoint}</h4>}
          {element.density && <h4>Density: {element.density}</h4>}
          {element.yearDiscovered && <h4>YearDiscovered: {element.yearDiscovered}</h4>}
        </Primary>
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

const Primary = styled.div`
  background: ${props => props.backgroundColor};
  column-count: 2;
  column-gap: 0.5rem;
  box-sizing: border-box;
  color: #0f465c;
  margin: 0.5rem 3rem;
  padding: 2rem;
  font-size: 0.8rem;
`;
