"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35703:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294);const a=function(e){var t,n=e.message,a=(0,o.useState)(!0),r=a[0],i=a[1];return o.createElement(o.Fragment,null,r&&o.createElement("div",{className:"message-box"},o.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),o.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},74789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(35703),s=["components"],l={id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},d=void 0,p={unversionedId:"learn/learn-guides-ledger",id:"learn/learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",description:"Polkadot-JS Guides for Ledger Devices.",source:"@site/../docs/learn/learn-guides-ledger.md",sourceDirName:"learn",slug:"/learn-guides-ledger",permalink:"/docs/learn-guides-ledger",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1721822512,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"learn-guides-ledger",title:"Polkadot-JS Guides for Ledger Devices",sidebar_label:"Ledger Guides",description:"Polkadot-JS Guides for Ledger Devices.",keywords:["ledger","polkadot-js"],slug:"../learn-guides-ledger"},sidebar:"docs",previous:{title:"Identity Guides",permalink:"/docs/learn-guides-identity"},next:{title:"Polkadot Vault Guides",permalink:"/docs/learn-guides-vault"}},c={},u=[{value:"Loading Your Account",id:"loading-your-account",level:2},{value:"Derivation paths",id:"derivation-paths",level:3},{value:"Connecting your ledger device",id:"connecting-your-ledger-device",level:3},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:2},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",level:2},{value:"Sending a Transfer with Ledger Devices",id:"sending-a-transfer-with-ledger-devices",level:2},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:2},{value:"Staking",id:"staking",level:2},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",level:2},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],h={toc:u},g="wrapper";function m(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)(g,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.kt)("h2",{id:"loading-your-account"},"Loading Your Account"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI as it can interfere with normal\noperation.")),(0,r.kt)("p",null,"You can import your Ledger account to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot-JS UI you can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,r.kt)("h3",{id:"derivation-paths"},"Derivation paths"),(0,r.kt)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,r.kt)("inlineCode",{parentName:"p"},"account type")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a\nPolkadot ledger account for the first time on\nLedger Live with name ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),"",", this\ncan be added to Polkadot-JS using the 0/0 derivation path (i.e. account type = 0 and account index =\n0). If you add a second account called\n",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 2"),"",", this will correspond to the\n1/0 derivation path, and so on. We thus have multiple parent accounts that can be viewed and used in\nboth Ledger Live and Polkadot-JS. Additionally, we can use Polkadot-JS UI to create multiple\nchildren accounts from each parent account. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),""," with 0/0 derivation path can\nhave child 0/1, 0/2, etc. that can be used within the UI. However, such children accounts cannot be\nused in Ledger Live, as it only scans through the parent accounts. So, remember that the balances on\nthe children accounts cannot be viewed, and you will not be able to transact with those accounts on\nLedger Live."),(0,r.kt)("h3",{id:"connecting-your-ledger-device"},"Connecting your ledger device"),(0,r.kt)("p",null,"While using a ledger device to sign transactions, depending on your browser and its security\nsettings, you might need to confirm the USB connection through a popup like the one below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Display the device connection popup",src:n(57302).Z,width:"468",height:"461"})),(0,r.kt)("p",null,'If you are adding your Ledger Nano for the first time, click on the "Unknown device" line and the\n"Connect" button will become available.'),(0,r.kt)("admonition",{title:"Signature error message",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the\nPolkadot application on your Ledger Nano\ndevice. Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,r.kt)("h2",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.kt)("p",null,"To display your Polkadot ledger account\naddress on your Ledger Nano, you can follow the guidelines on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181854-how-to-confirm-your-account-address-on-your-ledger-device"},"this support article"),".\nHere you can scroll through and make sure the address matches what is displayed on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,r.kt)("h2",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,r.kt)("p",null,"There are a few methods to check the balance of your account. Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,r.kt)("h2",{id:"sending-a-transfer-with-ledger-devices"},"Sending a Transfer with Ledger Devices"),(0,r.kt)("admonition",{title:"Verifying Extrinsics",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000179161-how-can-i-verify-what-extrinsic-i-m-signing-#Verify-an-extrinsic-using-Ledger"},(0,r.kt)("strong",{parentName:"a"},"dedicated support page")),"\nand see ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/bxMs-9fBtFk?t=360"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," tutorial to learn about how to\nverify extrinsics before signing them. The video will also mention potential attacks that can happen\nto you while signing for transactions.")),(0,r.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger nano check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article")," or\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/gbvrHzr4EDY?t=579"},"this video tutorial"),"."),(0,r.kt)("h2",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.kt)("p",null,"To receive a transfer on the accounts stored on your Ledger device, you must provide the sender\n(i.e. the payer) with your address. To do so, follow the instructions on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before giving anyone your address, ensure it matches what's on the Ledger by\n",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,'For staking using Ledger devices, check the section "How to stake using your Ledger" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,r.kt)("h2",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,r.kt)("p",null,"Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181870-how-to-remove-expired-democracy-locks"},"this support page"),"\nthe learn how to remove democracy locks after the end of a Governance referendum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please be advised"),": Despite the Polkadot ledger application being compatible with both the Ledger\nNano S and the Ledger Nano X, some extrinsics are not supported by the light version. The following\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"repository by Zondax")," lists the currently supported\nextrinsics on the XL version of the Ledger app."),(0,r.kt)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.kt)("em",{parentName:"p"},"know precisely what you're doing"),".")),(0,r.kt)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.kt)("p",null,"Ledger apps for the Polkadot ecosystem are\ndeveloped by ",(0,r.kt)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),". When new functionalities are added to the Ledger apps,\nthey are made available on a developer release for testing purposes. After a successful audit and\nreview, the apps would be available for download and installation using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),". As it takes some time for Ledger to audit and\nreview the release, the app upgrade option may not be available on Ledger Live when the new runtime\nis deployed on the network. If this happens, users cannot use Ledger devices to sign transactions.\nSuppose you cannot wait a few days until the app passes the Ledger audit, you can install the\ndeveloper release from the shell using the latest version published on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.kt)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app."),(0,r.kt)("p",{parentName:"admonition"},"Currently, the developer release can be installed only on the Nano S and S Plus devices and can't be\ninstalled on the Nano X.")),(0,r.kt)("p",null,"To install the developer version, make sure you have the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.kt)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh")," or something similar, depending on your ledger device."),(0,r.kt)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dev Ledger Help Menu",src:n(95932).Z,width:"525",height:"54"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attach your Ledger Nano (in this case, Nano S Plus) to your computer, enter the PIN code, and run\nthe command ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see "Allow\nunsafe manager", left and right press to confirm. You will be asked to confirm the action of\nuninstalling the app and subsequently installing the newer version. After confirming both actions,\nthe shell script will install the version on your device. You must insert the PIN code to use the\ndevice after the installation.'),(0,r.kt)("li",{parentName:"ul"},"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}m.isMDXComponent=!0},95932:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"},57302:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"}}]);