import React, {Component} from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  render () {
    return (
      <List className="my-list">
        <Item
          thumb={require('../../assets/images/头像1.png')}
          multipleLine
          arrow="horizontal"
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