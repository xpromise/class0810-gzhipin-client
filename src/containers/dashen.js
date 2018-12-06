import {connect} from 'react-redux';

import Dashen from '../components/dashen';
import {getUserList} from '../redux/actions';

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Dashen);