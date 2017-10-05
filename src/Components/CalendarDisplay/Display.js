import React, {Component} from 'react';
import {computed} from 'mobx';
import {observer} from 'mobx-react';

import MonthlyView from './MonthlyView';
import WeeklyView from './WeeklyView';
import DailyView from './DailyView';
import AgendaView from './AgendaView';

@observer
class Display extends Component {

  @computed get displayMode(){
    return this.props.displayMode.get();
  }

  @computed
  get display() {
    if (this.displayMode === "MonthlyView"){
      return <MonthlyView calendars={this.props.calendars}
                          dateDisplayed={this.props.dateDisplayed}/>
    } else if (this.displayMode === "WeeklyView"){
      return <WeeklyView calendars={this.props.calendars}
                         dateDisplayed={this.props.dateDisplayed}/>
    } else if (this.displayMode === "DailyView"){
      return <DailyView calendars={this.props.calendars}
                        dateDisplayed={this.props.dateDisplayed}/>
    } else if (this.displayMode === "AgendaView"){
      return <AgendaView calendars={this.props.calendars}/>
    }
  }

  render() {
    return <div>
      <h1>calendar display</h1>
      {this.display}
    </div>
  }
}

export default Display;