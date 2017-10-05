import React from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

import BasicTimeWindowView from './BasicTimeWindowView';


@observer
class MonthlyView extends BasicTimeWindowView {

  constructor(props) {
    super(props)
  }

  render() {
    return <h1>month View: {this.props.dateDisplayed.getDate().toString()}</h1>;
  }
}

export default MonthlyView;