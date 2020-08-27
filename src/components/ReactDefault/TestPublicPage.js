/**
* @author muhamad.zaky
* This page will display an example for a Public Route Page.
*/

import React, { Component } from 'react'
import { Row, Typography, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

class TestPublicPage extends Component {
  render() {
    const { Title } = Typography
    return (
      <div style={{ textAlign: 'center' }}>
        <Row>
          <Title>This is was an example for Public Page</Title>
        </Row>
        <Row>
          <Button type="link" href="/" icon={<ArrowLeftOutlined />}>Back to home page</Button>
        </Row>
      </div>
    )
  }
}

export default TestPublicPage