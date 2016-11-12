import './App.css'
import * as React from 'react'
import { Component } from 'react'
import { hashHistory } from 'react-router'

import AppBar from 'material-ui/AppBar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MaterialIcon from '../../components/MaterialIcon/MaterialIcon'
import ScrollingShell from '../../components/ScrollingShell/ScrollingShell'

const MOBILE_MAX_WIDTH = 768

function isMobileLayout(): boolean {
  return window.innerWidth <= MOBILE_MAX_WIDTH
}

export default class App extends Component<any, {
  mobileLayout: boolean
}> {
  constructor() {
    super()

    this.state = {
      mobileLayout: isMobileLayout()
    }

    window.addEventListener('resize', () => {
      const newLayout = isMobileLayout()
      if (newLayout !== this.state.mobileLayout) {
        this.setState({
          mobileLayout: newLayout
        })
      }
    })
  }

  navigateSettings() {
    hashHistory.push('/settings')
  }

  render() {
    return <ScrollingShell className={`App view ${this.state.mobileLayout ? 'mobile' : 'desktop'}`}>
      <AppBar
        className='appbar'
        showMenuIconButton={false}
        titleStyle={{ fontSize: 20 }}
        style={{ position: 'fixed', top: 0 }}
        title='Welcome to Youservice'
        iconElementRight={<IconButton onTouchTap={this.navigateSettings}>
          <FontIcon className='material-icons'>settings</FontIcon>
        </IconButton>}
        />

      <div className='content'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((j, i) => {
          return <Card key={i} style={{ marginBottom: 16 }}>
            <CardHeader
              title={`My card ${j} ${i}`}
              subtitle='test subtitle' />

            <CardText>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
            </CardText>
          </Card>
        })}
      </div>

      <FloatingActionButton className='fab' secondary>
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
    </ScrollingShell>
  }
}
