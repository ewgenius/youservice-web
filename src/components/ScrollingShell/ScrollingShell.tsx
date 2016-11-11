import * as React from 'react'
import { Component, Props, HTMLAttributes } from 'react'

export type ScrollDirection = -1 | 0 | 1

interface ScrollEventTarget extends EventTarget {
  scrollingElement: HTMLElement
}

interface ScrollEvent extends UIEvent {
  target: ScrollEventTarget
}

interface ScrollingShellProps extends Props<ScrollingShell>, HTMLAttributes<HTMLDivElement> {
  scrollTarget?: any
  onScrollDirectionChange?: (direction: ScrollDirection) => void
}

interface ScrollingShellState {
  scrollDirection: ScrollDirection
}

export default class ScrollingShell extends Component<ScrollingShellProps, ScrollingShellState> {
  static defaultProps = {
    onScrollDirectionChange: (d: ScrollDirection) => console.log(d)
  }

  private _prevScrollPosition = 0

  constructor() {
    super()

    this.state = {
      scrollDirection: 0
    }

    document.onscroll = (e: UIEvent) => this.onScroll(e as ScrollEvent)
  }

  private onScroll(event: ScrollEvent) {
    const nextScrollPosition = event.target.scrollingElement.scrollTop
    if (nextScrollPosition > this._prevScrollPosition && this.state.scrollDirection !== 1) {
      this.setState({
        scrollDirection: 1
      })
      this.props.onScrollDirectionChange(1)
    } else if (nextScrollPosition < this._prevScrollPosition && this.state.scrollDirection !== -1) {
      this.setState({
        scrollDirection: -1
      })
      this.props.onScrollDirectionChange(-1)
    }
    this._prevScrollPosition = nextScrollPosition
  }

  render() {
    return <div className={`${this.props.className} scrolling-shell scroll-${this.state.scrollDirection}`}>{this.props.children}</div>
  }
} 