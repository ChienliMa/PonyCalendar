import React, { Component } from 'react';
import {observable}  from 'mobx';
import {observer} from 'mobx-react';


@observer
class ControlPanel extends Component {
  render() {
    return(
      <div style={{display:'block', clear:'both', width:"80%", float:"right", marginLeft:"20%", background:"blue"}}>
        <div style={{display:"block", float:"left"}}>
          <button>today</button>
          <button>left </button>
          <button>right</button>
        </div>
        <div style={{display:'block', float:"right"}}>
          <button>agenda</button>
          <button>day</button>
          <button>week</button>
          <button>month</button>
        </div>
      </div>
    )
  }
}

export default ControlPanel;