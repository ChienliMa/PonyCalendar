import React, {Component} from 'react';
import {observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';

@observer
class BasicTimeWindowView extends Component {

  @computed get dateDisplayed() {
    return this.props.dateDisplayed.get()
  }

  render() {
    return (
      <h1>basic View: {this.props.dateDisplayed.getDate().toString()}</h1>
    )
  }
}


export default BasicTimeWindowView;