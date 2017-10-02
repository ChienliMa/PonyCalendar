import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';


@observer
class ControlPannel extends Component {
  render() {
    return(
      <div>
        <h1>Control Pannel</h1>
      </div>
    )
  }
}

export default ControlPannel;