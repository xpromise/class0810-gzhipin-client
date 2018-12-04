/*
  作用：用来定义发送ajax模块工具函数
 */
import axios from 'axios';

export default async function (url, data, method = 'GET') {
  //请求参数
  let qs = '';
  //处理请求参数
  if (data) {
    /*
      {
        username: 123,
        password: 456
      }
      
      username=123&password=456
     */
    //返回一个数组，数组中包含对象中的所有属性名
    const arr = Object.keys(data);
    //遍历数组，拼接qs字符串
    arr.forEach(key => {
      qs += `${key}=${data[key]}&`;
    })
    //去掉最后一个多余的&
    qs = qs.substring(0, qs.length - 1);
  }
  //判断请求方式
  const type = method.toUpperCase();
  if (type === 'GET') {
    //发送请求
    const result = await axios.get(url + '?' + qs);
    //将请求成功的响应数据返回出去
    return result.data;
  } else if (type === 'POST') {
    //发送请求
    const result = await axios.post(url, qs, {
      'content-type': 'application/x-www-form-urlencoded'
    });
    //将请求成功的响应数据返回出去
    return result.data;
  }

}