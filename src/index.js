import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {observable} from 'mobx';
import {User, ObservableDate} from './stores';


let currUser = new User("ChienliMa");
const users = observable([currUser]);

ReactDOM.render(<App currUser={currUser} users={users} selectedDate={new ObservableDate()}/>, document.getElementById('root'));
registerServiceWorker();
