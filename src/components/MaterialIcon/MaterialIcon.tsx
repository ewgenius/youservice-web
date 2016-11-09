import * as React from 'react'
import { Props, HTMLAttributes } from 'react'

import FontIcon from 'material-ui/FontIcon'

interface MaterialIconProps extends HTMLAttributes<HTMLSpanElement>, Props<any> {
  icon: string
}

export default (props: MaterialIconProps) => {
  const className = 'material-icons' + (props.className ? (' ' + props.className) : '')
  return <FontIcon
    id={props.id}
    className={className}>
    {props.icon}
  </FontIcon>
}