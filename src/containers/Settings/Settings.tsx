import * as React from 'react'
import { Component } from 'react'

import { Flex } from 'reflexbox'
import FlatButton from 'material-ui/FlatButton'


export default class Settings extends Component<{}, {}> {

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

  onChangeIndex(index: number) {
    this.setState({ index })
  }

  render() {
    return <Flex flexColumn flexAuto className='intro'>
    </Flex>
  }
}