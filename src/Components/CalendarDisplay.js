import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

import Display from './CalendarDisplay/Display';
import ControlPanel from './CalendarDisplay/ControlPanel';

@observer
class CalendarDisplay extends Component {
  @observable displayMode = 'monthly';

  constructor(props) {
    super(props);
    this.dateDisplayed = props.selectedDate.copy();
  }

  render() {
    return (
      <div style={{display:"block", float:"right", width:"80%", background:"green"}}>
        <ControlPanel selectedDate={this.props.selectedDate}
                      dateDisplayed={this.dateDisplayed}
                      displayMode={this.displayMode}/>
        <Display selectedDate={this.props.selectedDate}
                 calendars={this.props.user.calendars}
                 dateDisplayed={this.dateDisplayed}
                 displayMode={this.displayMode}/>
      </div>
    )
  }
}

export default  CalendarDisplay;