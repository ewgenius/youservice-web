import { getMuiTheme, colors } from 'material-ui/styles'


const theme = getMuiTheme({
  palette: {
    primary1Color: colors.blueGrey800,
    accent1Color: colors.deepOrangeA400
  },
  appBar: {
    height: 56
  }
})

export default theme