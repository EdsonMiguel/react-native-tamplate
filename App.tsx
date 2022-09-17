import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

