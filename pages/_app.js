import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import GithubTriangle from "../components/GithubTriangle";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
      <GithubTriangle />
    </ThirdwebProvider>
  );
}

export default MyApp;
