import * as React from 'react'
import { Component } from 'react'
import { hashHistory } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class Settings extends Component<{}, {}> {
  constructor() {
    super()
  }

  back() {
    hashHistory.goBack()
  }

  resetLocalStorage() {
    localStorage.clear()
  }

  render() {
    return <div className='Settings view'>
      <AppBar
        iconElementLeft={<IconButton onTouchTap={this.back}>
          <FontIcon className='material-icons'>arrow_back</FontIcon>
        </IconButton>}
        titleStyle={{ fontSize: 20 }}
        style={{ position: 'fixed', top: 0 }}
        title='Settings' />

      <div className='content'>
        <RaisedButton
          label='reset local storage'
          onClick={this.resetLocalStorage.bind(this)} />
      </div>
    </div>
  }
}