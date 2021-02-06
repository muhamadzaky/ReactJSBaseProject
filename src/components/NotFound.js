import { Button, Col, Result, Row } from 'antd'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Row justify="space-around" align="middle" style={{ height: '100vh' }}>
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" href="/">Back Home</Button>}
        />
      </Col>
    </Row>
  )
}

export default NotFoundPage