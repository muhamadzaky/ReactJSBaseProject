import React, { Component } from 'react'
import { configureStore } from '../common/services/store/index'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
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
    return (
      <Provider store={configureStore}>
        <Router history={history}>
          <Route exact path="/" render={props => <ReactDefaultPage {...props} logo={logo} isMobile={this.state.isMobile} />} />
          <Route exact path="/PublicRouteExample" component={PublicPageExample} />
          <PrivateRoute exact path="/PrivateRouteExample" component={PrivatePageExample} />
        </Router>
      </Provider>
    )
  }
}

export default App;
