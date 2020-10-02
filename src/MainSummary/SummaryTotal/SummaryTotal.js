import React, {Component} from 'react';

class SummaryTotal extends Component {
    render(){
        return(
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {this.props.USCurrencyFormat.format(this.props.total)}
            </div>
          </div>
        )
    }
    
}

export default SummaryTotal;