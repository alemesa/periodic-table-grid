import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Legend.css';
import colors from '../../util/colors';
import styled from 'styled-components';

class Legend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let data = Object.entries(colors);
    console.log(data);
    //   this.values = Object.values(colors);
  }

  render() {
    let { className } = this.props;
    let processedClassName = classnames('Legend', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        {Object.entries(colors).map(color => (
          <div className="single-color">
            <Circle color={color[1]} />
            <Title>{color[0]}</Title>
          </div>
        ))}
      </div>
    );
  }
}

Legend.propTypes = {
  className: PropTypes.string
};

Legend.defaultProps = {
  className: ''
};
export default Legend;

const Circle = styled.div`
  background: ${props => props.color};
  color: white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.div`
  color: white;
  margin-left: 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
`;
