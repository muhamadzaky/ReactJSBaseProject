import React, { Component } from 'react'
import { configureStore } from './common/services/store/index'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from './common/history'
import { enquireScreen } from 'enquire-js'

import PrivateRoute from './components/Route/PrivateRoute'

import ReactDefaultPage from './components/ReactDefault/ReactDefaultPage'
import PrivatePageExample from './components/ReactDefault/TestPrivatePage'
import PublicPageExample from './components/ReactDefault/TestPublicPage'

import logo from './logo.svg'
import './App.scss'
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
    localStorage.setItem("appVer", "a 1.0.0")
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
