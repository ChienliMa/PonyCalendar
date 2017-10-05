import React from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

import DailyView from './DailyView';
import BasicTimeWindowView from './BasicTimeWindowView';

@observer
class WeeklyView extends BasicTimeWindowView {

  render() {
    return <h1>week View: {this.props.dateDisplayed.getDate().toString()}</h1>
  }
}

export default WeeklyView;