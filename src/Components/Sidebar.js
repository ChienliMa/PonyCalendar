import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

@observer
class SideBar extends Component {
  @observable calendars = [];

  constructor(props){
    super(props);
    this.calendars = props.calendars;
  }

  render() {
    return (
      <div style={{display:"block", width:"20%", float:"left", background:"yellow"}}>
        <h1>SIDEBAR</h1>
        <DateSelector></DateSelector>
        <CalendarList></CalendarList>
      </div>
    )
  }
}

class DateSelector extends Component {
  render() {
    return (
      <div>date selector</div>
    )
  }
}

class CalendarList extends  Component {
  render() {
    return (
      <div>calendar list</div>
    )
  }
}

export default SideBar;