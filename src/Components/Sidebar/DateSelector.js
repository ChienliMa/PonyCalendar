import React, { Component } from 'react';
import {observable, computed, action}  from 'mobx';
import {observer} from 'mobx-react';
import './css/DateSelector.css';
import {ObservableDate} from "../../stores";


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
    this.dateDisplayed = observable({
      year: props.selectedDate.year.get(),
      month: props.selectedDate.month.get(),

      toNextYear : action(()=>{this.year += 1}),
      toPreviousYear : action(()=>{this.year -= 1}),

      toNextMonth : action(()=>{
        if (this.month == 12) {
          this.month = 1;
          this.year += 1;
        }}),

      toPreviousMonth : action(()=>{
        if (this.month == 12) {
          this.month = 12;
          this.year -= 1;
        }})

    })
  }

  renderHeader() {
    return (
      <div className='header'>
        <button className="pre" onClick={this.dateDisplayed.toPreviousMonth}>left</button>
        <span>{this.dateDisplayed.year}-{this.dateDisplayed.month}</span>
        <button className="next" onClick={this.dateDisplayed.toNextMonth}>right</button>
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
    let weeks = [];
    let date = new Date(this.dateDisplayed.year, this.dateDisplayed.month, 1);
    while (date.getDay() !== 0) date.setDate(date.getDate()-1);
    do {
      weeks.push(this.renderWeek(date))
    } while (date.getMonth() === this.dateDisplayed.month);
    return weeks
  }


  renderWeek(date)  {
    let week = [];
    for (let i = 0;i < 7;i+=1) {
      week.push(<DateCell date={new Date(date)} selectedDate={this.selectedDate} monthDisplayed={this.dateDisplayed.month}/>)
      date.setDate(date.getDate()+1);
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

class DateCell extends Component {
  constructor (props){
    super(props);
    this.date = new Date(props.date);
    this.currDate = new Date();
    this.selectedDate = props.selectedDate;
    this.monthDisplayed = props.monthDisplayed;
  }

  @computed get selected() {
    return (this.date.getFullYear() === this.selectedDate.year
            && this.date.getMonth() === this.selectedDate.month
            && this.date.getDate() === this.selectedDate);
  }

  getElement(){
    let className = "";
    if (this.selected){
      className = "selectedDate";
    } else if (this.date.getDate() === this.currDate.getDate()) {
      className = "currDate";
    } else if (this.date.getMonth() === this.currDate.getMonth()) {
      className = "currMonth";
    } else {
      className = "otherMonth";
    }
    return <a className={className}>{this.date.getDate()}</a>;
  }


  render() {
    return <li>{this.getElement()}</li>;
  }
}

export default DateSelector;