import './App.css'
import * as React from 'react'
import { Component } from 'react'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'

export default class App extends Component<any, {}> {
  render() {
    return <Flex className='App' flexColumn>
      <AppBar
        showMenuIconButton={false}
        title='Welcome to Youservice' />
      <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </Flex>
  }
}
