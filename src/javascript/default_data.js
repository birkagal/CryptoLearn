/*
 * GAL   => priv: 1e6e41bae6d4e93c697fcefc93c8f9670db0bc90949d09d1479b3569a34e94e8 ||| pub: 04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86
 * NAOR  => priv: 327dda3557e6178ad53e4e0a60ed689366b30a5e6e3d4131794ce10efcdc2080 ||| pub: 0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c
 * SOPHIA   => priv: f7cdf32b51bdf7eea762e716dabae058a5073e33fdb256168a072cf5ac155b5d ||| pub: 04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857
 * LUCAS   => priv: cef351f3981533d067f505623bc6d2e819650fd5c79661be246c9714b927dcc4 ||| pub: 04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39
 * EMILY   => priv: 7396f7efd43ec1ba77a8886feab5142997d775033a3abcc1d84f225b9e4403a3 ||| pub: 042d078646c98e2cace55e047cd2b3737b5f15cd9eeeab0b2778915efae0eef3059a72cecd5f2f69208c84e6799991477ae7f0bfbdd0e553281e8457dcfed575b8
 * JACKSON   => priv: 44e961ba30601ab9dee610d9432ae2e788a87fc8500613238a941893322920bc ||| pub: 0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350
 * GRACE   => priv: 69a81f1498de5831d9a1bca2e426cfffeaa85f259c8bcba2b9be69bffe1896b6 ||| pub: 04e49a4212f6c397608089f47a6686a59f33239bcc9bd74c80410168278f3fe826e79347c765796b9341044ddeba100b617b8512481f3be04c3b447197034a723f
 * MICHA   => priv: 2f6e18359c1ffe4c3f252f9fcac6432867e203477e3e6e55a61dffd181739194 ||| pub: 04bba6497f4b7f7ffa921878b0f6120ba0851d851a2d47a76dbf32b0113bc9020f30c7650086cba00037268e01a0793051f5b579405721d1b37b55188083f2d1b9
 * RYAN   => priv: f7a0b05cfb76a228407e91dec882d74fa51f67a5107e0f6e2d32b61dacf4b4ac ||| pub: 048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d
 * KATHERINE   => priv: ddef78f2cff2e74357cef63c5a5266b941226ad4311396f98d74f94c131b56c7 ||| pub: 04131d42bee28c11145af65c7b4d16bbd4fee6b60e807bb1d0f92b24722799017cb0ed94ef19138e394697133b571f88afe151c51e74536885a1d0a519a137503d
 */

