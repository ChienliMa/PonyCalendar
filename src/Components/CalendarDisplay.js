import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import YearlyView from './YearlyView';
import DailyView from './DailyView';

@observer
class CalendarDisplay extends Component {
  @observable viewMode = '';
  render() {
    return (
      <div style={{display:"block", float:"right", width:"80%", background:"green"}}>
        <h1>calendar displayer</h1>
      </div>
    )
  }
}

export default  CalendarDisplay;