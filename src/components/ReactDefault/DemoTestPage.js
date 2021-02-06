/**
* @author muhamad.zaky
* This page will display your base project content. this page contain a test method.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Button, Space, Popconfirm, Tooltip, Row, Col } from 'antd'
import { getTestData } from './store/test-action'
import { LoadingWithText } from '../General/GeneralComponent'
import { HeartFilled } from '@ant-design/icons'
import history from '../../common/history'
import BrowserDetection from 'react-browser-detection'
import Cookies from 'universal-cookie'
import moment from 'moment'

import './styles/DemoTestPage.scss'

const cookies = new Cookies()

class DemoTestPage extends Component {
  state = {
    showBrowserInfo: false,
    showAPIResult: false,
    isMobile: false
  }

  componentWillReceiveProps({ isMobile }) {
    this.setState({ isMobile })
  }

  showBrowserInfo = () => {
    this.setState({ showBrowserInfo: !this.state.showBrowserInfo, showAPIResult: false })
  }

  checkBrowserResult = () => {
    const { showBrowserInfo } = this.state
    const browserHandler = {
      chrome: () => <span>Chrome</span>,
      googlebot: () => <span>GoogleBot</span>,
      default: (browser) => <span>{browser}!</span>,
    }

    if (showBrowserInfo) {
      return (
        <Col>
          You open this on &nbsp;<BrowserDetection>{ browserHandler }</BrowserDetection>, { window.navigator.appVersion }.
        </Col>
      )
    }
  }

  showAPIResult = () => {
    const { showAPIResult } = this.state
    const { getTestData } = this.props
    this.setState({ showAPIResult: !this.state.showAPIResult, showBrowserInfo: false }, () => { if (!showAPIResult) getTestData() })
  }

  displayAPIResult = () => {
    const { showAPIResult } = this.state
    const { testLoading, testMeta, testData } = this.props
    const { Text } = Typography
    if (showAPIResult) {
      return (
        <div>
          {
            testLoading ?
              <LoadingWithText text="Getting data from API..." />
            :
              <Row justify="space-around">
                <Text>
                  {`${JSON.stringify(testMeta)} - ${testData}`}
                </Text>
              </Row>
          }
        </div>
      )
    }
  }

  onYesPrivatePage = () => {
    history.push("/PrivateRouteExample")
  }
  
  onNoPrivatePage = () => {
    const date = moment(new Date()).add(1, 'hours').utc()._d
    const addCookies = async () => {
      cookies.set("session", true, { path: '/', expires: date })
    }

    addCookies().then(() => { history.push("/PrivateRouteExample") })
  }

  render() {
    const { Title, Text } = Typography
    const { isMobile, showBrowserInfo, showAPIResult } = this.state
    const getSession = cookies.get("session")
    return (
      <Row justify="space-around" align="middle" className="test-container">
        <Col>
          <Row justify="space-around">
            <Col>
              <Row justify="space-around">
                <Title>Hi</Title>
              </Row>
              <Row>
                <Title level={2}>This is a test page.</Title>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row justify="space-around">
                <span>
                  <Tooltip placement="right" title="to make this true, open the dev tools and use mobile device mode.">
                    On mobile screen type: <Text strong style={{ color: isMobile ? 'green' : 'red' }}>{ isMobile ? "true" : "false" }</Text>
                  </Tooltip>
                </span>
              </Row>
              <Row justify="space-around" style={{ marginTop: 20 }}>
                <Space>
                  <Button type="default" danger={showBrowserInfo ? true : false} shape="round" onClick={this.showBrowserInfo}>Check browser</Button>
                  <Button type="primary" danger={showAPIResult ? true : false} shape="round" onClick={this.showAPIResult}>Test API</Button>
                </Space>
              </Row>
              <Row justify="space-around" style={{ marginTop: 20 }}>
                <Button type="link" href="/PublicRouteExample">Go To Public Page</Button>
                {
                  getSession === undefined ?
                    <Popconfirm 
                      placement="top" 
                      title="Access this page without adding Cookies?" 
                      onConfirm={this.onYesPrivatePage} 
                      onCancel={this.onNoPrivatePage} 
                      okText="Yes" 
                      cancelText="No"
                    >
                      <Button type="link">Go To Private Page</Button>
                    </Popconfirm>
                  : 
                    <Button type="link" href="/PrivateRouteExample">Go To Private Page</Button>
                  }
                  <Button type="link" href="/ReactHooksExample">Go To Hooks Example Page</Button>
              </Row>
              <Row justify="space-around" style={{ marginTop: 50 }}>
                <Button type="primary" href="https://ant.design/components/overview/" target="_blank" shape="round">Ant Design Components</Button>
                <Button type="primary" href="/ComponentsOverview" shape="round">Custom Components</Button>
              </Row>
              <Row justify="space-around" className="test-result">
                { this.checkBrowserResult() }
                { this.displayAPIResult() }
              </Row>
            </Col>
          </Row>
          {/* <div className="announce">
            <Row>
              <Col>
                <Row>
                  <Text>This website is using cookies</Text>
                </Row>
                <Row>
                  <Text>Searching for React Hook example? Open.</Text>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="primary" shape="circle" danger icon={<CloseOutlined />} />
              </Col>
            </Row>
          </div> */}
          <Row justify="space-around">
            <span>&copy;{ moment(new Date()).format('YYYY') } - Developed with <HeartFilled style={{ color: '#ea4c89' }} /> by Muhamad Zaky</span>
          </Row>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state.testReducer
})

const mapDispatchToProps = (dispatch => ({
  getTestData
}))()

export default connect(mapStateToProps, mapDispatchToProps)(DemoTestPage)