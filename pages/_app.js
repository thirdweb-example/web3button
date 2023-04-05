import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import GithubTriangle from "../components/GithubTriangle";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
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
