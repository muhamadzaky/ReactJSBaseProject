/**
* @author muhamad.zaky
* This page will display an example for a Private Route Page.
*/

import React, { Component } from 'react'
import { Row, Typography, Button, Space } from 'antd'
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'
import history from '../../common/history'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class TestPrivatePage extends Component {
  removeCookies = () => {
    cookies.remove("session")
    history.push("/")
  }

  render() {
    const { Title } = Typography
    return (
      <div style={{ textAlign: 'center' }}>
        <Row>
          <Title>This is was an example for Private Page</Title>
        </Row>
        <Row>
          <Space direction="vertical">
            <Button type="danger" icon={<DeleteOutlined />} onClick={this.removeCookies}>Remove Cookie and Back to Home Page</Button>
            <Button type="link" href="/" icon={<ArrowLeftOutlined />}>Back to home page</Button>
          </Space>
        </Row>
      </div>
    )
  }
}

export default TestPrivatePage