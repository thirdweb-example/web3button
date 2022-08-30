# Web3Button

This template shows you how you can use our `Web3Button` component from our React SDK to call any function on any smart contract; and ensure the user:

- Has their wallet connected
- Is on the correct network (as defined in [\_app.js](./pages/_app.js))

before attempting to call the function.

```jsx
<Web3Button
  // The contract address
  contractAddress="0x424037abd63d32595bD843791ab015C31c87Cb6d"
  // Access the contract itself, perform any action you want on it:
  action={(contract) =>
    contract.nft.mint.to(address, {
      name: "Hello world!",
      // Image can be a File, or any url that points to a file
      image: myFile,
      description: "Your awesome NFT",
    })
  }
  // Or just call the function name and parameters directly:
  // functionName="mintTo"
  // // The mintTo Function on this contract accepts two parameters, we can pass them in an array here.
  // params={[
  //   // First parameter is the address to mint to
  //   address,
  //   // Second parameter is the metadata URI
  //   "ipfs://Qmf9csTfndWRgH2z35WUBm9jTuQKfSv1dJC9YKW6iTZkDP/0",
  // ]}

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
```
