import React, { Component } from 'react';
import logo from './logo.svg';
import {observable, extendObservable}  from 'mobx';
import {observer} from 'mobx-react';
import './App.css';

import Header from './Components/Header';
import SideBar from './Components/Sidebar';
import CalendarDisplay from './Components/CalendarDisplay';
import CalendarControlPannel from './Components/CalendarControlPannel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CalendarControlPannel/>
        <SideBar/>
        <CalendarDisplay/>
      </div>
    );
  }
}




export default App;
