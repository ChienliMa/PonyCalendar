import {observable, computed, action}  from 'mobx';

class User {
    username = '';
    calendars = []

    constructor(name) {
        this.username = name;
    }
}

class Calendar {
    color = "";
    visible = true;
    eventLists = [];
    eventMaps = {};

    constructor(name) {
        this.name = name;
    }
}

class RealityEvent {
    name;
    addr;
    desc;
    start;
    end;

    constructor(name, addr, desc, start, end) {
        this.name = name;
        this.addr = addr;
        this.desc =this.desc;
        this.start = this.start;
        this.end = end;
    }
}

class ObservableDate {
  @observable year;
  @observable month;
  @observable date;

  constructor(){
    let date = new Date();
    this.year = observable(date.getFullYear());
    this.month = observable(date.getMonth());
    this.date = observable(date.getDate());
  }

  @computed get day() {return new Date(this.year, this.month, this.date).getDay()}

  getDate() {
    return new Date(this.year.get(), this.month.get(), this.date.get());
  }

  @action
  setDate(date){
    this.year.set(date.getFullYear());
    this.month.set(date.getMonth());
    this.date.set(date.getDate());
  }
}

export  {User, ObservableDate};
