import {connect} from 'react-redux';

import Chat from '../components/chat';
import {sendMessage} from '../redux/actions';

export default connect(
  state => ({}),
  {sendMessage}
)(Chat);