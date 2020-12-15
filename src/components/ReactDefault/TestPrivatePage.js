/**
* @author muhamad.zaky
* This page will display an example for a Private Route Page.
*/

import React, { Component } from 'react'
import { Row, Typography, Button, Space, Col, Divider } from 'antd'
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'
import history from '../../common/history'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class TestPrivatePage extends Component {
  removeCookies = () => {
    cookies.remove("session")
    history.push("/react-base")
  }

  render() {
    const { Title } = Typography
    return (
      <Row className="container" justify="space-around" align="middle">
        <Col>
          <Row>
            <Title>This is was an example for Private Page</Title>
          </Row>
          <Row justify="space-around" style={{ textAlign: 'center', margin: '100px 0' }}>
            <Space direction="vertical">
              <Button type="primary" shape="round" href="/react-base" icon={<ArrowLeftOutlined />}>Back to home page</Button>
              <Divider>OR</Divider>
              <Button type="danger" shape="round" icon={<DeleteOutlined />} onClick={this.removeCookies}>Remove Cookie and Back to Home Page</Button>
            </Space>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default TestPrivatePage