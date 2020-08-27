// this file should be root Reducer
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import testReducer from '../../../components/ReactDefault/store/test-reducer'

const reducers = combineReducers({
    testReducer
})

const configureStore = createStore(
    reducers,
    applyMiddleware(thunk)
)

export { reducers, configureStore }