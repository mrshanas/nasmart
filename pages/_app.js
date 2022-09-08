import { MantineProvider } from "@mantine/core";
import Head from "next/head";

import "@/styles/globals.scss";
import Layout from "@/layouts/Layout";

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
    </>
  );
}

export default MyApp;
