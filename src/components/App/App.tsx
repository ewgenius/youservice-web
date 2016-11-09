import './App.css'
import * as React from 'react'
import { Component } from 'react'

import { Flex } from 'reflexbox'
import AppBar from 'material-ui/AppBar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { Card, CardHeader } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MaterialIcon from '../MaterialIcon/MaterialIcon'

export default class App extends Component<any, {}> {
  render() {
    return <Flex className='App' flexColumn flexAuto>
      <AppBar
        showMenuIconButton={false}
        titleStyle={{ fontSize: 20 }}
        title='Welcome to Youservice' />

      <Flex flexAuto flexColumn align='center'>
        <Flex className='content' flexAuto flexColumn>

          {[1].map(i => {
            return <Card key={i} style={{ margin: 8 }}>
              <CardHeader
                title={`My card ${i}`}
                subtitle='test subtitle' />
            </Card>
          })}

          <FloatingActionButton secondary style={{
            position: 'absolute',
            bottom: 16,
            right: 16
          }}>
            <FontIcon className='material-icons'>add</FontIcon>
          </FloatingActionButton>
        </Flex>
      </Flex>

      <Paper>
        <BottomNavigation selectedIndex={0}>
          <BottomNavigationItem label='Главная' icon={<MaterialIcon icon='home' />} />
          <BottomNavigationItem label='Избранное' icon={<MaterialIcon icon='star' />} />
          <BottomNavigationItem label='Сообщения' icon={<MaterialIcon icon='message' />} />
          <BottomNavigationItem label='Профиль' icon={<MaterialIcon icon='account_circle' />} />
        </BottomNavigation>
      </Paper>
    </Flex>
  }
}
