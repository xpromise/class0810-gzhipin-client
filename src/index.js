import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import Login from './components/login';
import Register from './components/register';
import Main from './components/main';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        {/*不写path，默认匹配所有路径*/}
        <Route path="/" component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('app'));