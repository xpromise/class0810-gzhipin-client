import React, {Component} from 'react';
import { List } from 'antd-mobile';
import Cookies from "js-cookie";
import PropTypes from 'prop-types';

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  static propTypes = {
    chatMessages: PropTypes.object.isRequired
  }
  
  goChat = id => {
    this.props.history.push(`/chat/${id}`);
  }
  
  render () {
    //获取当前用户的userid
    const userid = Cookies.get('userid');
    //从消息列表中找到所有通话的用户
    const {users, chatMsgs} = this.props.chatMessages;
    //从每一个chatMsgs中的对象，找到from to与userid不同的id值
    //过滤掉相同id值，相同的id值只保留一个
    let users_id = {};
    chatMsgs.forEach(item => {
      const othersId = item.from === userid ? item.to : item.from;
      users_id[othersId] = users[othersId];
      users_id[othersId].id = othersId;
    })
    //将对象变成数组
    const arr = Object.values(users_id);  // [{header, username, id}]
    
    return (
      <List className="my-list">
        {
          arr.map((item, index) => (
            <Item
              key={index}
              thumb={require(`../../assets/images/头像${(item.header === 'undefined' ? 0 : +item.header) + 1}.png`)}
              multipleLine
              arrow="horizontal"
              onClick={this.goChat.bind(null, item.id)}
            >
              今天天气真晴朗 <Brief>{item.username}</Brief>
            </Item>
          ))
        }
      </List>
    )
  }
}

export default Message;