const data = [
  {
    default_coinbase: {
      amount: "100.00",
      name: "Gal",
      key: "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
    },
    default_transaction: [],
    default_nonces: {
      empty_nonce: 15438,
      transactional_nonce: 7773,
      coinbase_nonce: 9533,
      signed_nonce: 43684,
    },
  },
  {
    default_coinbase: {
      amount: "100.00",
      name: "Gal",
      key: "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
    },
    default_transaction: [
      {
        id: 0,
        amount: "10.00",
        from: "Gal",
        fromKey:
          "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
        to: "Naor",
        toKey:
          "0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c",
        signature:
          "3045022016526553223f293fdf12994aa9540af014a2f49f820f5359346a1021781afe24022100c99c239b27397ccd7749c1333d480e23adfc1421ed2051007c6ec2fd59be0eb5",
        verified: true,
      },
      {
        id: 1,
        amount: "20.00",
        from: "Gal",
        fromKey:
          "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
        to: "Sophia",
        toKey:
          "04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",
        signature:
          "304402207bb2a72941b337fdfe4d86c38737323d17baf0110695190efa806e68b18bf68f02204652ed91f66617cdeca742f42cbafbdd1146f1eeaa7885087fc164e1cf4b808f",
        verified: true,
      },
      {
        id: 2,
        amount: "15.00",
        from: "Gal",
        fromKey:
          "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
        to: "Lucas",
        toKey:
          "04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",
        signature:
          "3045022100fb2f47b2a3d0484126b040ccff33f634585e07755c323fd36c1c6ac7941df37002205045506ec88f3a8ffee786e71c8e9dc2cfadff251c77c3660f47d766f6a88b59",
        verified: true,
      },
      {
        id: 3,
        amount: "15.00",
        from: "Gal",
        fromKey:
          "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
        to: "Emily",
        toKey:
          "042d078646c98e2cace55e047cd2b3737b5f15cd9eeeab0b2778915efae0eef3059a72cecd5f2f69208c84e6799991477ae7f0bfbdd0e553281e8457dcfed575b8",
        signature:
          "304402204503ef5f11445ab38e2730ea722ac6308ce7a98a1bf9d30d7f644e5ba23a69a502203e4f7c7e1e0019777e7c35e4a27277b4474ba9d6dc5be0c50c8bbeac3d9d410d",
        verified: true,
      },
    ],
    default_nonces: {
      empty_nonce: 111010,
      transactional_nonce: 62439,
      coinbase_nonce: 43567,
      signed_nonce: 55709,
    },
  },
  {
    default_coinbase: {
      amount: "50.00",
      name: "Naor",
      key: "0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c",
    },
    default_transaction: [
      {
        id: 0,
        amount: "10.00",
        from: "Naor",
        fromKey:
          "0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "304402202a643899aa2277589ff474d05d25e61c0b60353445d7694ca514915db8a5c93f02200a9ff244f7888f4d0ce3b48b1bad9804999b51de9d9772ee47b38dd44eb332d0",
        verified: true,
      },
      {
        id: 1,
        amount: "5.00",
        from: "Emily",
        fromKey:
          "042d078646c98e2cace55e047cd2b3737b5f15cd9eeeab0b2778915efae0eef3059a72cecd5f2f69208c84e6799991477ae7f0bfbdd0e553281e8457dcfed575b8",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "3045022100aec8469c9c666f3b5c0640ebf706c4ac3e62832d1577e3462b393d566dcbc98702200f5ca83ad92147a3064a21918b62fb8e6636d309b85a10b509279e8e8a485dff",
        verified: true,
      },
      {
        id: 2,
        amount: "20.00",
        from: "Gal",
        fromKey:
          "04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",
        to: "Grace",
        toKey:
          "04e49a4212f6c397608089f47a6686a59f33239bcc9bd74c80410168278f3fe826e79347c765796b9341044ddeba100b617b8512481f3be04c3b447197034a723f",
        signature:
          "3045022100e27d2bd61fed9b91483941c7692c8d801bb4174bddeffc6a3b5de4a18ff603430220654b28db8fb39d5e4f27becfcfb0319cec43c5187e7b4264be9b10b3acfcd80c",
        verified: true,
      },
    ],
    default_nonces: {
      empty_nonce: 46936,
      transactional_nonce: 189430,
      coinbase_nonce: 2172,
      signed_nonce: 56246,
    },
  },
  {
    default_coinbase: {
      amount: "25.00",
      name: "Micha",
      key: "04bba6497f4b7f7ffa921878b0f6120ba0851d851a2d47a76dbf32b0113bc9020f30c7650086cba00037268e01a0793051f5b579405721d1b37b55188083f2d1b9",
    },
    default_transaction: [
      {
        id: 0,
        amount: "15.00",
        from: "Jackson",
        fromKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "3044022041e13315213b663d4a61a90cafd9bd8aa1fa7a34a565e8edb61b10dfb77f387602206cf4dab1a52877162d0178e3b55a86d1863135aa4cc9cef46d81636af8404e36",
        verified: true,
      },
      {
        id: 1,
        amount: "5.00",
        from: "Sophia",
        fromKey:
          "04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",
        to: "Lucas",
        toKey:
          "04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",
        signature:
          "304502207f7908920e1a08258ca4a513020ba4164e4a18b715ec1017d8663a8c4507e6ec0221009e8e0d46d55ee0c458f6991d79265e9e56185820ed1cc39a2da41794ecb833be",
        verified: true,
      },
      {
        id: 2,
        amount: "8.00",
        from: "Lucas",
        fromKey:
          "04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "3045022100fb943448069ad9969148d8e6d0d27b3efe4fe7713e18436695e8367b240204af022022c4cbc0964678e898e188bda442e15431e90c282d00bbda1f2668062bf188db",
        verified: true,
      },
    ],
    default_nonces: {
      empty_nonce: 10314,
      transactional_nonce: 56402,
      coinbase_nonce: 115654,
      signed_nonce: 926,
    },
  },
  {
    default_coinbase: {
      amount: "10.00",
      name: "Ryan",
      key: "048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d",
    },
    default_transaction: [
      {
        id: 0,
        amount: "2.00",
        from: "Jackson",
        fromKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "30450220751b0479ac83aebc8aad68ab080a0a22ec493f8a96bc45cd001148122202aaec022100e5fd710354d0346aae437de7d3bef3e729b1793340247670ddb23408404da503",
        verified: true,
      },
      {
        id: 1,
        amount: "6.00",
        from: "Ryan",
        fromKey:
          "048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "30450220589b1c7779a10a722217f654366c8ddcc26da3ec3f23dc83b6df6748600a38f7022100c7aa1ded5281bfdaf34f733cf7ea332971018f955d69f6441dcf78000a942556",
        verified: true,
      },
      {
        id: 2,
        amount: "4.00",
        from: "Ryan",
        fromKey:
          "048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d",
        to: "Katherine",
        toKey:
          "04131d42bee28c11145af65c7b4d16bbd4fee6b60e807bb1d0f92b24722799017cb0ed94ef19138e394697133b571f88afe151c51e74536885a1d0a519a137503d",
        signature:
          "3046022100d98e356bf0a57c10bc1ac0ef900f2bee2a3af48b1869d5bf2762e4eb19a0016b022100bf028b63b45df1564355416c6ea3a7d4b7390428c133ac32c515e073492c3586",
        verified: true,
      },
      {
        id: 3,
        amount: "9.95",
        from: "Sophia",
        fromKey:
          "04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",
        to: "Jackson",
        toKey:
          "0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",
        signature:
          "304402203fcecc3d94867c0edbc38698e584b6022988062c6aba426ffa42ef49b3646627022027fef19562f217cd6441796618d0b804e768badcad53777295e6a3f0df5d56e7",
        verified: true,
      },
    ],
    default_nonces: {
      empty_nonce: 108648,
      transactional_nonce: 12461,
      coinbase_nonce: 82985,
      signed_nonce: 26126,
    },
  },
];

export default data;
