import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import SideBar from './Components/Sidebar';
import CalendarDisplay from './Components/CalendarDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header user={this.props.currUser} users={this.props.users}/>
        <SideBar selectedDate={this.props.selectedDate} user={this.props.currUser}/>
        <CalendarDisplay selectedDate={this.props.selectedDate} user={this.props.currUser}/>
      </div>
    );
  }
}




export default App;
