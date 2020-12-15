/**
* @author muhamad.zaky
* This page will display an example for a Public Route Page.
*/

import React, { Component } from 'react'
import { Row, Typography, Button, Col } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import ReactHooksExample from './ReactHooksExample'

class TestPublicPage extends Component {
  render() {
    const { Title } = Typography
    return (
      <Row className="container" justify="space-around" align="middle">
        <Col>
          <Row>
            <Title>This is was an example for Public Page</Title>
          </Row>
          <Row justify="space-around" align="middle">
            <ReactHooksExample />
          </Row>
          <Row justify="space-around" style={{ textAlign: 'center', margin: '100px 0' }}>
            <Button type="primary" shape="round" href="/" icon={<ArrowLeftOutlined />}>Back to home page</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default TestPublicPage