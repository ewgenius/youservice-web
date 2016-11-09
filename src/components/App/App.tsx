import './App.css'
import * as React from 'react'
import { Component } from 'react'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MaterialIcon from '../MaterialIcon/MaterialIcon'

export default class App extends Component<any, {}> {
  render() {
    return <Flex className='App' flexColumn flexAuto>
      <AppBar
        showMenuIconButton={false}
        titleStyle={{ fontSize: 20 }}
        title='Welcome to Youservice' />

      <Flex flexAuto flexColumn>
        <div>
          <FlatButton label='test' /></div>
        <div>
          <FlatButton primary label='test' /></div>
        <div>
          <FlatButton secondary label='test' /></div>
        <div>
          <RaisedButton primary label='test' /></div>
        <div>
          <RaisedButton secondary label='test' /></div>
      </Flex>
      <div>
        <FloatingActionButton>
          <FontIcon className='material-icons'>add</FontIcon>
        </FloatingActionButton>
      </div>
      <div>
        <FloatingActionButton secondary>
          <FontIcon className='material-icons'>add</FontIcon>
        </FloatingActionButton>
      </div>

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
