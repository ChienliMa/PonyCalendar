import React, {Component} from 'react';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';

@observer
class AgendaView extends Component {
  @computed
  get display() {
    if (this.props.displayMode === "MonthlyView"){
      return <MonthlyView calendars={this.props.calendars}/>
    } else if (this.props.displayMode === "WeeklyView"){
      return <WeeklyView calendars={this.props.calendars}/>
    } else if (this.props.displayMode === "DailyView"){
      return <DailylyView calendars={this.props.calendars}/>
    } else if (this.props.displayMode === "AgendaView"){
      return <AgendaView calendars={this.props.calendars}/>
    }
  }

  render() {
    return <div>
        <h1>calendar display</h1>
        <h1>{this.props.selectedDate.getDate().toString()}</h1>
      {this.display}
    </div>
  }
}

export default AgendaView;