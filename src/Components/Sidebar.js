import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';
import DateSelector from "./Sidebar/DateSelector";
import CalendarList from "./Sidebar/CalendarList";

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
        <h4>pick a day</h4>
        <DateSelector selectedDate={this.props.selectedDate}></DateSelector>
        <CalendarList calendars={this.props.user.calendars}></CalendarList>
      </div>
    )
  }
}



export default SideBar;