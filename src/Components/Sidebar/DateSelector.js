import React, { Component } from 'react';
import {observable, computed}  from 'mobx';
// import {observer} from 'mobx-react';
import './DateSelector.css';

class DateSelector extends Component {

  @observable currDate = new Date(2017,10,24);

  year() { return this.currDate.getFullYear(); }
  month() {return this.currDate.getMonth();}
  date() {return this.currDate.getDate();}
  // day() {return this.currDate.getDay();}

  renderHeader() {
    return (
      <div className='header'>
        <button className="pre">left</button>
        <span>{this.year()}</span>-<span>{this.month()}</span>-<span>{this.date()}</span>
        <button className="next">right</button>
      </div>
    )
  }

  renderDayname() {
    return  (
      <ul className="weekdays">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
    );
  }

  renderBody() {
    let date = new Date(this.currDate);
    let weeks = [];
    date.setDate(1);
    while (date.getDay() !== 0) date.setDate(date.getDate()-1);
    do {weeks.push(this.renderWeek(date))} while (date.getMonth() === this.month());
    return weeks
  }

  renderWeek(date)  {
    let week = [];
    for (let i = 0;i < 7;i+=1) {
      if (!(date>this.currDate || date<this.currDate)) {
        week.push(<li className='currDate'>{date.getDate()}</li>);
      } else if (date.getMonth() === this.month()) {
        week.push(<li className='currMonth'>{date.getDate()}</li>);
      } else {
        week.push(<li>{date.getDate()}</li>);
      }
      date.setDate(date.getDate() + 1);
    }
    return <ul className="days">{week}</ul>
  }

  render() {
    return (
      <div style={{background:"gray"}}>
        {this.renderHeader()}
        {this.renderDayname()}
        {this.renderBody()}
      </div>
    )
  }
}

export default DateSelector;