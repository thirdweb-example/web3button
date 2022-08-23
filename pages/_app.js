import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import GithubTriangle from "../components/GithubTriangle";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>thirdweb Web3Button</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="thirdweb Example Repository to show how to use the Web3Button UI Component"
        />
      </Head>
      <Component {...pageProps} />
      <GithubTriangle />
    </ThirdwebProvider>
  );
}

export default MyApp;
