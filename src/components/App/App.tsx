import './App.css'
import * as React from 'react'
import { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { Card, CardHeader } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MaterialIcon from '../MaterialIcon/MaterialIcon'

export default class App extends Component<any, {}> {
  render() {
    return <div className='App view'>
      <AppBar
        className='appbar'
        showMenuIconButton={false}
        style={{
          position: 'fixed'
        }}
        titleStyle={{ fontSize: 20 }}
        title='Welcome to Youservice' />


      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((j, i) => {
          return <Card key={i} style={{ margin: 8 }}>
            <CardHeader
              title={`My card ${j} ${i}`}
              subtitle='test subtitle' />
          </Card>
        })}
      </div>

      <FloatingActionButton secondary style={{
        position: 'absolute',
        bottom: 16,
        right: 16
      }}>
        <FontIcon className='material-icons'>add</FontIcon>
      </FloatingActionButton>

      <Paper className='bottom-navigation'>
        <BottomNavigation selectedIndex={0}>
          <BottomNavigationItem label='Главная' icon={<MaterialIcon icon='home' />} />
          <BottomNavigationItem label='Избранное' icon={<MaterialIcon icon='star' />} />
          <BottomNavigationItem label='Сообщения' icon={<MaterialIcon icon='message' />} />
          <BottomNavigationItem label='Профиль' icon={<MaterialIcon icon='account_circle' />} />
        </BottomNavigation>
      </Paper>
    </div>
  }
}
