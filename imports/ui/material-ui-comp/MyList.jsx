import { render } from 'react-dom';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
//////////////////////üst tarafı sabit. material-ui için aşağısı değişçek

import React from 'react';
import AppBar from 'material-ui/AppBar';


export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.onTitleTouchTap = this.onTitleTouchTap.bind(this);
    this.state = {
      myTitle: 'Hi',
    };
  }

onTitleTouchTap(e){
e.preventDefault();
    window.console.log("Click!");
    if(this.state.myTitle=='Hi')
      this.setState({
        myTitle: 'Hello',
      });
    else {
      this.setState({
        myTitle: 'Hi',
      });
    }
  }



  render() {

    return (
      <MuiThemeProvider>

        <AppBar
       title={this.state.myTitle}
       iconClassNameRight="muidocs-icon-navigation-expand-more"
       onLeftIconButtonTouchTap={this.onTitleTouchTap.bind(this)}
       onTitleTouchTap={this.onTitleTouchTap.bind(this)}
     />



    </MuiThemeProvider>

    );

  }

}
