import {observable, computed, action}  from 'mobx';

class User {
  username = '';
  calendars = observable([new Calendar("default")]);

  constructor(name) {
      this.username = name;
  }

  @action
  addCalendar(name){
    this.calendars.push(new Calendar(name));
  }

}

class Calendar {
    eventLists = observable([]);
    eventMaps = observable({});

    constructor(name) {
        this.name = observable(name);
        this.visible = observable(true);
        this.color = observable("#"+((1<<24)*Math.random()|0).toString(16));
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
    this.month = observable(date.getMonth()+1);
    this.date = observable(date.getDate());
  }

  compare(date) {
    return (date.getFullYear() === this.year.get()
      && date.getMonth() === this.month.get() - 1
      && date.getDate() === this.date.get());
  }

  copy(){
    let rval = new ObservableDate();
    rval.setDate(this.getDate());
    return rval;
  }

  getDate() {
    return new Date(this.year.get(), this.month.get()-1, this.date.get());
  }

  @action
  setDate(date){
    this.year.set(date.getFullYear());
    this.month.set(date.getMonth()+1);
    this.date.set(date.getDate());
  }

  @action toNextYear() {this.year.set(this.year.get()+1)};
  @action toPreviousYear() {this.year.set(this.year.get()-1)};

  @action toNextMonth() {
    let month = this.month.get();
    if (month === 12) {
      this.month.set(1);
      this.year.set(this.year.get()+1);
    } else {
      this.month.set(month+1);
    }
  };

  @action toPreviousMonth() {
    let month = this.month.get();
    if (month === 1) {
      this.month.set(12);
      this.year.set(this.year.get()-1);
    } else {
      this.month.set(month-1);
    }
  };
}

export  {User, ObservableDate};
