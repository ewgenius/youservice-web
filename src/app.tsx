import './index.css'
import * as React from 'react'
import { render } from 'react-dom'
import * as configure from 'react-tap-event-plugin'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'
import SW from './services/sw'

import Root from './containers/Root'

// react-tapevent
configure()

// sw.js
const sw = new SW()
sw.install()

// init
render(<MuiThemeProvider muiTheme={theme}>
  <Root />
</MuiThemeProvider>, document.getElementById('root'))
