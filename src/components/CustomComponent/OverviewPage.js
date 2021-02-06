import React, { Component } from 'react';
import { Col, Input, Row, Space, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import history from '../../common/history';

class OverviewPage extends Component {
  state = {
    searchQuery: ""
  }

  onChangeSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { Title } = Typography;
    return (
      <Row className="container">
        <Col>
          <Row justify="start" align="middle">
            <Space>
              <ArrowLeftOutlined style={{ fontSize: 24 }} onClick={() => history.push("/")} />
              <Title>Components Overview</Title>
            </Space>
          </Row>
          <Row>
            <Input onChange={this.onChangeSearch} />
          </Row>
          <Row>
            Content Here
          </Row>
        </Col>
      </Row>
    )
  }
}

export default OverviewPage;