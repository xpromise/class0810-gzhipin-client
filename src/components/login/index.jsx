import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
import {Redirect} from 'react-router-dom';

import Logo from '../logo';

class Login extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }
  
  state = {
    username: '',
    password: ''
  }
  
  handleChange = (type, value) => {
    //更新状态
    this.setState({
      [type]: value
    })
  }
  
  login = async () => {
    //收集表单数据
    const {password, username} = this.state;
    //调用容器组件传递的更新状态的方法
    this.props.login({password, username});
  }
  
  goRegister = () => {
    this.props.history.replace('/register');
  }
  
  render () {
    const {errMsg, redirectTo} = this.props.user;
  
    if (redirectTo) {
      return <Redirect to={redirectTo} />
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
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.goRegister}>还没有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;