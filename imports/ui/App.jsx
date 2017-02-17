import React, { Component } from 'react';
import { render } from 'react-dom';

import MyList from './material-ui-comp/myTemplate.jsx';

const style = {
  margin: 12,
};

// App component - represents the whole app

export default class App extends Component {


  render() {

    return (
      <MyList />

    );

  }

}
