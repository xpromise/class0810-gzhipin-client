import {connect} from 'react-redux';

import Login from '../components/login';
import {login} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {login}
)(Login);