import React, {Component} from 'react';
import './Features.css'
//import Options from './Options/Options';

class Features extends Component{
render () {
    const {feature, featureHash, options} = this.props;
    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
}
}
export default Features;
