import React, { Component } from 'react';
import Title from './components/Title/Title';
import PeriodicTable from './components/PeriodicTable/PeriodicTable';
import DetailedElement from './components/DetailedElement/DetailedElement';
import pt from 'periodic-table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }
  componentWillMount() {
    this.elements = pt.all();
    this.firstTable = this.elements.filter(
      p => p.atomicNumber <= 56 || (p.atomicNumber >= 72 && p.atomicNumber <= 88) || p.atomicNumber >= 104
    );
    this.secondTable = this.elements.filter(
      p => (p.atomicNumber >= 57 && p.atomicNumber <= 71) || (p.atomicNumber >= 89 && p.atomicNumber <= 103)
    );
  }

  render() {
    return (
      <div className="App">
        <Title />
        <PeriodicTable firstTable={this.firstTable} secondTable={this.secondTable} />
      </div>
    );
  }
}

export default App;
