import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f4f3',
      darker: '#053e85',
      contrastText: '#fff'
    },
    secondary: {
      main: '#8da2c1',
      darker: '#222',
      contrastText: '#fff'
    },
    background: {
      default: '#0d1a2d',
      paper: '#15273f'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
