import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class ControlPanel extends Component {
  toToday(){
    this.props.dateDisplayed.setDate(new Date());
  }

  get displayMode () {
    return this.props.displayMode.get();
  }

  previousTimeWindow() {
    let currWindow = this.props.dateDisplayed.getDate();
    if (this.displayMode === "MonthlyView") {
      currWindow.setDate(1); // prevent month swithing problem
      currWindow.setMonth(currWindow.getMonth() - 1);
    } else if (this.displayMode === "WeeklyView") {
      currWindow.setDate(currWindow.getDate() - 7);
    } else if (this.displayMode === "DailyView") {
      currWindow.setDate(currWindow.getDate() - 1);
    }
    this.props.dateDisplayed.setDate(currWindow);
    console.log(this.props.dateDisplayed.getDate().toString());
  }

  nextTimeWindow() {
    let currWindow = this.props.dateDisplayed.getDate();
    if (this.displayMode === "MonthlyView") {
      currWindow.setDate(1); // prevent month swithing problem
      currWindow.setMonth(currWindow.getMonth() + 1);
    } else if (this.displayMode === "WeeklyView") {
      currWindow.setDate(currWindow.getDate() + 7);
    } else if (this.displayMode === "DailyView") {
      currWindow.setDate(currWindow.getDate() + 1);
    }
    this.props.dateDisplayed.setDate(currWindow);
  }

  render() {
    return(
      <div style={{display:'block',width:"100%", background:"blue"}}>
        <div style={{display:"block", float:"left"}}>
          <button onClick={this.toToday.bind(this)}>Today</button>
          <button onClick={this.previousTimeWindow.bind(this)}> left </button>
          <button onClick={this.nextTimeWindow.bind(this)}> right </button>
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