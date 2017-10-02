import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';


@observer
class CalendarControlPannel extends Component {
  render() {
    return(
      <div style={{display:'block', clear:'both', width:"80%", float:"right", marginLeft:"20%", background:"blue"}}>
        <div style={{display:"block", float:"left"}}>
          <button>today</button>
          <button>left </button>
          <button>right</button>
        </div>
        <div style={{display:'block', float:"right"}}>
          <button>year</button>
          <button>month</button>
          <button>week</button>
          <button>day</button>
        </div>
      </div>
    )
  }
}

export default CalendarControlPannel;