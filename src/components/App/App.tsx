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

export default class App extends Component<any, { scrollDirection?: -1 | 0 | 1 }> {
  private prevScroll = 0

  constructor() {
    super()

    this.state = {
      scrollDirection: 0
    }

    document.onscroll = (e: any) => {
      const nextScroll = e.target.scrollingElement.scrollTop
      if (nextScroll > this.prevScroll && this.state.scrollDirection !== 1) {
        this.setState({
          scrollDirection: 1
        })
      } else if (nextScroll < this.prevScroll && this.state.scrollDirection !== -1) {
        this.setState({
          scrollDirection: -1
        })
      }
      this.prevScroll = nextScroll
    }
  }

  render() {
    return <div className='App view'>
      <AppBar
        className={`appbar ${this.state.scrollDirection === 1 ? 'hidden' : ''}`}
        showMenuIconButton={false}
        titleStyle={{ fontSize: 20 }}
        style={{ position: 'fixed' }}
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
        position: 'fixed',
        bottom: 16,
        right: 16
      }}>
        <FontIcon className='material-icons'>add</FontIcon>
      </FloatingActionButton>

      <Paper className={`bottom-navigation ${this.state.scrollDirection === 1 ? 'hidden' : ''}`}>
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
