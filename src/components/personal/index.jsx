import React, {Component} from 'react';
import { List, Result, Button, WhiteSpace, Modal } from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

class Personal extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    resetUserInfo: PropTypes.func.isRequired,
    resetUserList: PropTypes.func.isRequired,
  }
  
  logout = () => {
      alert('退出登录', '你确定要退出登录吗???', [
        { text: '取消', onPress: () => {} },
        { text: '确认', onPress: () => {
            //清除cookie
            Cookies.remove('userid');
            //清除redux管理数据
            this.props.resetUserInfo();
            this.props.resetUserList();
            //跳转到登录页面
            this.props.history.replace('/login');
          }},
      ])
  }
  
  render () {
    const {header, username, post, info, salary, company} = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/头像${+header + 1}.png`)} alt=""/>}
          title={username}
        />
        <List renderHeader={() => '相关信息'}>
          <Item
            multipleLine
            onClick={() => {}}
          >
            <Brief>职位：{post}</Brief>
            {company !== 'undefined' ? <Brief>公司：{company}</Brief> : null}
            {salary !== 'undefined' ? <Brief>月薪：{salary}</Brief> : null}
            <Brief>简介：{info}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <Button
          type="warning"
          onClick={this.logout}
        >
          退出登录
        </Button>
      </div>
    )
  }
}

export default Personal;