import { useAddress, Web3Button } from "@thirdweb-dev/react";
import CodeSnippet from "../components/DemoCodeSnippet";
import styles from "../styles/Home.module.css";
import myFile from "../public/thirdweb.svg";

export default function Home() {
  const address = useAddress();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Web3 Button</h1>
      <p style={{ marginBottom: 0 }}>
        This button can run any function on any smart contract deployed with
        thirdweb.
      </p>
      <p style={{ marginBottom: 32 }}>
        First, it ensures you have a <b>connected wallet</b> and are on the{" "}
        <b>correct network</b>.
      </p>

      <Web3Button
        // The contract address
        contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
        // Access the contract itself, perform any action you want on it:
        action={(contract) =>
          contract.nft.mint.to(address, {
            name: "Hello world!",
            // Image can be a File, or any url that points to a file.
            image: new File([myFile], "myFile.svg"),
            description: "Your awesome NFT",
          })
        }
        // Some customization of colors and styling
        colorMode="light"
        accentColor="#F213A4"
        // If the function is successful, we can do something here.
        onSuccess={(result) => console.log(result)}
        // If the function fails, we can do something here.
        onError={(error) => console.error(error)}
      >
        Mint NFT
      </Web3Button>

      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      <h2>Code Snippet</h2>

      <CodeSnippet
        text={`<Web3Button
  // The contract address
  contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
  // Access the contract itself, perform any action you want on it:
  action={(contract) =>
    contract.nft.mint.to(address, {
      name: "Hello world!",
      // Image can be a File, or any url that points to a file
      image: "ipfs://Qmf9csTfndWRgH2z35WUBm9jTuQKfSv1dJC9YKW6iTZkDP/0",
      description: "Your awesome NFT",
    })
  }
  // Some customization of colors and styling
  colorMode="light"
  accentColor="#F213A4"
  // If the function is successful, we can do something here.
  onSuccess={(result) => console.log(result)}
  // If the function fails, we can do something here.
  onError={(error) => console.error(error)}
>
  Mint NFT
</Web3Button>`}
      />
    </div>
  );
}
