import React, { Component } from 'react'
import { configureStore } from '../common/services/store/index'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import history from '../common/history'
import { enquireScreen } from 'enquire-js'

import PrivateRoute from './Route/PrivateRoute'

import ReactDefaultPage from './ReactDefault/ReactDefaultPage'
import PrivatePageExample from './ReactDefault/TestPrivatePage'
import PublicPageExample from './ReactDefault/TestPublicPage'
import ReactHooksExample from './ReactDefault/ReactHooksExample'
import OverviewPage from './CustomComponent/OverviewPage'
import NotFoundPage from './NotFound'

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
          <Switch>
            <Route exact path="/" render={props => <ReactDefaultPage {...props} logo={logo} isMobile={this.state.isMobile} />} />
            <Route exact path={`/ReactHooksExample`} component={ReactHooksExample} />
            <Route exact path={`/ComponentsOverview`} component={OverviewPage} />
            <Route exact path={`/PublicRouteExample`} component={PublicPageExample} />
            <PrivateRoute exact path={`/PrivateRouteExample`} component={PrivatePageExample} />
            <Route exact path="/NotFound" component={NotFoundPage} />
            <Redirect from="*" to="/NotFound" />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
