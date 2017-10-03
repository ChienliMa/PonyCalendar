import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

import MonthlyView from './CalendarDisplay/MonthlyView';
import WeeklyView from './CalendarDisplay/WeeklyView';
import YearlyView from './CalendarDisplay/YearlyView';
import DailyView from './CalendarDisplay/DailyView';

@observer
class CalendarDisplay extends Component {
  @observable viewMode = '';
  render() {
    return (
      <div style={{display:"block", float:"right", width:"80%", background:"green"}}>
        <h1>calendar display</h1>
        <h1>{this.props.selectedDate.getDate().toString()}</h1>
      </div>
    )
  }
}

export default  CalendarDisplay;