import React, {Component} from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

@observer
class MonthlyView extends Component {
  render() {
    return <h1>month View: {this.props.dateDisplayed.getDate().toString()}</h1>;
  }
}

export default MonthlyView;