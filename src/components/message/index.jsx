import React, {Component} from 'react';
import { List } from 'antd-mobile';
import Cookies from "js-cookie";

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  goChat = id => {
    this.props.history.push(`/chat/${id}`);
  }
  
  render () {
    return (
      <List className="my-list">
        <Item
          thumb={require('../../assets/images/头像1.png')}
          multipleLine
          arrow="horizontal"
          onClick={this.goChat.bind(null, 123)}
        >
          今天天气真晴朗 <Brief>laoban001</Brief>
        </Item>
        <Item
          thumb={require('../../assets/images/头像1.png')}
          multipleLine
          arrow="horizontal"
        >
          今天天气真晴朗 <Brief>laoban001</Brief>
        </Item>
      </List>
    )
  }
}

export default Message;