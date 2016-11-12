import * as React from 'react'
import { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'

import App from './App/App'
import Intro from './Intro/Intro'

export default class Root extends Component<{}, {}> {
  render() {
    return <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/intro' component={Intro} />
    </Router>
  }
}