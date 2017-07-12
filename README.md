# ethersign.github.io
A simple way to sign ECDSA pub/priv key pair challenges to prove ownership of an Ethereum account

Just visit http://ethersign.github.io

## How to use


Some ethereum apps may ask you to prove ownership of a particular public address or public key by sending you a cryptographic challenge and then asking you to reply with a signature response.  This response can only be generated using a private key and this should be done offline.  This simple app will generate the proper signature using the challenge and the private key.



http://www.richardrodger.com/2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/


http://browserify.org/
make bundle using
```
browserify js/node/node-app.js -o bundle.js

 ```

## Test Inputs

Cryptographic Challenge:

4a5c5d454721bbbb25540c3317521e71c373ae36458f960d2ad46ef088110e95

Etherum Private Key:

2c6036ab2f51cb1bfa17a3ffb57abf93a183d9d3887bc9e73cd28d9be57e4d56

Response should be:

0x041a261a9988d60cc59347c217ac32268b4491fd90b7d367b5392d7b20dd63fc1d10c56dae8666e9a860719d6d4772af6f5ead8ce1f9150a461b5b618a3e5ea300
