import './Intro.css'
import * as React from 'react'
import { Component } from 'react'

import SwipeableViews from 'react-swipeable-views'
import { Flex } from 'reflexbox'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

interface IntroState {
  index?: number
}

export default class Intro extends Component<{}, IntroState> {
  private slides = [
    <div key='1' className='slide slide-1'>
      <Flex flexColumn flexAuto align='center'>
        slide 1
      </Flex>
    </div>,
    <div key='2' className='slide slide-2'>
      <Flex flexColumn flexAuto align='center'>
        slide 2
      </Flex>
    </div>,
    <div key='3' className='slide slide-3'>
      <Flex flexColumn flexAuto align='center'>
        <p>slide 3</p>
        <div>
          <RaisedButton
            style={{ color: '#fff' }}
            onTouchTap={this.doneIntro.bind(this)}
            label='start' />
        </div>
      </Flex>
    </div>
  ]

  constructor() {
    super()

    this.state = {
      index: 0
    }
  }

  doneIntro() {
    localStorage.setItem('intro', 'done')
    location.replace('#/')
  }

  next() {
    if (this.state.index < this.slides.length - 1)
      this.setState({
        index: this.state.index + 1
      })
    else
      this.doneIntro()
  }

  onChangeIndex(index: number) {
    this.setState({ index })
  }

  render() {
    return <Flex flexColumn flexAuto className='intro'>
      <SwipeableViews
        index={this.state.index}
        onChangeIndex={this.onChangeIndex.bind(this)}
        style={{ height: '100%', width: '100%' }}
        containerStyle={{ height: '100%', width: '100%' }}>
        {this.slides}
      </SwipeableViews>
      <Flex className='actions'>
        <FlatButton
          style={{ color: '#fff' }}
          onTouchTap={this.doneIntro.bind(this)}
          label='skip' />

        <Flex flexAuto >

        </Flex>

        <FlatButton
          style={{ color: '#fff' }}
          onTouchTap={this.next.bind(this)}
          label='next' />
      </Flex>
    </Flex>
  }
}