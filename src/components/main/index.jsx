import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import LaobanInfo from '../laoban-info';

class Main extends Component {
  render () {
    return (
      <div>
        <Route path="/laobaninfo" component={LaobanInfo}/>
      </div>
    )
  }
}

export default Main;