/*
  作用：包含多个用来创建action的action creators
  类别：
    1. 同步action creator
      返回值是action对象
    2. 异步action creator
      返回值是函数 dispatch => {xxx}
 */
import {reqRegister} from '../api';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types';
//定义同步action creator
export const authSuccess = data => ({type: AUTH_SUCCESS, data});
export const authError = data => ({type: AUTH_ERROR, data});

//定义异步action creator
export const register = ({username, password, rePassword, type}) => {
  return dispatch => {
    //做异步任务，发送ajax请求
    reqRegister({username, password, type})
      .then(({data}) => {
        //请求成功~
        if (data.code === 0) {
          //注册成功~
          //更新状态, 分发成功的action对象
          dispatch(authSuccess(data.data));
        } else {
          //注册失败，更新状态，分发失败的action对象
          dispatch(authError({errMsg: data.msg}));
        }
      })
      .catch(err => {
        //请求失败~
        dispatch(authError({errMsg: '网络不稳定，请刷新试试~'}));
      })
  }
}