import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import animate from '@jam3/gsap-promise';
import './PeriodicTable.css';
import Element from '../Element/Element';
import Legend from '../Legend/Legend';
import colors from '../../util/colors';
import pt from 'periodic-table';
import DetailedElement from '../DetailedElement/DetailedElement';

class PeriodicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      id: 1,
      element: {}
    };
    this.columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    this.rows = [1, 2, 3, 4, 5, 6, 7];
  }

  passUp = async event => {
    let toggleType = this.state.type === event[1] ? '' : event[1];
    let toggleId = this.state.id === event[0] ? '' : event[0];
    let element = toggleId && pt.numbers[toggleId];
    await this.setState({
      type: toggleType,
      id: toggleId,
      element: element
    });
  };

  render() {
    let { className, getElement } = this.props;
    let { type } = this.state;
    let processedClassName = classnames('PeriodicTable', className);
    let { firstTable, secondTable } = this.props;

    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <div className="table mainTable">
          {firstTable.map(x => (
            <Element
              className={`${x.groupBlock === type ? 'active' : ''}`}
              passUp={this.passUp}
              backgroundColor={colors[x.groupBlock]}
              atomicNumber={x.atomicNumber}
              symbol={x.symbol}
              name={x.name}
              atomicMass={x.atomicMass}
              groupBlock={x.groupBlock}
            />
          ))}
          <div className="white-space-1" />
          <h1 className="type-of">{this.state.type}</h1>
          <Legend />
          {this.state.element && <DetailedElement element={this.state.element} />}
          <div className="white-space-2" />
          <div className="white-space-3" />
          <div className="detach-1">57-71</div>
          <div className="detach-2">89-103</div>
        </div>
        <div className="table secondTable">
          {secondTable.map(x => (
            <Element
              className={`${x.groupBlock === type ? 'active' : ''}`}
              passUp={this.passUp}
              backgroundColor={colors[x.groupBlock]}
              atomicNumber={x.atomicNumber}
              symbol={x.symbol}
              name={x.name}
              atomicMass={x.atomicMass}
              groupBlock={x.groupBlock}
            />
          ))}
          <div className="white-space-1" />
          <div className="white-space-2" />
          <div className="columns-count">{this.columns.map(x => <div>{x}</div>)}</div>
          <div className="rows-count">{this.rows.map(x => <div>{x}</div>)}</div>
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
