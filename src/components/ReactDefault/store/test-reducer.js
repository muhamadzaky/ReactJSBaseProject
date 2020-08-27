/**
* @author muhamad.zaky
* This file contain functions to push data from Action to constant
* You can call the initialState constant to access the data from Reducer to display on Component (this.props.initialStateObj)
*/

import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILED } from './test-action-type'

const initialState = {
  testData: "",
  testMeta: {},
  testLoading: false
}

const handler = (currentState) => {
  const testDataRequest = () => {
    return {
      ...currentState,
      testLoading: true
    }
  }

  const testDataSuccess = (datas) => {
    console.log(datas)
    return {
      ...currentState,
      testData: datas.data.message,
      testMeta: datas.meta,
      testLoading: false
    }
  }

  const testDataFailed = (datas) => {
    return {
      ...currentState,
      testData: datas,
      testMeta: {},
      testLoading: false
    }
  }

  return {
    testDataRequest,
    testDataSuccess,
    testDataFailed
  }
}

export default (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case TEST_REQUEST:
      return handler(state).testDataRequest()
    case TEST_SUCCESS:
      return handler(state).testDataSuccess(payload)
    case TEST_FAILED:
      return handler(state).testDataFailed(payload)
    default:
      return state
  }
}