import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//引入reducers函数
import reducers from './reducers';

// export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default createStore(reducers, applyMiddleware(thunk));