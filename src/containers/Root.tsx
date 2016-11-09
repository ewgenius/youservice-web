import * as React from 'react'
import { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'

export default class Root extends Component<{}, {}> {
  render() {
    return <Router history={hashHistory}>
      <Route />
    </Router>
  }
}