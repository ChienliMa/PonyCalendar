class User {
    name = '';
    calendars = []

    constructor(name) {
        this.name = name;
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
