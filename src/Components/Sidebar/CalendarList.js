import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';


class CalendarList extends  Component {
  calendars = [1,2,3,4,5]

  render() {
    var calendarList = []
    for (var calendar of this.calendars) calendarList.push(<li>Calendar{calendar}</li>);
    return (
      <div>
        Calendar selector
        <ul>
          {calendarList}
        </ul>
      </div>

    )
  }
}

export default CalendarList;