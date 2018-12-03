import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile';

import Logo from '../logo';

const Item = List.Item;

class Register extends Component {
  state = {
    // isBossChecked: true,
    laoban: true,
    username: '',
    password: '',
    rePassword: ''
  }
  
 /* handleRadio = type => {
    //得到单选按钮的类型，是老板还是大神
    if (type === 'laoban') {
      this.setState({
        isBossChecked: true
      })
    } else {
      this.setState({
        isBossChecked: false
      })
    }
  }*/
  
  /*handleUsername = value => {
    //更新状态
    this.setState({
      username: value
    })
  }
  
  handlePassword = value => {
    //更新状态
    this.setState({
      password: value
    })
  }*/
  
  handleChange = (type, value) => {
    //更新状态
    this.setState({
      [type]: value
    })
  }
  
  register = () => {
    //收集表单数据
    const {laoban, password, rePassword, username} = this.state;
    //发送ajax
    console.log(laoban, password, rePassword, username);
  }
  
  goLogin = () => {
    //去登录页面, 将地址切换为login
    //会产生浏览历史记录
    // this.props.history.push('/login');
    //不会产生浏览历史记录
    this.props.history.replace('/login');
  }
  
  render () {
    const {laoban} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('rePassword', val)}>确认密码:</InputItem>
            <WhiteSpace />
            <Item>
              用户类型:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!laoban} onChange={this.handleChange.bind(null, 'laoban', false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
              <Radio checked={laoban} onChange={this.handleChange.bind(null, 'laoban', true)}>老板</Radio>
            </Item>
            <WhiteSpace />
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace />
            <Button onClick={this.goLogin}>已有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;