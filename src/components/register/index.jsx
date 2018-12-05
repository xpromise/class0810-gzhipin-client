import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile';
import {Redirect} from 'react-router-dom';

import Logo from '../logo';

const Item = List.Item;

class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  }
  
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
  
  register = async () => {
    //收集表单数据
    const {laoban, password, rePassword, username} = this.state;
    //发送ajax
    console.log(laoban, password, rePassword, username);
    //调用容器组件传递的更新状态的方法
    this.props.register({type: laoban ? 'laoban' : 'dashen', password, rePassword, username});
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
    const {errMsg, redirectTo} = this.props.user;
  
    //判断是否注册成功
    if (redirectTo) {
      //路由链接跳转
      return <Redirect to={redirectTo} />
      //编程式导航
      // this.props.history.push(redirectTo);
      // return null;
    }
    
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <p className="err-msg">{errMsg}</p>
        <WingBlank>
          <List>
            <InputItem onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('password', val)} type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('rePassword', val)} type="password">确认密码:</InputItem>
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