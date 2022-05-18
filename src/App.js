import React from 'react';
import { StylesProvider } from '../node_modules/@material-ui/core/index';
import { CssBaseline } from '../node_modules/@material-ui/core/index';
import GlobalStyle from './commons/constants/utils/styles/Global-style';
import Main from './contaniners/Main/index'



function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline/>
      <GlobalStyle/>
      <Main/>
    </StylesProvider>

  );
}

export default App;
