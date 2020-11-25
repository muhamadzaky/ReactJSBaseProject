import React from 'react'
import { Col, Row, Spin, Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const { Text } = Typography

export const LoadingWithText = (opt) => {
  const icon = opt.icon ? opt.icon : <LoadingOutlined style={{ fontSize: opt.fontSize ? opt.fontSize : 24 }} spin />
  return (
    <Row justify="space-around">
      <Col>
        <Row justify="center">
          <Spin indicator={icon} />
        </Row>
        <Row>
          <Text>{ opt.text }</Text>
        </Row>
      </Col>
    </Row>
  )
}

export const Loading = (opt) => {
  const icon = opt.icon ? opt.icon : <LoadingOutlined style={{ fontSize: opt.fontSize ? opt.fontSize : 24 }} spin />
  return (
    <Row justify="space-around">
      <Col>
        <Row justify="center">
          <Spin indicator={icon} />
        </Row>
      </Col>
    </Row>
  )
}