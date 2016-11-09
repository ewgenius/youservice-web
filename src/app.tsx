import './index.css'
import * as React from 'react'
import { render } from 'react-dom'
import * as configure from 'react-tap-event-plugin'
import { MuiThemeProvider, getMuiTheme, lightBaseTheme } from 'material-ui/styles'

import App from './components/App/App'

configure()

const theme = getMuiTheme(lightBaseTheme)

render(<MuiThemeProvider muiTheme={theme}>
  <App />
</MuiThemeProvider>, document.getElementById('root'))
