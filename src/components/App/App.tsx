import './App.css'
import * as React from 'react'
import { Component } from 'react'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import MaterialIcon from '../MaterialIcon/MaterialIcon'

export default class App extends Component<any, {}> {
  render() {
    return <Flex className='App' flexColumn flexAuto>
      <AppBar
        showMenuIconButton={false}
        titleStyle={{ fontSize: 20 }}
        title='Welcome to Youservice' />

      <Flex flexAuto>
        <p className='App-intro'>
          <MaterialIcon icon='home' />
        </p>
      </Flex>

      <Paper>
        <BottomNavigation>
          <BottomNavigationItem label='home' icon={<MaterialIcon icon='home' />} />
          <BottomNavigationItem label='home' icon={<MaterialIcon icon='home' />} />
          <BottomNavigationItem label='home' icon={<MaterialIcon icon='home' />} />
        </BottomNavigation>
      </Paper>
    </Flex>
  }
}
