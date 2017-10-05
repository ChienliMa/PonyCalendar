import React, {Component} from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

@observer
class DailyView extends Component {

  render() {
    return <h1>daily View: {this.props.dateDisplayed.getDate().toString()}</h1>;
  }
}

export default DailyView;