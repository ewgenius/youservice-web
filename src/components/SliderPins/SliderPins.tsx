import * as React from 'react'
import { Component } from 'react'

interface SliderPinsProps {
  count: number
  index?: number
  onChangeIndex?: (index: number) => void
}

export default class Intro extends Component<SliderPinsProps, {}> {
  constructor() {
    super()
  }

  render() {
    return <div className='slider-pins'>
      <button />
      <button />
      <button />
    </div>
  }
}