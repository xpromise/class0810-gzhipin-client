import React, {Component} from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Laoban extends Component {
  render () {
    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              thumb={require('../../assets/images/头像1.png')}
              extra={<span>laoban001</span>}
            />
            <Card.Body>
              <div>职位：xxx</div>
              <div>公司：xxx</div>
              <div>薪资：xxx</div>
              <div>描述：xxx</div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Laoban;