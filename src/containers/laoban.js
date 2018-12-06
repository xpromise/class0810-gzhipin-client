import {connect} from 'react-redux';

import Laobao from '../components/laoban';
import {getUserList} from '../redux/actions';

export default connect(
  state => ({userList: state.userList}),
  {getUserList}
)(Laobao);