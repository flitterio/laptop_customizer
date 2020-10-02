import React, {Component} from 'react';
import SummaryTotal from './SummaryTotal/SummaryTotal';

class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {this.props.summary}
           <SummaryTotal
           USCurrencyFormat={this.props.USCurrencyFormat}
           total={this.props.total} />
          </section>
        )
    }
}

export default MainSummary;