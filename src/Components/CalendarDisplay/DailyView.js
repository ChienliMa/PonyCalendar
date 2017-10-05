import React from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

import BasicTimeWindowView from './BasicTimeWindowView';

@observer
class DailyView extends BasicTimeWindowView {

  render() {
    return <h1>daily View: {this.props.dateDisplayed.getDate().toString()}</h1>;
  }
}

export default DailyView;