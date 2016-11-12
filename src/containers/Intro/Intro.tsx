import './Intro.css'
import * as React from 'react'
import { Component } from 'react'

import SwipeableViews from 'react-swipeable-views'
import { Flex } from 'reflexbox'
import FlatButton from 'material-ui/FlatButton'

export default class Intro extends Component<{}, {}> {
  render() {
    return <Flex flexColumn flexAuto className='intro'>
      <SwipeableViews
        style={{ height: '100%', width: '100%' }}
        containerStyle={{ height: '100%', width: '100%' }}>
        <div className='slide slide-1'>slide n°1</div>
        <div className='slide slide-2'>slide n°1</div>
        <div className='slide slide-3'>slide n°1</div>
      </SwipeableViews>
      <Flex className='actions'>
        <FlatButton
          style={{ color: '#fff' }}
          label='skip' />

        <Flex flexAuto/>

        <FlatButton
          style={{ color: '#fff' }}
          label='next' />
      </Flex>
    </Flex>
  }
}