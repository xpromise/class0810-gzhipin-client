import React, {Component} from 'react';
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import HeaderSelector from '../header-selector';

class LaobanInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  }
  state = {
    header: '',
    post: '',
    company: '',
    salary: '',
    info: ''
  }
  
  //在父组件定义更新状态方法
  setHeader = header => {
    this.setState({
      header
    })
  }
  
  handleChange = (type, val) => {
    this.setState({
      [type]: val
    })
  }
  
  updateUserInfo = () => {
    //收集用户填写的数据
    this.props.update(this.state);
  }
  
  render () {
    const {errMsg, redirectTo} = this.props.user;
    
    if (redirectTo === '/laoban') {
      return <Redirect to={redirectTo}/>
    }
    
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        <p className="err-msg">{errMsg}</p>
        <InputItem onChange={val => {this.handleChange('post', val)}}>招聘职位:</InputItem>
        <InputItem onChange={val => {this.handleChange('company', val)}}>公司名称:</InputItem>
        <InputItem onChange={val => {this.handleChange('salary', val)}}>职位薪资:</InputItem>
        <TextareaItem title="职位要求:" rows={3} onChange={val => {this.handleChange('info', val)}}/>
        <Button type='primary' onClick={this.updateUserInfo}>保存</Button>
      </div>
    )
  }
}

export default LaobanInfo;