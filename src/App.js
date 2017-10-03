import React, { Component } from 'react';
import {observable, extendObservable}  from 'mobx';
import './App.css';

import User from './stores';

import Header from './Components/Header';
import SideBar from './Components/Sidebar';
import CalendarDisplay from './Components/CalendarDisplay';
import CalendarControlPannel from './Components/CalendarControlPannel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header user={this.props.currUser} users={this.props.users}/>
        <CalendarControlPannel currDate={this.props.currDate}/>
        <SideBar selectedDate={this.props.selectedDate} user={this.props.currUser}/>
        <CalendarDisplay selectedDate={this.props.selectedDate} user={this.props.user}/>
      </div>
    );
  }
}




export default App;
