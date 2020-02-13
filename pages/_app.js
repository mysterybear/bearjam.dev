import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React, { useState } from 'react';
import { globalStyles } from '../styles';
import { theme as initialTheme } from '../tailwind';
import { StaticKitProvider } from '@statickit/react';
import { Tina, TinaCMS } from 'tinacms';
import { GitClient } from '@tinacms/git-client';

export default ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(initialTheme);
  const Layout = Component.Layout || (x => x);

  let title = "bearjam.dev";
  if (pageProps.title) { title += ` | ${pageProps.title}` };

  const client = new GitClient('http://localhost:3000/___tina')
  const cms = new TinaCMS({
    apis: {
      git: client,
    },
    sidebar: {
      hidden: process.env.NODE_ENV === "production"
    }
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Tina cms={cms}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <StaticKitProvider site="30a2d5288042">
            {Layout(<Component {...pageProps} />)}
          </StaticKitProvider>
        </ThemeProvider>
      </Tina>
    </>
  );
};
