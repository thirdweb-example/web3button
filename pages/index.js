import { useAddress, Web3Button } from "@thirdweb-dev/react";
import { useRef, useState } from "react";
import CodeSnippet from "../components/DemoCodeSnippet";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();

  const uploadFile = () => {
    if (fileInputRef?.current) {
      fileInputRef.current.click();

      fileInputRef.current.onchange = () => {
        if (fileInputRef?.current?.files?.length) {
          const file = fileInputRef.current.files[0];
          setFile(file);
        }
      };
    }
  };

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

      {file ? (
        <img
          src={URL.createObjectURL(file)}
          style={{ cursor: "pointer", maxHeight: 250, borderRadius: 8 }}
          onClick={() => setFile(undefined)}
        />
      ) : (
        <div
          className={styles.imageInput}
          onClick={uploadFile}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            setFile(e.dataTransfer.files[0]);
          }}
        >
          Drag and drop an image here to upload it!
        </div>
      )}
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        id="profile-picture-input"
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      <Web3Button
        // The contract address
        contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
        // Access the contract itself, perform any action you want on it:
        action={(contract) =>
          contract.nft.mint.to(address, {
            name: "Hello world!",
            // Image can be a File, or any url that points to a file.
            image: file,
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
        text={`const [file, setFile] = useState();

export default function Home() {
  <Web3Button
    // The contract address
    contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
    // Access the contract itself, perform any action you want on it:
    action={(contract) =>
      contract.nft.mint.to(address, {
        name: "Hello world!",
        // Image can be a File, or any url that points to a file
        image: file,
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
}`}
      />
    </div>
  );
}
