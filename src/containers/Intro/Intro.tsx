import './Intro.scss'
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
    <div className='slide-content'>
      <h1>Welcome to YOUSERVICE</h1>
    </div>,
    <div className='slide-content'>
      slide 2
    </div>,
    <div className='slide-content'>
      <p>slide 3</p>
      <div>
        <RaisedButton
          style={{ color: '#fff' }}
          onTouchTap={this.doneIntro.bind(this)}
          label='start' />
      </div>
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

  goTo(index: number) {
    this.setState({ index })
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

  renderSlide(index: number) {
    return <div key={index} className={`slide slide-${index}`}>
      <Flex flexColumn flexAuto align='center'>
        <Flex flexAuto align='center' justify='center'>
          {this.slides[index]}
        </Flex>
      </Flex>
    </div>
  }

  render() {
    return <Flex flexColumn flexAuto className='intro'>
      <SwipeableViews
        index={this.state.index}
        onChangeIndex={this.onChangeIndex.bind(this)}
        style={{ height: '100%', width: '100%' }}
        containerStyle={{ height: '100%', width: '100%' }}>
        {this.slides.map((s, i) => this.renderSlide(i))}
      </SwipeableViews>
      <Flex className='actions'>
        <FlatButton
          style={{ color: '#fff' }}
          onTouchTap={this.doneIntro.bind(this)}
          label='skip' />

        <Flex flexAuto align='center' justify='center'>
          {this.slides.map((s, i) =>
            <button
              key={i}
              onClick={this.goTo.bind(this, i)}
              className={`pin${this.state.index === i ? ' selected' : ''}`} />
          )}
        </Flex>

        <FlatButton
          style={{ color: '#fff' }}
          onTouchTap={this.next.bind(this)}
          label='next' />
      </Flex>
    </Flex>
  }
}