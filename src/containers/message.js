import {connect} from 'react-redux';

import Message from '../components/message';
import {} from '../redux/actions';

export default connect(
  state => ({chatMessages: state.chatMessages}),
  {}
)(Message);