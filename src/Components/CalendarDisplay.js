import React, { Component } from 'react';
import {observable, autorun}  from 'mobx';
import {observer} from 'mobx-react';

import Display from './CalendarDisplay/Display';
import ControlPanel from './CalendarDisplay/ControlPanel';

@observer
class CalendarDisplay extends Component {
  displayMode = observable('MonthlyView');

  constructor(props) {
    super(props);
    this.dateDisplayed = props.selectedDate.copy();
    this.lastSelectedDate = this.props.selectedDate.getDate().toString();
  }

  passiveSelectedDateSync = autorun(() => {
    let selectedDate = this.props.selectedDate.getDate();
    if (selectedDate.toString() !== this.lastSelectedDate) {
      this.dateDisplayed.setDate(selectedDate);
      this.lastSelectedDate = selectedDate.toString();
    }
  });

  render() {
    return (
      <div style={{display:"block", float:"right", width:"80%", background:"green"}}>
        <ControlPanel selectedDate={this.props.selectedDate}
                      dateDisplayed={this.dateDisplayed}
                      displayMode={this.displayMode}/>
        <Display calendars={this.props.user.calendars}
                 dateDisplayed={this.dateDisplayed}
                 displayMode={this.displayMode}/>
      </div>
    )
  }
}

export default  CalendarDisplay;