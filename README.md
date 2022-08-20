# Web3Button

This template shows you how you can use our `Web3Button` component from our React SDK to call any function on any smart contract; and ensure the user:

- Has their wallet connected
- Is on the correct network (as defined in [\_app.js](./pages/_app.js))

before attempting to call the function.

```jsx
<Web3Button
  // The contract address
  contractAddress="0xe0F5f8Bb09627B0A886D4CBd300Ba36cd9E522c6"
  // The name of the function to call on the contract
  functionName="mintTo"
  // Some customization of colors and styling
  colorMode="light"
  accentColor="#F213A4"
  // The mintTo Function on this contract accepts two parameters, we can pass them in an array here.
  params={[
    // First parameter is the address to mint to
    "0xb371d1C5629C70ACd726B20a045D197c256E1054",
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
```
