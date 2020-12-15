import React, { Component } from 'react'
import { configureStore } from '../common/services/store/index'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router-dom'
import history from '../common/history'
import { enquireScreen } from 'enquire-js'

import PrivateRoute from './Route/PrivateRoute'

import ReactDefaultPage from './ReactDefault/ReactDefaultPage'
import PrivatePageExample from './ReactDefault/TestPrivatePage'
import PublicPageExample from './ReactDefault/TestPublicPage'

import logo from '../assets/images/logo.svg'
import '../assets/scss/App.scss'
import 'antd/dist/antd.css'

let isMobile

enquireScreen((b) => {
  isMobile = b
})

class App extends Component {
  state = {
    isMobile
  }
  
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b
      })
    })
  }
  
  render() {
    const base = "/react-base"
    return (
      <Provider store={configureStore}>
        <Router history={history}>
          <Redirect exact from="/" to={base} />
          <Route exact path={base} render={props => <ReactDefaultPage {...props} logo={logo} isMobile={this.state.isMobile} />} />
          <Route exact path={`${base}/PublicRouteExample`} component={PublicPageExample} />
          <PrivateRoute exact path={`${base}/PrivateRouteExample`} component={PrivatePageExample} />
        </Router>
      </Provider>
    )
  }
}

export default App;
