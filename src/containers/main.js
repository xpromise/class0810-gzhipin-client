import {connect} from 'react-redux';

import Main from '../components/main';
import {getUserInfo, getChatList} from '../redux/actions';

export default connect(
  state => ({user: state.user, unReadCount: state.chatMessages.unReadCount}),
  {getUserInfo, getChatList}
)(Main);