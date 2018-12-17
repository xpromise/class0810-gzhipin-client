import {connect} from 'react-redux';

import Chat from '../components/chat';
import {sendMessage, updateUnReadMessage} from '../redux/actions';

export default connect(
  state => ({chatMessages: state.chatMessages}),
  {sendMessage, updateUnReadMessage}
)(Chat);