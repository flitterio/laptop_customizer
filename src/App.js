import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Options from './Options/Options';
import Features from './Features/Features';
import SummaryOption from './SummaryOption/SummaryOption'
import MainForm from './MainForm/MainForm';
import MainSummary from './MainSummary/MainSummary';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

 updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
      <Options 
        iH={itemHash} 
        item={item} 
        feature={feature} 
        name={slugify(feature)} 
        money={USCurrencyFormat}
        onChange = {e => this.updateFeature( feature,  item)} 
        checked={item.name === this.state.selected[feature].name}/>);
    });

      return (
        <Features feature={feature} featureHash={featureHash} options={options} />
      );
    }); 

      const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
      <SummaryOption 
        fH={featureHash} 
        feature={feature} 
        selectedOption={selectedOption} 
        money={USCurrencyFormat} />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm features={features} />
          <MainSummary
           summary={summary}
            USCurrencyFormat={USCurrencyFormat} 
            total={total}/>
        </main>
      </div>
    );
  }
}
export default App;
