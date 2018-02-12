import React, { Component } from 'react';
import PeriodicTable from './components/PeriodicTable/PeriodicTable';
import OverlayElement from './components/OverlayElement/OverlayElement';
import pt from 'periodic-table';

class App extends Component {
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
        <PeriodicTable elements={this.elements} firstTable={this.firstTable} secondTable={this.secondTable} />
        <OverlayElement />
      </div>
    );
  }
}

export default App;
