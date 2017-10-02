import React, { Component } from 'react';

class Header extends  Component {
    render() {
        return (
            <div style={{   backgroundColor: "#222", padding: "30px"}}>
                <div style={{float:"left"}}>
                  LOGO
                </div>
                <div style={{float:"right"}}>
                  USERCONTROLPANNEL
                </div>
            </div>
        )
    }
}

export default Header;