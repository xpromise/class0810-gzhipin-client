// 引入客户端io
import io from 'socket.io-client';

// 连接服务器, 得到代表连接的socket对象
//当前客户端对象
const socket = io('ws://localhost:5000');

// 绑定'receiveMessage'的监听, 来接收服务器发送的消息
// 客户端接受消息的消息名称和服务器发送消息的消息名称必须完全一致
socket.on('receiveMsg', function (data) {
  console.log('浏览器端接收到服务器发送的消息:', data)
})

// 向服务器发送消息， 客户端发消息的消息名称和服务器接受消息的消息名称必须完全一致
socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
console.log('浏览器端向服务器发送消息:', {name: 'Tom', date: Date.now()})