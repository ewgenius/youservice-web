import './index.css'
import * as React from 'react'
import { render } from 'react-dom'
import * as configure from 'react-tap-event-plugin'
import { MuiThemeProvider, getMuiTheme, colors } from 'material-ui/styles'
import SW from './services/sw'

import App from './components/App/App'

// react-tapevent
configure()

// sw.js
const sw = new SW()
sw.install()

// material-ui
const theme = getMuiTheme({
  palette: {
    primary1Color: colors.deepPurple800,
    accent1Color: colors.deepOrangeA400
  },
  appBar: {
    height: 56
  }
})

// init
render(<MuiThemeProvider muiTheme={theme}>
  <App />
</MuiThemeProvider>, document.getElementById('root'))
