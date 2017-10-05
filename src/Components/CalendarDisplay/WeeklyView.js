import React, {Component} from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

import DailyView from './DailyView';

@observer
class WeeklyView extends Component {

  render() {
    return <h1>week View: {this.props.dateDisplayed.getDate().toString()}</h1>
  }
}

export default WeeklyView;