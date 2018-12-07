import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
import PropTypes from 'prop-types';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Message from '../message';
import Personal from '../../containers/personal';
import Footer from '../footer';
import Chat from '../../containers/chat';

import './index.less';

class Main extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    getUserInfo: PropTypes.func.isRequired
  }
  
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'},
  ]
  
  
  render () {
    /*
      1. 判断本地有没有cookie，如果没有，直接去登录页面
      2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
      3. 如果本地有cookie，redux中有状态，直接显示
     */
    //1. 判断本地有没有cookie，如果没有，直接去登录页面
    const userid = Cookies.get('userid');
    
    if (!userid) {
      return <Redirect to='/login'/>
    }
    
    //2. 如果本地有cookie，redux中没有状态（用户之前登录过，刷新页面），必须将数据请求回来
    if (!this.props.user._id) {
      this.props.getUserInfo();
      //当状态数据还未更新，不让加载后面的组件
      return <Icon className="loading" type="loading" size="lg"/>
    }
    //获取当前的路由路径部分
    const {pathname} = this.props.location;
    
    //如果用户直接访问 / ，让它去 老板/大神/信息完善页面
    if (pathname === '/') {
      return <Redirect to={this.props.user.redirectTo}/>
    }
    
    //找到与当前路径匹配的对象
    const currNav = this.navList.find(item => item.path === pathname);
    // console.log(currNav);
    
    return (
      <div>
        {currNav ? <NavBar className="nav-bar">{currNav.title}</NavBar> : null}
        <div className='main-content'>
          <Route path="/laobaninfo" component={LaobanInfo}/>
          <Route path="/dasheninfo" component={DashenInfo}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/chat/:id" component={Chat}/>
        </div>
        {currNav ? <Footer navList={this.navList} type={this.props.user.type}/> : null}
      </div>
    )
  }
}

export default Main;