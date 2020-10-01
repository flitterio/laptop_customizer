import './SummaryOption.css';
 import React, {Component} from 'react';

 class SummaryOption extends Component{
     render() {
         const {fH, feature, selectedOption, money} = this.props;
    return (
        <div className="summary__option" key={fH}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {money.format(selectedOption.cost)}
          </div>
        </div>
      );
    }
}

 // Custmomize summary Option side


export default SummaryOption;