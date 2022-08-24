import { useAddress, Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Web3 Button</h1>
      <p style={{ marginBottom: 0 }}>
        This button can run any function on any smart contract.
      </p>
      <p style={{ marginBottom: 32 }}>
        First, it ensures you have a <b>connected wallet</b> and are on the{" "}
        <b>correct network</b>.
      </p>

      <Web3Button
        // The contract address
        contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
        // The name of the function to call on the contract
        functionName="mintTo"
        // Some customization of colors and styling
        colorMode="light"
        accentColor="#F213A4"
        // The mintTo Function on this contract accepts two parameters, we can pass them in an array here.
        params={[
          // First parameter is the address to mint to
          address,
          // Second parameter is the metadata URI
          "ipfs://Qmf9csTfndWRgH2z35WUBm9jTuQKfSv1dJC9YKW6iTZkDP/0",
        ]}
        // If the function is successful, we can do something here.
        onSuccess={(result) => console.log(result)}
        // If the function fails, we can do something here.
        onError={(error) => console.error(error)}
      >
        Mint NFT
      </Web3Button>
    </div>
  );
}
