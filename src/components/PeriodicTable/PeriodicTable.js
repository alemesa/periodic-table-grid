import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import animate from '@jam3/gsap-promise';
import './PeriodicTable.css';
import styled from 'styled-components';
import colors from '../../util/colors';

console.log(colors);

class PeriodicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { className } = this.props;
    let processedClassName = classnames('PeriodicTable', className);
    let { elements, firstTable, secondTable } = this.props;
    console.log(this.props);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <div className="table mainTable">
          {firstTable.map(x => (
            <Element colors={colors[x.groupBlock]} element={x} className="element" key={x.symbol}>
              <span className="number">{x.atomicNumber}</span>
              <h3 className="symbol">{x.symbol}</h3>
              <h2 className="name">{x.name}</h2>
              <span className="mass">{x.atomicMass}</span>

              {/* <span> {x.atomicNumber}</span>
                <span> {x.symbol}</span>
                <span> {x.name} </span>
                <span> {x.atomicMass}</span>
                <span> {x.cpkHexColor} </span>
                <span> {x.electronicConfiguration} </span>
                <span> {x.electronegativity} </span>
                <span> {x.atomicRadius} </span>
                <span> {x.ionRadius} </span>
                <span> {x.vanDelWaalsRadius}</span>
                <span> {x.ionizationEnergy} </span>
                <span> {x.electronAffinity} </span>
                <span> {x.oxidationStates} </span>
                <span> {x.standardState} </span>
                <span> {x.bondingType} </span>
                <span> {x.meltingPoint}</span>
                <span> {x.boilingPoint} </span>
                <span> {x.density} </span>
                <span> {x.groupBlock} </span>
                <span> {x.yearDiscovered}</span> */}
            </Element>
          ))}
          <div className="white-space-1" />
          <div className="white-space-2" />
          <div className="white-space-3" />
          <div className="detach-1">57-71</div>
          <div className="detach-2">89-103</div>
        </div>
        <div className="table secondTable">
          {secondTable.map(x => (
            <Element colors={colors[x.groupBlock]} className="element" key={x.symbol}>
              <span className="number">{x.atomicNumber}</span>
              <h3 className="symbol">{x.symbol}</h3>
              <h2 className="name">{x.name}</h2>
              <span className="mass">{x.atomicMass}</span>
            </Element>
          ))}
          <div className="white-space-1" />
          <div className="white-space-2" />
        </div>
      </div>
    );
  }
}

PeriodicTable.propTypes = {
  className: PropTypes.string
};

PeriodicTable.defaultProps = {
  className: ''
};
export default PeriodicTable;

const Element = styled.div`
  background: ${props => props.colors.backgroundColor};
  color: ${props => props.colors.color};
`;
