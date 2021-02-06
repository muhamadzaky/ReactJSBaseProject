/**
* @author muhamad.zaky
* This page will display your base project content. this page contain a default React page.
*/

import React, { Component } from 'react'
import { ArrowDownOutlined } from '@ant-design/icons'
import { Link } from 'react-scroll'
import DemoTestPage from './DemoTestPage'

class ReactDefaultPage extends Component {
  render() {
    const { logo, isMobile } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div style={{ display: 'block', position: 'absolute', bottom: '20px' }}>
            <Link to="Demo" spy={true} smooth="easeInOutQuad" duration={1000}>
              <div>Scroll to test page</div>
              <div>
                <ArrowDownOutlined color="#fff" />
              </div>
            </Link>
          </div>
        </header>
        <section id="Demo">
          <DemoTestPage isMobile={isMobile} />
        </section>
      </div>
    )
  }
}

export default ReactDefaultPage