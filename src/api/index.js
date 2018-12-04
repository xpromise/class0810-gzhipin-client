/*
  定义所有请求函数
 */

import ajax from './ajax';

//接口前缀
//正常请求的配置
// const prefix = 'http://localhost:4000';
//代理服务器需要的配置
const prefix = '';

//定义注册的请求
export const reqRegister = data => ajax(`${prefix}/register`, data, 'POST');