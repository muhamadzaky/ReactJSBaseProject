/**
* @author muhamad.zaky
* This file contain functions to call API
* If you have data that many pages will use the data, I recommend you to use Reducer
* If not, you can call the API directly from the component
*/

import { test_api } from '../../../common/services/test-api'
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILED } from './test-action-type'

export const getTestData = () => (dispatch) => {
  dispatch(getTestDataRequest())
  test_api.get("/test")
  .then(res => {
    dispatch(getTestDataSuccess(res.data))
  })
  .catch(err => {
    dispatch(getTestDataFailed("Failed to get data."))
  })
}

const getTestDataRequest = () => ({
  type: TEST_REQUEST
})

const getTestDataSuccess = (payload) => ({ 
  type: TEST_SUCCESS,
  payload
})

const getTestDataFailed = (payload) => ({ 
  type: TEST_FAILED,
  payload
})