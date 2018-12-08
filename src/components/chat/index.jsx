/*
对话聊天的路由组件
 */

import React, {Component} from 'react'
import {NavBar, List, InputItem, Icon, Grid} from 'antd-mobile';
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
    message: '',
    isShow: false
  }
  
  goBack = () => {
    this.props.history.goBack();
  }
  
  componentWillMount () {
    const emojis = ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
      ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🙉'];
  
    this.emojis = emojis.map(item => ({text: item}));
  }
  
  componentDidMount () {
    window.scrollTo(0, document.body.offsetHeight);
  }
  
  componentDidUpdate () {
    window.scrollTo(0, document.body.offsetHeight);
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
    //清空用户输入，清空状态
    this.setState({message: ''});
  }
  
  handleChange = val => {
    this.setState({message: val});
  }
  
  toggleShow = () => {
    const {isShow} = this.state;
    this.setState({
      isShow: !isShow
    })
    //解决轮播图显示高度异常的问题
    if (!isShow) {
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 0)
    }
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
        <NavBar style={{position: 'fixed', left: 0, top: 0, zIndex: 50, width: '100%'}} icon={<Icon type="left" onClick={this.goBack}/>}>{others.username}</NavBar>
        <List style={{marginTop: '96px'}}>
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
        
        <div style={{height: this.state.isShow ? '180px' : 0}}></div>
        
        <div className='am-tab-bar'>
          <InputItem
            placeholder="请输入"
            onChange={this.handleChange}
            extra={
              <div>
                <span onClick={this.toggleShow}>🙉</span> &nbsp;&nbsp;
                <span onClick={this.sendMessage}>发送</span>
              </div>
            }
            value={this.state.message}
          />
          {
            this.state.isShow
              ? <Grid
                data={this.emojis}
                isCarousel
                columnNum={8}
                carouselMaxRow={4}
                onClick={el => {this.setState({message: this.state.message + el.text})}}
              />
              : null
          }
        </div>
  
      </div>
    )
  }
}