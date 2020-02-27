import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useState } from 'react';
import { globalStyles } from '../styles';
import { theme as initialTheme } from '../tailwind';
import { StaticKitProvider } from '@statickit/react';


export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(initialTheme);
  const Layout = Component.Layout || (x => x);

  let title = "bearjam.dev";
  if (pageProps.title) { title += ` | ${pageProps.title}` };

  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset"/>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <title>{title}</title>
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
