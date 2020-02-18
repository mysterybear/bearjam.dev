import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useState } from 'react';
import { globalStyles } from '../styles';
import { theme as initialTheme } from '../tailwind.config';
import { StaticKitProvider } from '@statickit/react';
import '../base.css';

export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(initialTheme);
  const Layout = Component.Layout || (x => x);

  let title = "bearjam.dev";
  if (pageProps.title) { title += ` | ${pageProps.title}` };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <StaticKitProvider site="30a2d5288042">
          {Layout(<Component {...pageProps} />)}
        </StaticKitProvider>
      </ThemeProvider>
    </>
  );
};
