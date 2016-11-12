import * as React from 'react'
import { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'

import App from './App/App'
import Intro from './Intro/Intro'

function firstIntro() {
  if (localStorage.getItem('intro') !== 'done') {
    location.replace('#/intro')
  }
}

export default class Root extends Component<{}, {}> {
  render() {
    return <Router history={hashHistory}>
      <Route path='/' component={App} onEnter={firstIntro} />
      <Route path='/intro' component={Intro} />
    </Router>
  }
}