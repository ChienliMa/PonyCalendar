import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';

@observer
class ControlPanel extends Component {
  render() {
    return(
      <div style={{display:'block',width:"100%", background:"blue"}}>
        <div style={{display:"block", float:"left"}}>
          <button>Today</button>
          <button> left </button>
          <button> right </button>
        </div>
        <div style={{display:'block', float:"right"}}>
          <button onClick={()=>{this.props.displayMode.set("AgendaView")}}>Agenda</button>
          <button onClick={()=>{this.props.displayMode.set("DailyView")}}>Day</button>
          <button onClick={()=>{this.props.displayMode.set("WeeklyView")}}>Week</button>
          <button onClick={()=>{this.props.displayMode.set("MonthlyView")}}>Month</button>
        </div>
      </div>
    )
  }
}

export default ControlPanel;