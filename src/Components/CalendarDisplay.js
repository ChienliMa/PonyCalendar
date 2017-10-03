import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

import Display from './CalendarDisplay/Display';
import ControlPanel from './CalendarDisplay/ControlPanel';

@observer
class CalendarDisplay extends Component {
  @observable viewMode = 'monthly';
  render() {
    return (
      <div style={{display:"block", float:"right", width:"80%", background:"green"}}>
        <Display selectedDate={this.props.selectedDate}
                 calendars={this.props.user.calendars}
                 viewMode={this.viewMode}/>

        <ControlPanel selectedDate={this.props.selectedDate} viewMode={this.viewMode}/>

        <h1>calendar display</h1>
        <h1>{this.props.selectedDate.getDate().toString()}</h1>
      </div>
    )
  }
}

export default  CalendarDisplay;