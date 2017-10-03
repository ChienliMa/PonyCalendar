import React, { Component } from 'react';
import {action, computed}  from 'mobx';
import {observer} from 'mobx-react';

@observer
class CalendarList extends  Component {
  render() {
    var calendarList = []
    for (var calendar of this.props.calendars){
      calendarList.push(<Calendar key={calendar.name.get()} calendar={calendar}/>);
    }
    return (
      <div>
        <h2>Calendar selector</h2>
        <ul>
          {calendarList}
        </ul>
      </div>

    )
  }
}

@observer
class Calendar extends  Component {
  @action
  onClick() {
    this.props.calendar.visible.set(!this.props.calendar.visible.get());
  }

  @computed get color() {
    if (this.props.calendar.visible.get()) {
      return this.props.calendar.color.get();
    }
    return "white";
  }

  render() {
    return <li style={{color:this.color, listStyle:"square inside", float:"left", fontSize: "170%"}}
               onClick={this.onClick.bind(this)}>
      <span style={{color:"black",fontSize: "70%"}}>
        {this.props.calendar.name.get()}
      </span>
      </li>
  }
}

export default CalendarList;