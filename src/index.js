import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/store';

import Login from './containers/login';
import Register from './containers/register';
import Main from './containers/main';

//测试socketio
import './test/socketio_test';

import './assets/less/index.less';

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