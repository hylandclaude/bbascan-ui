import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import * as Sentry from "@sentry/react";

import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://1461315772b645a58897178afb40f6eb@o4504830569938944.ingest.sentry.io/4504830571642880",
  });
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
          <Head>
            <title>BBASCAN | Block Explorer</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
                <Component {...pageProps} />
                <Footer/>
              </ContentContainer>
            </div>
          </ContextProvider>
        </>
    );
};

export default App;
