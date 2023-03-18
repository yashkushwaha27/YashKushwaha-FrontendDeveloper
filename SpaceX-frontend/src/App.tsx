import { HashRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Main from './Main';
import { PoppinsFonts } from '@theme/fontsFamily';

import Header from '@components/header';
import { colors } from '@theme/colors';

const App = () => (
  <HashRouter>
    <Global
      styles={[
        css`
          ${PoppinsFonts}
        `,
        {
          'html, body, #root': {
            height: '100%',
            padding: 0,
            margin: 0,
            fontFamily: "'Poppins','sans-sarif'",
            background: colors.black,
            scrollBehavior: 'smooth',
          },
        },
      ]}
    />
    <Header />
    <Main />
  </HashRouter>
);

export default App;
