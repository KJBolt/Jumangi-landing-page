import React from 'react'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import {createTheme, ThemeProvider} from '@mui/material';
import { red, brown } from '@mui/material/colors';

// Mui Custom theme
const theme = createTheme({
  palette: {
      primary: {
          main: '#fff'
      },
      secondary: red,
      success: brown,
  },
  typography: {
      fontFamily: 'Poppins',
      fontWeightLight: 300,
      fontWeightBold: 800,
      fontWeightRegular: 700,
      fontWeightMedium: 500
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Homepage />
    </ThemeProvider>
  )
}

export default App;
