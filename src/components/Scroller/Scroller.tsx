import './Scroller.css'
import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

interface ScrollerProps extends Props<Scroller>, HTMLAttributes<HTMLDivElement> {

}

export default class Scroller extends Component<ScrollerProps, {}> {
  render() {
    return <div className='scroller'>
      {this.props.children}
    </div>
  }
}