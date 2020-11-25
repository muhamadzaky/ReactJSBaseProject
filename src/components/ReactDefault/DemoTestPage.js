/**
* @author muhamad.zaky
* This page will display your base project content. this page contain a test method.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Button, Space, Popconfirm, Tooltip, Row } from 'antd'
import { getTestData } from './store/test-action'
import { LoadingWithText } from '../General/GeneralComponent'
import history from '../../common/history'
import BrowserDetection from 'react-browser-detection'
import Cookies from 'universal-cookie'
import moment from 'moment'

import './styles/DemoTestPage.scss'

const cookies = new Cookies()

class DemoTestPage extends Component {
  state = {
    showBrowserInfo: false,
    showAPIResult: false
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
        <div>
          You open this on &nbsp;<BrowserDetection>{ browserHandler }</BrowserDetection>, { window.navigator.appVersion }.
        </div>
      )
    }
  }

  showAPIResult = () => {
    const { showAPIResult } = this.state
    const { getTestData } = this.props
    const setState = async () => {
      this.setState({ showAPIResult: !this.state.showAPIResult, showBrowserInfo: false })
    }

    setState().then(() => {
      if (!showAPIResult) { 
        getTestData()
      }
    })
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
    const { isMobile } = this.props
    const getSession = cookies.get("session")
    return (
      <div className="test-container">
        <div className="test-header">
          <Title>Hi</Title>
          <Title level={2}>This is a test page.</Title>
        </div>
        <div className="test-body">
          <div>
            <span>
              <Tooltip placement="right" title="to make this true, open the dev tools and use mobile device mode.">
                On mobile screen type: <Text strong style={{ color: isMobile ? 'green' : 'red' }}>{ isMobile ? "true" : "false" }</Text>
              </Tooltip>
            </span>
          </div>
          <br/>
          <Space>
            <Button type="default" shape="round" onClick={this.showBrowserInfo}>Check browser</Button>
            <Button type="primary" shape="round" onClick={this.showAPIResult}>Test API</Button>
          </Space>
          <div style={{ marginTop: 20 }}>
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
          </div>
          <div className="test-result">
            { this.checkBrowserResult() }
            { this.displayAPIResult() }
          </div>
        </div>
      </div>
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