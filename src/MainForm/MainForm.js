import React, {Component} from 'react';
import slugify from 'slugify';
import Options from './Options/Options';
import Features from './Features/Features';

class MainForm extends Component {
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
            money={this.props.money}
            onChange = {e => this.updateFeature( feature,  item)} 
            checked={item.name === this.state.selected[feature].name}/>);
        });
    
          return (
            <Features feature={feature} featureHash={featureHash} options={options} />
          );
        });
}
}

export default MainForm;