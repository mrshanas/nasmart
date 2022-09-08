import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.scss";
import Layout from "@/layouts/Layout";
import { persistor, store } from "@/store/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nasmart</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: "light",
              colors: {
                purple: ["#5222D0"],
              },
            }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
