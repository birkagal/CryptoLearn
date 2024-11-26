(this.webpackJsonpcryptolearn=this.webpackJsonpcryptolearn||[]).push([[0],{63:function(e,a){},70:function(e,a,c){},71:function(e,a,c){"use strict";c.r(a);var t=c(0),b=c.n(t),n=c(18),s=c.n(n),d=c(39),o=c(8),r=(c(61),c(76)),i=c(83),l=c(81),f=c(77),j=c(51),h=c(52),m=c(78),u=c(50),x=c.n(u);const O=async e=>{e=e.replaceAll(/[#%\\]/g,"1");const a=await fetch("https://cryptolearn-api.onrender.com/"+e);return await a.json()};var g={difficulty:4,bg_colors:{ok:"#d7efdee8",bad:"#efd7d9e8",header:"#f5f5f5"}},p=c(1);var y=e=>{let{page_title:a,flags:c,id:n,default_nonces:s,default_nonce:d,default_coinbase:o,default_transaction:u,add_prev_hash_setter:y,set_next_prev_hash:v}=e;const[k,C]=Object(t.useState)(n||1),[A,w]=Object(t.useState)(c.id?d||(c.sign?s.signed_nonce:c.coinbase?s.coinbase_nonce:c.tx?s.transactional_nonce:s.empty_nonce):0),[N,K]=Object(t.useState)(c.coinbase?c.sign?{amount:o.amount,key:o.key}:{amount:o.amount,name:o.name}:""),[_,L]=Object(t.useState)(c.tx?u:""),[S,F]=Object(t.useState)(""),[T,B]=Object(t.useState)(""),[J,I]=Object(t.useState)(g.bg_colors.header),[P,G]=Object(t.useState)(!1),Z=(e,a,t)=>{let b=[..._];if("amount"!==e&&c.sign&&(e+="Key"),b[t][e]=a,b[t].amount=Number(b[t].amount).toFixed(2),c.sign){let e=b[t].amount+b[t].fromKey+b[t].toKey;O(`key/verify/${b[t].fromKey}/${b[t].signature}/${e}`).then((e=>{b[t].verified=e.status,L(b)}))}else L(b)};return Object(t.useEffect)((()=>{c.prev&&y(n,F)}),[c.prev,y,F,n]),Object(t.useEffect)((()=>{c.prev&&v(n,T)}),[T,c.prev,v,n]),Object(t.useEffect)((()=>{let e=JSON.stringify(_).replace(/\\n/g,""),a=k+JSON.stringify(N)+e+S+A,t=x()(a).toString();B(t),c.id&&(t.substring(0,g.difficulty)!==Array(g.difficulty+1).join("0")?I(g.bg_colors.bad):I(g.bg_colors.ok))}),[k,A,N,_,S,c.id]),Object(p.jsx)(r.a,{children:Object(p.jsxs)(i.a,{className:"mx-auto",style:{width:c.chain?"40rem":"100%"},children:[!c.chain&&Object(p.jsx)(i.a.Header,{style:{backgroundColor:g.bg_colors.header},children:Object(p.jsx)("h3",{children:a})}),Object(p.jsxs)(i.a.Body,{style:{backgroundColor:J},children:[Object(p.jsxs)(l.a,{children:[c.id&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"index",column:!0,children:"Block:"}),Object(p.jsx)(j.a,{xs:"10",children:Object(p.jsx)(l.a.Control,{id:"index",type:"number",autoComplete:"off",min:"1",value:k,onChange:e=>C(e.target.value)})})]}),c.nonce&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"nonce",column:!0,children:"Nonce:"}),Object(p.jsx)(j.a,{xs:"10",children:Object(p.jsx)(l.a.Control,{id:"nonce",type:"number",autoComplete:"off",value:A,onChange:e=>w(e.target.value)})})]}),c.coinbase&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"coinbase",column:!0,children:"Coinbase:"}),Object(p.jsx)(j.a,{xs:4,children:Object(p.jsx)(l.a.Control,{id:"coinbase",type:"number",autoComplete:"off",step:"0.5",value:N.amount,onChange:e=>K({...N,amount:Number(e.target.value).toFixed(2)})})}),Object(p.jsx)(l.a.Label,{column:!0,children:"------\x3e"}),Object(p.jsx)(j.a,{xs:4,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:c.sign?N.key:N.name,onChange:e=>c.sign?K({...N,key:e.target.value}):K({...N,name:e.target.value})})})]}),!c.tx&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"data",column:!0,children:"Data:"}),Object(p.jsx)(j.a,{xs:10,children:Object(p.jsx)(l.a.Control,{id:"data",as:"textarea",rows:5,autoComplete:"off",value:_,onChange:e=>L(e.target.value.replaceAll("/",""))})})]}),c.tx&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"tx",column:!0,children:"Tx:"}),_.map((e=>Object(p.jsxs)(b.a.Fragment,{children:[Object(p.jsxs)(f.a,{children:[Object(p.jsx)(l.a.Label,{column:!0,children:"$"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{type:"number",step:"0.5",autoComplete:"off",value:e.amount,onChange:a=>Z("amount",a.target.value,e.id)})}),Object(p.jsx)(l.a.Label,{column:!0,children:"From:"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:c.sign?e.fromKey:e.from,onChange:a=>Z("from",a.target.value,e.id)})}),Object(p.jsx)(l.a.Label,{column:!0,children:"->"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{size:"sm",autoComplete:"off",value:c.sign?e.toKey:e.to,onChange:a=>Z("to",a.target.value,e.id)})})]}),c.sign&&Object(p.jsxs)(f.a,{children:[Object(p.jsx)(l.a.Label,{column:!0,children:"Sig:"}),Object(p.jsx)(j.a,{xs:11,children:Object(p.jsx)(l.a.Control,{disabled:"disabled",style:e.verified?{color:"black"}:{color:"red"},value:e.signature,onChange:a=>Z("signature",a.target.value,e.id)})})]})]},e.id)))]}),c.prev&&Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{column:!0,children:"Prev:"}),Object(p.jsx)(j.a,{xs:10,children:Object(p.jsx)(l.a.Control,{value:S,disabled:"disabled"})})]}),Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{column:!0,children:"Hash: "}),Object(p.jsx)(j.a,{xs:10,children:Object(p.jsx)(l.a.Control,{value:T,disabled:"disabled"})})]})]}),c.mine&&Object(p.jsx)(r.a,{className:"text-center",children:Object(p.jsxs)(h.a,{onClick:()=>{G(!0);let e=JSON.stringify(_).replace(/\\n/g,""),a=k+JSON.stringify(N)+e+S;O(`mine/${a}/${g.difficulty}`).then((e=>{w(e.nonce),G(!1)}))},disabled:P,size:"lg",children:["Mine\t",P&&Object(p.jsx)(m.a,{className:"ms-1",as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})]})})]})]})})};var v=[{default_coinbase:{amount:"100.00",name:"Gal",key:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86"},default_transaction:[],default_nonces:{empty_nonce:15438,transactional_nonce:7773,coinbase_nonce:9533,signed_nonce:43684}},{default_coinbase:{amount:"100.00",name:"Gal",key:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86"},default_transaction:[{id:0,amount:"10.00",from:"Gal",fromKey:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",to:"Naor",toKey:"0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c",signature:"3045022016526553223f293fdf12994aa9540af014a2f49f820f5359346a1021781afe24022100c99c239b27397ccd7749c1333d480e23adfc1421ed2051007c6ec2fd59be0eb5",verified:!0},{id:1,amount:"20.00",from:"Gal",fromKey:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",to:"Sophia",toKey:"04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",signature:"304402207bb2a72941b337fdfe4d86c38737323d17baf0110695190efa806e68b18bf68f02204652ed91f66617cdeca742f42cbafbdd1146f1eeaa7885087fc164e1cf4b808f",verified:!0},{id:2,amount:"15.00",from:"Gal",fromKey:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",to:"Lucas",toKey:"04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",signature:"3045022100fb2f47b2a3d0484126b040ccff33f634585e07755c323fd36c1c6ac7941df37002205045506ec88f3a8ffee786e71c8e9dc2cfadff251c77c3660f47d766f6a88b59",verified:!0},{id:3,amount:"15.00",from:"Gal",fromKey:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",to:"Emily",toKey:"042d078646c98e2cace55e047cd2b3737b5f15cd9eeeab0b2778915efae0eef3059a72cecd5f2f69208c84e6799991477ae7f0bfbdd0e553281e8457dcfed575b8",signature:"304402204503ef5f11445ab38e2730ea722ac6308ce7a98a1bf9d30d7f644e5ba23a69a502203e4f7c7e1e0019777e7c35e4a27277b4474ba9d6dc5be0c50c8bbeac3d9d410d",verified:!0}],default_nonces:{empty_nonce:111010,transactional_nonce:62439,coinbase_nonce:43567,signed_nonce:55709}},{default_coinbase:{amount:"50.00",name:"Naor",key:"0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c"},default_transaction:[{id:0,amount:"10.00",from:"Naor",fromKey:"0499d3f9d980a2df8ea5ec9d5ea9f5c1f49e94586c6465dbec2a7ea8b1399bd8c97ee926157c71b7408cf8d76cfe0821a4b5ff71b0f433823a7c3b80d5407f644c",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"304402202a643899aa2277589ff474d05d25e61c0b60353445d7694ca514915db8a5c93f02200a9ff244f7888f4d0ce3b48b1bad9804999b51de9d9772ee47b38dd44eb332d0",verified:!0},{id:1,amount:"5.00",from:"Emily",fromKey:"042d078646c98e2cace55e047cd2b3737b5f15cd9eeeab0b2778915efae0eef3059a72cecd5f2f69208c84e6799991477ae7f0bfbdd0e553281e8457dcfed575b8",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"3045022100aec8469c9c666f3b5c0640ebf706c4ac3e62832d1577e3462b393d566dcbc98702200f5ca83ad92147a3064a21918b62fb8e6636d309b85a10b509279e8e8a485dff",verified:!0},{id:2,amount:"20.00",from:"Gal",fromKey:"04e1204d8452430809a53810771bb395081141c5cacd04b96140d9c3036cdad767e9bccfe8ab953265cabf7afa40f0579905865df6d97571002e781b19720aaa86",to:"Grace",toKey:"04e49a4212f6c397608089f47a6686a59f33239bcc9bd74c80410168278f3fe826e79347c765796b9341044ddeba100b617b8512481f3be04c3b447197034a723f",signature:"3045022100e27d2bd61fed9b91483941c7692c8d801bb4174bddeffc6a3b5de4a18ff603430220654b28db8fb39d5e4f27becfcfb0319cec43c5187e7b4264be9b10b3acfcd80c",verified:!0}],default_nonces:{empty_nonce:46936,transactional_nonce:189430,coinbase_nonce:2172,signed_nonce:56246}},{default_coinbase:{amount:"25.00",name:"Micha",key:"04bba6497f4b7f7ffa921878b0f6120ba0851d851a2d47a76dbf32b0113bc9020f30c7650086cba00037268e01a0793051f5b579405721d1b37b55188083f2d1b9"},default_transaction:[{id:0,amount:"15.00",from:"Jackson",fromKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"3044022041e13315213b663d4a61a90cafd9bd8aa1fa7a34a565e8edb61b10dfb77f387602206cf4dab1a52877162d0178e3b55a86d1863135aa4cc9cef46d81636af8404e36",verified:!0},{id:1,amount:"5.00",from:"Sophia",fromKey:"04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",to:"Lucas",toKey:"04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",signature:"304502207f7908920e1a08258ca4a513020ba4164e4a18b715ec1017d8663a8c4507e6ec0221009e8e0d46d55ee0c458f6991d79265e9e56185820ed1cc39a2da41794ecb833be",verified:!0},{id:2,amount:"8.00",from:"Lucas",fromKey:"04b9830e904a6236f4c9a2a050842c7f5bf39b90755e0153e138ce8cb4ed60afa1403372c3bf2b57f551cdebaa9084453f4e7a4c2f3b106f8752210c552c4cda39",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"3045022100fb943448069ad9969148d8e6d0d27b3efe4fe7713e18436695e8367b240204af022022c4cbc0964678e898e188bda442e15431e90c282d00bbda1f2668062bf188db",verified:!0}],default_nonces:{empty_nonce:10314,transactional_nonce:56402,coinbase_nonce:115654,signed_nonce:926}},{default_coinbase:{amount:"10.00",name:"Ryan",key:"048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d"},default_transaction:[{id:0,amount:"2.00",from:"Jackson",fromKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"30450220751b0479ac83aebc8aad68ab080a0a22ec493f8a96bc45cd001148122202aaec022100e5fd710354d0346aae437de7d3bef3e729b1793340247670ddb23408404da503",verified:!0},{id:1,amount:"6.00",from:"Ryan",fromKey:"048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"30450220589b1c7779a10a722217f654366c8ddcc26da3ec3f23dc83b6df6748600a38f7022100c7aa1ded5281bfdaf34f733cf7ea332971018f955d69f6441dcf78000a942556",verified:!0},{id:2,amount:"4.00",from:"Ryan",fromKey:"048c46c66783ba209bf22cb0e31c5da3d7fcb2fd849521effbf7fad69ca28c1d039ecae7be3b6cde642b3bfb7713294f2b4e04a357c0f483555ca611067863ea9d",to:"Katherine",toKey:"04131d42bee28c11145af65c7b4d16bbd4fee6b60e807bb1d0f92b24722799017cb0ed94ef19138e394697133b571f88afe151c51e74536885a1d0a519a137503d",signature:"3046022100d98e356bf0a57c10bc1ac0ef900f2bee2a3af48b1869d5bf2762e4eb19a0016b022100bf028b63b45df1564355416c6ea3a7d4b7390428c133ac32c515e073492c3586",verified:!0},{id:3,amount:"9.95",from:"Sophia",fromKey:"04ea4762de11cdc1bd53a86e6a39c5117defe9ca688b9d361dba6f45b4aa05be23ec20e3c25ec95f16866ad676825c25bda704a13a0c277d000bca7c890b17c857",to:"Jackson",toKey:"0463fce03c4b3f71883db6547890390cc93e671aecc1e845b751b19af822fea487fa7970ff27e598b1c809e0b64b07ba3e59d7f0ebbe8f77fcbc45ad5c6bdb0350",signature:"304402203fcecc3d94867c0edbc38698e584b6022988062c6aba426ffa42ef49b3646627022027fef19562f217cd6441796618d0b804e768badcad53777295e6a3f0df5d56e7",verified:!0}],default_nonces:{empty_nonce:108648,transactional_nonce:12461,coinbase_nonce:82985,signed_nonce:26126}}];var k=e=>{let{page_title:a,peer_title:c,flags:t}=e;const b={...t,id:!0,nonce:!0,prev:!0,chain:!0,mine:!0};var n=[...Array(5)];const s=(e,a)=>{1===e&&n[e-1]("0".repeat(64)),e<5&&n[e]&&n[e](a)},d=(e,a)=>{n[e-1]=a};return Object(p.jsxs)(r.a,{fluid:!0,children:[Object(p.jsx)("h1",{children:a}),Object(p.jsx)("h4",{children:c}),Object(p.jsx)(f.a,{className:"flex-nowrap",style:{overflowX:"scroll"},children:v.map(((e,a)=>Object(p.jsx)(j.a,{className:"pb-2",children:Object(p.jsx)(y,{...e,flags:b,id:a+1,set_next_prev_hash:s,add_prev_hash_setter:d})},a)))})]})},C=c(84),A=c(79),w=c(35);var N=e=>{let{page_title:a,flags:c,default_transaction:b}=e;const[n,s]=Object(t.useState)(""),[d,o]=Object(t.useState)(""),[m,u]=Object(t.useState)(c.tx?b:""),[x,y]=Object(t.useState)(""),[v,k]=Object(t.useState)(""),[N,K]=Object(t.useState)(g.bg_colors.header);Object(t.useEffect)((()=>{O("key/getpriv").then((e=>s(e.key)))}),[]),Object(t.useEffect)((()=>{O("key/getpub").then((e=>o(e.key)))}),[n]),Object(t.useEffect)((()=>{k(x)}),[x]),Object(t.useEffect)((()=>{K(g.bg_colors.header)}),[d,m,v]);const _=async e=>{O(`key/update/${e}`).then((e=>e.priv&&s(e.priv)))};return Object(p.jsx)(r.a,{children:Object(p.jsxs)(i.a,{style:{width:"70rem"},children:[Object(p.jsx)(i.a.Header,{style:{backgroundColor:g.bg_colors.header},children:Object(p.jsx)("h3",{children:a})}),Object(p.jsx)(i.a.Body,{style:{backgroundColor:N},children:Object(p.jsxs)(l.a,{children:[c.keys&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a.Label,{htmlFor:"privkey",children:"Private Key: "}),Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(j.a,{xs:10,children:Object(p.jsx)(l.a.Control,{id:"privkey",autoComplete:"off",value:n,onChange:e=>_(e.target.value)})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(h.a,{variant:"primary",onClick:()=>_("random"),children:"Random"})})]}),Object(p.jsx)(l.a.Label,{children:"Public Key: "}),Object(p.jsx)(l.a.Control,{value:d,disabled:"disabled"})]}),!c.keys&&Object(p.jsxs)(C.a,{defaultActiveKey:"sign",children:[Object(p.jsxs)(A.a,{eventKey:"sign",title:"Sign",children:[c.tx&&Object(p.jsxs)(f.a,{className:"mb-3 mt-3",children:[Object(p.jsx)(l.a.Label,{column:!0,children:"Transaction:$"}),Object(p.jsx)(j.a,{xs:2,children:Object(p.jsx)(l.a.Control,{type:"number",step:"0.5",autoComplete:"off",value:m.amount,onChange:e=>u({...m,amount:Number(e.target.value).toFixed(2)})})}),Object(p.jsx)(l.a.Label,{column:!0,children:"From:"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:d,onChange:e=>o(e.target.value.replaceAll("/",""))})}),Object(p.jsx)(l.a.Label,{column:!0,children:"-----------\x3e"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:m.to,onChange:e=>u({...m,to:e.target.value.replaceAll("/","")})})})]}),!c.tx&&Object(p.jsxs)(f.a,{className:"mb-3 mt-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"sign-message",children:"Message: "}),Object(p.jsx)(l.a.Control,{id:"sign-message",as:"textarea",rows:4,autoComplete:"off",value:m,onChange:e=>u(e.target.value.replaceAll("/",""))})]}),Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"priv",children:"Private Key:"}),Object(p.jsx)(l.a.Control,{id:"priv",autoComplete:"off",value:n,onChange:e=>_(e.target.value.replaceAll("/",""))})]}),Object(p.jsx)(f.a,{className:"mb-3 p-2",children:Object(p.jsx)(h.a,{variant:"primary",onClick:()=>{let e;e=c.tx?Number(m.amount).toFixed(2)+d+m.to:m.replace(/\\n/g,""),O(`key/sign/${e}`).then((e=>y(e.signature)))},children:"Sign"})}),Object(p.jsxs)(l.a.Label,{children:[c.tx?"Transaction":"Message"," Signature:"]}),Object(p.jsx)(l.a.Control,{value:x,disabled:"disabled"})]}),Object(p.jsx)(A.a,{eventKey:"verify",title:"Verify",children:Object(p.jsxs)(w.a,{children:[c.tx&&Object(p.jsxs)(f.a,{className:"pb-3 mt-3",children:[Object(p.jsx)(l.a.Label,{column:!0,children:"Transaction:$"}),Object(p.jsx)(j.a,{xs:2,children:Object(p.jsx)(l.a.Control,{type:"number",step:"0.5",autoComplete:"off",value:m.amount,onChange:e=>u({...m,amount:Number(e.target.value).toFixed(2)})})}),Object(p.jsx)(l.a.Label,{column:!0,children:"From:"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:d,onChange:e=>o(e.target.value.replaceAll("/",""))})}),Object(p.jsx)(l.a.Label,{column:!0,children:"-----------\x3e"}),Object(p.jsx)(j.a,{xs:3,children:Object(p.jsx)(l.a.Control,{autoComplete:"off",value:m.to,onChange:e=>u({...m,to:e.target.value.replaceAll("/","")})})})]}),!c.tx&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(f.a,{className:"mb-3 mt-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"verify-message",children:"Message:"}),Object(p.jsx)(l.a.Control,{id:"verify-message",as:"textarea",rows:4,autoComplete:"off",value:m,onChange:e=>u(e.target.value.replaceAll("/",""))})]}),Object(p.jsxs)(f.a,{className:"mb-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"pub",children:"Public Key: "}),Object(p.jsx)(l.a.Control,{id:"pub",autoComplete:"off",value:d,onChange:e=>o(e.target.value.replaceAll("/",""))})]})]}),Object(p.jsxs)(f.a,{className:"mb-3 mt-3",children:[Object(p.jsx)(l.a.Label,{htmlFor:"sig",children:"Signature: "}),Object(p.jsx)(l.a.Control,{id:"sig",value:v,onChange:e=>k(e.target.value.replaceAll("/",""))})]}),Object(p.jsx)(f.a,{className:"p-2",children:Object(p.jsx)(h.a,{variant:"primary",onClick:()=>{let e;e=c.tx?Number(m.amount).toFixed(2)+d+m.to:m.replace(/\\n/g,""),O(`key/verify/${d}/${v}/${e}`).then((e=>{e.status?K(g.bg_colors.ok):K(g.bg_colors.bad)}))},children:"Verify"})})]})})]})]})})]})})},K=c(82),_=c(56),L=c(80);var S=()=>Object(p.jsxs)(K.a,{bg:"dark",variant:"dark",fixed:"top",children:[Object(p.jsxs)(K.a.Brand,{className:"ms-3",href:"/cryptolearn/#/",children:[Object(p.jsx)("img",{alt:"",src:"data:image/png;base64,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",width:"32",height:"32",className:"d-inline-block align-top"}),"\xa0\xa0CryptoLearn"]}),Object(p.jsxs)(_.a,{className:"m-auto pe-5",children:[Object(p.jsx)(_.a.Link,{href:"/cryptolearn/#/",children:"Home"}),Object(p.jsxs)(L.a,{title:" Blocks",id:"blocks-nav-dropdown",children:[Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/hash",children:"Hash"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/block",children:"Block"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/blockchain",children:"Blockchain"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/distributed",children:"Distributed"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/tokens",children:"Tokens"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/coinbase",children:"Coinbase"})]}),Object(p.jsxs)(L.a,{title:"Keys",id:"blocks-nav-dropdown",children:[Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/keys",children:"Keys"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/signatures",children:"Signatures"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/transactions",children:"Transactions"}),Object(p.jsx)(L.a.Item,{href:"/cryptolearn/#/signedblockchain",children:"Signed Blockchains"})]})]}),Object(p.jsx)(_.a,{className:"px-5",children:Object(p.jsx)(_.a.Link,{href:"https://github.com/birkagal/cryptolearn",target:"_blank",children:"Source on Github"})})]}),F=c.p+"static/media/logo.4f335410.png";var T=()=>Object(p.jsx)(r.a,{className:"text-center",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(i.a.Header,{children:Object(p.jsx)("h3",{children:"Welcome to CryptoLearn"})}),Object(p.jsxs)(i.a.Body,{children:[Object(p.jsx)(i.a.Title,{children:"Simple web-based application for demonstration of blockchain concepts."}),Object(p.jsx)(i.a.Text,{children:"This website created as a very basic visual introduction to the concepts behind a blockchain. We introduce the idea of hash, blocks, transaction and coinbase wallet using an interactive web demo. We also show the concept of Keys, Online signatures in a visual way."}),Object(p.jsx)(i.a.Subtitle,{children:Object(p.jsx)("h4",{children:"How To Use"})}),Object(p.jsx)(i.a.Text,{children:"Use the nagivation bar at the top to navigate between different pages."}),Object(p.jsx)(i.a.Subtitle,{children:"Hash Page"}),Object(p.jsx)(i.a.Text,{children:"Hash page is used to understand the basics of the hash function. The website uses SHA256 as the function and you can type in the data input and look at the changes to the output."}),Object(p.jsx)(i.a.Subtitle,{children:"Block Pages"}),Object(p.jsx)(i.a.Text,{children:"After playing with Hash, you can start exploring the blocks and blockchain pages. Here we will build up out blockchain starting with a single Block, then adding up blocks into a blockchain. Next we distribute the blockchain to different peers and see the behaviour there. Lastly we add some Transaction instead of plain data and introduce the use of Wallet or Coinbase."}),Object(p.jsx)(i.a.Subtitle,{children:"Keys Pages"}),Object(p.jsx)(i.a.Text,{children:'After getting to know and playing with Blockchains, we introduce new conpect of Keys and Signatures. The first page allow you to play with key-pair generator using Elliptic Curve "secp256k1" to generate key-pair. Next, we use those key-pair to sign a message. You can verify that signature and see how any changes to the input result in failed verification (red background). Then we once again replace the plain data with Transactions, and the final page show the use of Blockchain from previous pages, along side Key and Signatures which makes every Transaction signed. Intresting thing to see is any changes made to any Transaction result in red color text to that transaction, meaning that the signature does not match that transaction. You can still Mine the block and get valid hash, But the transaction would remain Red meaning someone tempered with it.'}),Object(p.jsx)("img",{src:F,alt:"website logo",width:"128",height:"128"}),Object(p.jsx)("span",{children:Object(p.jsx)(i.a.Text,{inline:!0,children:Object(p.jsxs)("h6",{style:{display:"inline"},children:["Designed and built by ",Object(p.jsx)(i.a.Link,{className:"website-link",href:"https://www.birkagal.com",target:"_blank",children:"Gal Birka"})," | ",Object(p.jsx)(i.a.Link,{className:"website-link m-0",href:"https://github.com/birkagal/cryptolearn",target:"_blank",children:"Source"})]})})})]})]})});var B=()=>Object(p.jsx)(y,{page_title:"SHA256 Hash",flags:{}});const J={id:!0,nonce:!0,mine:!0};var I=()=>Object(p.jsx)(y,{page_title:"Block",flags:J,default_nonce:24961});var P=()=>Object(p.jsx)(k,{page_title:"Blockchain"});var G=()=>Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{page_title:"Distributed Blockchain",peer_title:"Peer A"}),Object(p.jsx)(k,{peer_title:"Peer B"}),Object(p.jsx)(k,{peer_title:"Peer C"})]});const Z={tx:!0};var q=()=>Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{page_title:"Tokens",peer_title:"Peer A",flags:Z}),Object(p.jsx)(k,{peer_title:"Peer B",flags:Z}),Object(p.jsx)(k,{peer_title:"Peer C",flags:Z})]});const R={tx:!0,coinbase:!0};var E=()=>Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{page_title:"Coinbase Transactions",peer_title:"Peer A",flags:R}),Object(p.jsx)(k,{peer_title:"Peer B",flags:R}),Object(p.jsx)(k,{peer_title:"Peer C",flags:R})]});var M=()=>Object(p.jsx)(N,{page_title:"Public / Private Key Pairs",flags:{keys:!0}});var H=()=>Object(p.jsx)(N,{page_title:"Signatures",flags:{}});var U=()=>Object(p.jsx)(N,{page_title:"Transactions",flags:{tx:!0},default_transaction:{amount:"20.00",to:"04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74"}});const W={tx:!0,coinbase:!0,sign:!0};var V=()=>Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{page_title:"Signed Blockchain",peer_title:"Peer A",flags:W}),Object(p.jsx)(k,{peer_title:"Peer B",flags:W}),Object(p.jsx)(k,{peer_title:"Peer C",flags:W})]});var X=()=>Object(p.jsxs)(r.a,{className:"text-center",children:[Object(p.jsx)("h1",{children:"Oops!"}),Object(p.jsx)("h2",{children:"404 Not Found"}),Object(p.jsx)("h6",{children:"This page was not found!"}),Object(p.jsx)(d.b,{to:"/",className:"btn btn-primary",children:"Home Page"})]});c(70);var z=()=>(Object(t.useEffect)((()=>{O("")}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(d.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(p.jsx)(o.a,{path:"/hash",component:B}),Object(p.jsx)(o.a,{path:"/block",component:I}),Object(p.jsx)(o.a,{path:"/blockchain",component:P}),Object(p.jsx)(o.a,{path:"/distributed",component:G}),Object(p.jsx)(o.a,{path:"/tokens",component:q}),Object(p.jsx)(o.a,{path:"/coinbase",component:E}),Object(p.jsx)(o.a,{path:"/keys",component:M}),Object(p.jsx)(o.a,{path:"/signatures",component:H}),Object(p.jsx)(o.a,{path:"/transactions",component:U}),Object(p.jsx)(o.a,{path:"/signedblockchain",component:V}),Object(p.jsx)(o.a,{path:"*",component:X})]})})]}));s.a.render(Object(p.jsx)(z,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.e9f08957.chunk.js.map