import React, {Component} from 'react';
import './Options.css';

class Options extends Component {
    render() {
        const {iH, name, money, item, onChange, checked} = this.props;
return (
    <div key={iH} className="feature__item">
            <input
              type="radio"
              id={iH} //this.props.iH
              className="feature__option"
              name={name}
              checked={checked}
              onChange={onChange}
            />
            <label htmlFor={ iH} className="feature__label">
              { item.name} ({money.format( item.cost)})
            </label>
          </div>
)}
}

export default Options;