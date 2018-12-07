/*
对话聊天的路由组件
 */

import React, {Component} from 'react'
import {NavBar, List, InputItem, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import './index.less';

const Item = List.Item;

export default class Chat extends Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    chatMessages: PropTypes.object.isRequired
  }
  
  state = {
    message: ''
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  sendMessage = () => {
    //获取发送消息的用户的id
    const from = Cookies.get('userid');
    //获取接受消息的用户的id
    const to = this.props.match.params.id;
    //获取用户发送的消息内容
    const {message} = this.state;
    //发送消息
    this.props.sendMessage({message, from, to});
  }
  
  handleChange = val => {
    this.setState({message: val});
  }
  
  render() {
    const {users, chatMsgs} = this.props.chatMessages;
    //获取发送消息的用户的id
    const from = Cookies.get('userid');
    //获取接受消息的用户的id
    const to = this.props.match.params.id;
    //找其他用户的信息
    console.log(users);
    const others = users[to];
    //处理首次渲染没有数据的情况
    if (!others) {
      return null;
    }
    
    const from_to = [from, to].sort().join('-');
    //得到当前用户的所有相关的消息
    const currMsgs = chatMsgs.filter(item => item.from_to === from_to);
    //消息按照时间顺序排序
    currMsgs.sort(function (a, b) {
      return Date.parse(a.createTime) - Date.parse(b.createTime)
    })
    
    return (
      <div id='chat-page'>
        <NavBar  icon={<Icon type="left" onClick={this.goBack}/>}>{others.username}</NavBar>
        <List>
          {
            currMsgs.map((item, index) => {
              //判断消息a-->b 还是 b -->a
              if (item.from === from) {
                return (
                  <Item
                    key={index}
                    className='chat-me'
                    extra='我'
                  >
                    {item.message}
                  </Item>
                )
              } else {
                return (
                  <Item
                    key={index}
                    thumb={require(`../../assets/images/头像${+others.header + 1}.png`)}
                  >
                    {item.message}
                  </Item>
                )
              }
            })
          }
        </List>
        
        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            onChange={this.handleChange}
            extra={
              <span onClick={this.sendMessage}>发送</span>
            }
          />
        </div>
      </div>
    )
  }
}