


# ![logo](https://i.ibb.co/2d8HbJP/crypto.png) CryptoLearn

![demo img](https://i.ibb.co/DRGKJmX/birkagal-github-io-cryptolearn.png)

> Simple web-based application for demonstration of ₿lockchain concepts.
> Check out the app @ https://www.birkagal.com/cryptolearn

This website created as a very basic visual introduction to the concepts behind a blockchain. We introduce the idea of [hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function), [blocks](https://en.wikipedia.org/wiki/Blockchain), transaction and coinbase wallet using an interactive web demo.\
We also show the concept of [Digital Signature](https://en.wikipedia.org/wiki/Digital_signature) using [Elliptic Curve](https://en.wikipedia.org/wiki/Elliptic_curve) keys in a visual way.

The project is built with Reactjs using [`react-hooks`](https://reactjs.org/docs/hooks-intro.html) and  [`react-router`](https://reactrouter.com/).\
Hashing is done using [`crypto-js`](https://www.npmjs.com/package/crypto-js) SHA256 cryptographic function.

The web app is hosted on [`Github`](https://birkagal.github.io/cryptolearn) using [`gh-pages`](https://www.npmjs.com/package/gh-pages) module.

# How to run locally
To run the web app on your machine, clone this repo `https://github.com/birkagal/cryptolearn.git`

Open terminal window at the project directory an run 

    npm install

To start the application use

    npm start

# TODO

 - [ ] Add difficulty control functionality.
 - [ ] Changing Number values effect on Hashing.


# How To Use

Use the nagivation bar at the top to navigate between different pages.

## Hash Page

Hash page is used to understand the basics of the hash function. The website uses [`SHA256`](https://en.wikipedia.org/wiki/SHA-2) as the function and you can type in the data input and look at the changes to the output.

## Block Pages

After playing with Hash, you can start exploring the blocks and blockchain pages. Here we will build up out blockchain starting with a single Block, then adding up blocks into a blockchain. Next we distribute the blockchain to different peers and see the behaviour there. Lastly we add some Transaction instead of plain data and introduce the use of Wallet or Coinbase.

## Key Pages

After getting to know and playing with Blockchains, we introduce new conpect of Keys and Signatures. The first page allow you to play with key-pair generator using Elliptic Curve "secp256k1" to generate key-pair. Next, we use those key-pair to sign a message. You can verify that signature and see how any changes to the input result in failed verification (red background). Then we once again replace the plain data with Transactions, and the final page show the use of Blockchain from previous pages, along side Key and Signatures which makes every Transaction signed. Intresting thing to see is any changes made to any Transaction result in red color text to that transaction, meaning that the signature does not match that transaction. You can still Mine the block and get valid hash, But the transaction would remain Red meaning someone tempered with it.

## Difficulty

The current default value for "number of leading zeroes", or the "difficulty" of the mining process is set to 4. That means that for a block to be mined, it needs to find a nonce such that the has value would have 4 starting zeroes.
*In future update, you would have the abillity to control that number.*

SHA256 produce 256 bit value. If we want the left K bits to be 0, we would need on **average** `2**K` (2 to the power K) attemps to find a nonce.
You can see that when number of zeroes increase, work to be done increase exceptionally.\
Since each hex value is translated to 4 bits, each time we increase the number of zeroes we make the puzzle `2**4=16` times harder.

If you adjust the difficulty from it's default, blocks will show up as not mined because the demo data assumes 4 zeros for a signed block.\
You can mine them and see how time differ based on the number of zeroes you choose.

For limitation purposes the maximum value for the difficulty can be set to 6, which would take this software few minutes to calculate.

In the [production bitcoin blockchain](https://www.blockchain.com/explorer), block `689,748` has the hash digest `00000000000000000004ad45c240fceb796d6b436cc7b6f90fb66fbb17977562`. That's 19 zeros in a row! That one block requires approximately `75,557,864,000,000,000,000,000` tried to find the correct nonce. 
For this software approximately 8,454,989,768,407,765 years require to mine this block. 

## Meta
Gal Birka - birkagal@gmail.com\
Distributed under the GNU General Public License v3.0. See LICENSE for more information.



