import React, { useState } from 'react';
import { Button, Col, Row, Space, Typography } from 'antd';
import { LoadingWithText } from '../General/GeneralComponent';
import { getTestData } from './store/test-action';
import { connect } from 'react-redux';

const ReactHooksExample = ({ testLoading, testMeta, testData, getTestData }) => {
  const [ showAPIResult, setAPIResultStatus ] = useState(false);
  
  const callAPIResult = () => {
    setAPIResultStatus(!showAPIResult)
    if (!showAPIResult) getTestData()
  }

  const setAPIResultFalse = () => {
    setAPIResultStatus(false)
  }

  const displayAPIResult = () => {
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

  return (
    <Row>
      <Col>
        <Row justify="space-around" align="middle">
          <Space>
            <Button type="primary" shape="round" onClick={ callAPIResult }>Call API</Button>
            <Button danger shape="round" onClick={ setAPIResultFalse }>Remove</Button>
          </Space>
        </Row>
        <Row justify="space-around" align="middle" style={{ marginTop: 50 }}>
          { displayAPIResult() }
        </Row>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  ...state.testReducer
})

const mapDispatchToProps = (dispatch) => (
  { 
    getTestData: () => dispatch(getTestData())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ReactHooksExample);