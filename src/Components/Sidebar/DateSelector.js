import React, { Component } from 'react';
import {observable, computed, action}  from 'mobx';
import {observer} from 'mobx-react';
import './css/DateSelector.css';

@observer
class DateSelector extends Component {

  currDate = new Date();
  @observable yearDisplayed;
  @observable monthDisplayed;
  @observable selectedDate;

  constructor(props){
    super(props);

    this.currDate = new Date();
    this.selectedDate = props.selectedDate;
    this.dateDisplayed = this.selectedDate.copy();
    this.dateDisplayed.date.set(1);
  }

  renderHeader() {
    return (
      <div className='header'>
        <button className="pre" onClick={this.dateDisplayed.toPreviousMonth.bind(this.dateDisplayed)}>left</button>
        <span>{this.dateDisplayed.year.get()}-{this.dateDisplayed.month.get()}</span>
        <button className="next" onClick={this.dateDisplayed.toNextMonth.bind(this.dateDisplayed)}>right</button>
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
    let days = [];
    let date = this.dateDisplayed.getDate();

    while (date.getDay() !== 0) date.setDate(date.getDate()-1);
    let monthDisplayed = this.dateDisplayed.month.get()
    do {
      for (let i = 0;i < 7;i+=1) {
        days.push(<DateCell key={date.toString()} date={date.toString()}
                            selectedDate={this.selectedDate} dateDisplayed={this.dateDisplayed}/>);
        date.setDate(date.getDate()+1);
      }
    } while (date.getMonth()+1 !== (monthDisplayed===12?1:monthDisplayed+1));
    return <ul className="days">{days}</ul>
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

class DateCell extends Component {
  constructor (props){
    super(props);
    this.date = new Date(props.date);
    this.currDate = new Date();
  }

  @action selectDay() {
    if (this.date.getMonth() + 1 === this.props.dateDisplayed.month.get()){
      this.props.selectedDate.setDate(this.date);
      this.props.dateDisplayed.setDate(this.date);
      this.props.dateDisplayed.date.set(1);
    } else {
      this.props.selectedDate.setDate(this.date);
      this.props.dateDisplayed.setDate(this.date);
      this.props.dateDisplayed.date.set(1);
    }
  }

  @computed get htmlClass() {
    let className = "";
    if (this.props.selectedDate.compare(this.date)){
      className = "selectedDate";
    } else if (this.date.toDateString() === this.currDate.toDateString()) {
      className = "currDate";
    } else if (this.date.getMonth()+1 === this.props.dateDisplayed.month.get()) {
      className = "currMonth";
    } else {
      className = "otherMonth";
    }
    return className;
  }

  render() {
    return <li className={this.htmlClass}><div onClick={this.selectDay.bind(this)}>{this.date.getDate()}</div></li>;
  }
}

export default DateSelector;