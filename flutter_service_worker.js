'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "dbe7d58004bed2026d434b3e14caac68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b14dbb6eb29fcc4a9193ad0cd7c99ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1cfadfab4d9e8c91ee33e45e4e941708",
".git/logs/refs/heads/main": "c995d6cbf34add0ee37d2dc78c5a6501",
".git/logs/refs/remotes/origin/main": "0f6e44fd489f740d090b384e345dd87b",
".git/objects/00/5acbe1fbecf9c4dbc891e03ac7259874151205": "542104dff1b701b90a4fd6d0acaa995e",
".git/objects/00/b35ed8367db96a5d6a3d48df95ee2877b972aa": "c03a162ebce15fee0d42a6698a8bfe4a",
".git/objects/01/39dbe0c04ebf14013465398e80e0714a5c8227": "72d53b002250ac9c022af7cc5dbef287",
".git/objects/01/f1f35311a0a1b5725b97ca2b722dfd1afde3ac": "5f7ea5be426808713e66130c0d6d37ce",
".git/objects/02/e9f4df846cccd67f77c8eb829800c8fa1539cf": "3b6f58182f3ecc3fdeb81a8d129c94f3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/95172a0707ab2b4b2510bc847e46d5eb55d32e": "7593b7faf1ce88706e46a0ac184e0a76",
".git/objects/04/103b47667c24241045b5d552c048c8d8c1e5f9": "c5179ce58b477ff554b6e2bbd5e5d6ae",
".git/objects/04/50e883f1ece25e702eaf23e749ea0419bb2d89": "d9ed973c61823a0d06d565626c4e714b",
".git/objects/05/a112e98759978237d67aebd38e69814b9f17b6": "785043a2a70dbcae813356260cfd3be2",
".git/objects/09/aa39f167dda18fe7e8524ce5a406b480c583fd": "e6a55e23118ff02c523ce9e47748e7e6",
".git/objects/09/f4e1067ac0b935608d5006bdb645614481622b": "de5b4b711f069a8134623dd0f0b25649",
".git/objects/0a/fff77bc65277449bad46d5c8c4474cc682e755": "5e3603a0c55e1e1eee1fbbda6c67c147",
".git/objects/0b/7ea08e6d6ce2e21b213e017d04836f221751b6": "feefec808dd838414846ef88512f237d",
".git/objects/0c/1d27452743b7716af8b660b93ba470c670d6b8": "4359927a553e2c57b1c66d2d61bc9738",
".git/objects/0c/5bf267220849707724f7aad7013225bd957587": "82afd48c8061bb1a7e9700d752f1b8fe",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/0d/9debbb230bdfa744486b4decbb6cf3bfadcb58": "4a7ba503b780998911b6bf3cc4ad4cbb",
".git/objects/0d/ac70eceeef7950a2fd3aecb8a9515560ceb62b": "d14c72863342d603f6d9f8ab7f4e2ca3",
".git/objects/0d/d61c8812a35304d33827d90c1543abff1272df": "89a867c56b0bd803a36fb607a757d993",
".git/objects/0e/2092f2f1b14b729491478c21d0e39d43c8d890": "f9980dfb2d20fb0f63983ed8e0ca278c",
".git/objects/0e/9004e545be22bf9977fa14c405ddd87458cac0": "dd50055c795c6e69fdad754f0d4a2d2f",
".git/objects/0f/74731d8d0df52f1125575d7acc1f7cfcb371ef": "88ed3098f83a7f954aa1d4a7ba946416",
".git/objects/11/89fd978defa0a9c1480e90d3ea90601395b454": "ae80cdc8ed518b29e0f95a3dcf07e019",
".git/objects/11/e642339684b041b78ae1d70d727466bbc04a80": "16217a9d84bd07e51faab28fcd0839a0",
".git/objects/17/e6adea99667971d5fb2cddeb4568aec6f4c832": "4d91a16ebc4e69cb4d1fb283130724dd",
".git/objects/1a/e411ef59f3b74565fcb36d2e04be746e63e2a3": "edc7e8340e3cf423613570936c4c888f",
".git/objects/1b/61c0db29d643d78b05772919712b77cb16ac5f": "799cb7e505f2716e89551f0638ec0937",
".git/objects/1b/84f8d046c32a12d86eed5a4228f3075fdf732f": "4fd6835d186e02b47ed0e137ed614228",
".git/objects/1b/d6dad1c161f236c1317a2e74e38d56830c8c6c": "52223f2f301500448b358ac6ad241435",
".git/objects/1c/dc4be514209bcc161f765693df93d9dbde4499": "272cd5ff2ce6786665fc7139ac230304",
".git/objects/1d/96119ca6acadc4cff448fe743fee95897683a9": "0be50e22e8156c08a588478050e25eaa",
".git/objects/1d/f21bc5c434f08188f1ca9b9a0cd5b0aeefbd02": "5aab8f94a4a66e85115da86182e9abeb",
".git/objects/1e/7c8974782906329550b91e90017318f2714cf3": "0038f1252982fc9cf87c20df596c91ec",
".git/objects/20/7f9a28e24915b4e1a8c47796e577f4b49e62bf": "0c364dd81600fe0556db151cd26c2eed",
".git/objects/20/b339082e5d19fd19202f773dce1dc9929fad75": "5cd0c9797f68fb7a126d11dfba80db6f",
".git/objects/20/f35c7f2df7ae4a6b5ac883d6f522345806ae14": "f33124d625a1a6efe3df7512dd000e8d",
".git/objects/21/aaa7d7217273a34c76cfc5f0cca522f95a8418": "32dbaaffa2867637ec00a0d3dd9e9932",
".git/objects/22/1eb37637289f245f10588aeab908e7f61c70cf": "79157cd472877e8dbb32835a89dd60bd",
".git/objects/23/05efc62972b84cb80f02adccd43757fbbbe553": "a1bb67256918815e4062fb51adba40de",
".git/objects/24/e33f473feca25499279545f869d4ca840d0219": "0de9eceb05db5a5f65fa4a00ee74afec",
".git/objects/26/5eac3fd2d6e343e7b98c7892d5e4c9611abf09": "85d831db55c7130687ad4a90754f7b1d",
".git/objects/27/21285936c2de145b62738e5e2042c387c47879": "a767770fbdd29ceb63640688690a8b8c",
".git/objects/27/5f9286f2f66afbd4a55f7fe1b1387e447ddc52": "0d561fcf70026632f41a00f03018c1e5",
".git/objects/28/18098d54868a43bd042cccc5c87a6509023ded": "6410945f9258af1836a50777cab65d7a",
".git/objects/29/17b3a1a60217da33fb5a289a908e4ecaf37779": "7ebf3f53fbb1c0ea02054d8256a05ae0",
".git/objects/2b/de2ccafbd614c2b03e5ded67364b4b17cfa064": "87b03f8736c704148433ffe901694f83",
".git/objects/2c/0c16bd461dfcf226db20c3fb8357643bec525e": "a896f9e5fea26de07b6e75c659eb2e1b",
".git/objects/2c/2976e930f9666e0af53a68d7dc79befce3d9df": "01fbac0f5dbe10d903b21efe010e9160",
".git/objects/2e/0a5b2041deebb63da4408a553b5a3318f4429b": "ad00d07e20ddee40c43f1ccb21ce7b24",
".git/objects/2e/52d57e21edcca0c5173adb3d14a8459a61d997": "f612c7b59f821c551a2f1798e0a03655",
".git/objects/2f/273b13e9cbe44ddf7b0a93fe856a8f2c665a49": "2b1cd8cfa02f43c46ac630489da094d5",
".git/objects/2f/95add0dd6ae8660a6bd80c0e1f979d8b651736": "66bf77f2e6afea1e824c14c8d0c4300c",
".git/objects/30/8f46395585eb8d3e96b91b30c91f4f980c7508": "979db193993d88e3613d077829a55868",
".git/objects/30/f65e1d3da58291054b7daee9300c6b8bd38b8f": "e4481e323ff80b62ca3ae27b4b1705ba",
".git/objects/31/7b71be6874844bd3e392dd580df3b15104b326": "7deab8c7c11f0a666666784a47f41d24",
".git/objects/32/dc7229c2633861a497964e0e0476ab2e30a98c": "d04ad1961ff5b692b762ce8a6b3b1359",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/e42052b6172b448515243dc79ccc7a0b9968f9": "70377b2f4b937dbddbc380f9cc06affe",
".git/objects/33/ec0c30417831057edb06b1dd8029ee72519c18": "70770bb703668f216657384340b730a2",
".git/objects/34/6ed14a05b2afa3b452ad2a7c8a657026d20497": "52e5d3d284cfdf4eec482fe839ac2818",
".git/objects/35/3cabf24fd2df6388dfd2d9f85bab7ba076acf4": "a975b08c0411b0264a28e8d9f3d6d03c",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/30845d45ddcce156d81fb5605846b2fc118883": "3364b945a83881fa70fb6efe597c95df",
".git/objects/37/66b16054fcd7d834c96484753b374a7bea2bb8": "8a63de9e2388456ec73416a69b5ec2be",
".git/objects/38/15eff1b6c4529b33bcca292339104d31004525": "619a6a4d8c3aa9e9c2f5a6dd18643f92",
".git/objects/3a/5a4727463cf56b17816f879aebe4d5dbfd63b9": "bf4656f232951bb83313cb5d5daa321e",
".git/objects/3a/a76564a722ee014961c3d7fa1f0276c60b5f14": "32ebd0ee10e82586b51897b2999a1794",
".git/objects/3d/4700e6815a4465e717964690834b073d7784ba": "10a9acd5cbcab80bf3f26609c4a38d93",
".git/objects/3e/655ce410def934e37c8de5779c135b55768d71": "22598ee79752a7988f4400086675fcbb",
".git/objects/3f/085e7dbb9254d7770a8b272bde20f73e6aaad4": "ea0e9a52ef65162c8e2c477847e17b9d",
".git/objects/3f/652b23a1485ab77daf7dcb1d6d92a9c5803345": "e086015134107f44c49bcd5512d25426",
".git/objects/3f/de94958b9acbfd07f06d9f0e00a4677d1edf3d": "a31590d5b88dc6c853b9bbc2190b1968",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/11eba0f6009811ffd27f1302105bc90161fe53": "ef91e1d9fa45929a89587ef204b8f050",
".git/objects/42/111bcd6df9b38355d9d6ef112643a762533025": "8c1e1fb7a6ab4dacbeb590631c510d32",
".git/objects/43/d817c5545039ad6ce98681bdbf3a546988a731": "17fc9981bd2c3107f2ffb59b97b517e4",
".git/objects/44/2c06cf3dcce567da268fa2d8a0c0f3b711dbe7": "ffff3f6b227d7a63a8f5ec166b1533e4",
".git/objects/44/86c2e13e8243dfad7bca7d87d5e14b6ae2290b": "181566b767bc699c8bd683fb730556be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/970a1d7dc7a858c3b94ca32d5ec56ba6745d9c": "83222d4d491be572a4288810b48e3f79",
".git/objects/46/a48bfc5590bfe2306ee4407e62d975aa2d484d": "138e8ea5940ff4523506de0e7d2db8aa",
".git/objects/46/da745c7439feaf6f9364ef03a0d0d468675de9": "9614db57b356d0722ce7174befbadf68",
".git/objects/47/b70728869390dead40228e7f835506f49a1e0d": "f2865623808691612bbb456210920003",
".git/objects/47/e5e4f84887e08472a4a87f9d12d01432631da3": "62aa2c12ad87b22dbff28578ca08886f",
".git/objects/49/31d9ff2c5413e9eb07a066bde0adbad0da82b3": "5d4f707afcc1582c138d5c13e8b46cc4",
".git/objects/4a/e8edc88f5655f3c76b9c16052169a5e8021a7d": "65c21c2e7039780df5f62ff0f40425bf",
".git/objects/4a/fee717c38aae30167f51f088c2c02365b46aea": "8169753e93def46ceee8fd3cba81027a",
".git/objects/4d/d437af8f01e908901a5871375a1dc3ac5c2069": "97d01b0f519ba52b4f807a15df417519",
".git/objects/4e/740ec1aff1c84c79afda44d60ad9f000e3b9fc": "f38b81e0967cd057c587b8afc5f9c525",
".git/objects/4e/b119323bf2d4d638dc38997d2adb96ff090020": "773dd6edbebad3796680fdc36407268f",
".git/objects/4e/d57bc5b4b04c3bf300d1bad976576d68bf1eea": "6549d88caf1615603d813d10ffed9651",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/34f873e47d10e7355c4ddb84c6fdf393e72b47": "09ad9cb7b50da0c206238f6a08291bb6",
".git/objects/4f/796c69a54a39f82ea95d39f54103b48a679069": "02200cdd14824f4e18eca7762ce0bac9",
".git/objects/4f/bf2730cd897df0a823091b62871077f9664a6c": "eebad8f01bf4482820038625e7c0ffcd",
".git/objects/51/0f95270df54639418e0786fd05f0dfd2f72860": "a0a874a405b48915219eab29454690e2",
".git/objects/51/2b44fe92b0534f62ad904e42e3b58b9214ee64": "47fd2eb4284878162cc8842d5112ba02",
".git/objects/51/d93f8a81c9c042c09f5c1239c14c71b9e8fbc5": "6ba165a1ad48e1293d40ca5bdd90b552",
".git/objects/53/6c9b8b17b8b78ddc67290d35c56bd0427ac919": "145e295899d9abb3e9350dc2d030b5bf",
".git/objects/54/e958fb67aced6e17fa4aaf9d697b7731d5c912": "cd080857effce0830208d4d139879fc1",
".git/objects/56/4f90a7d44b2f254c576f646e1be0f71f5e0446": "c6eaa4c349b1b66751e853af03fdd081",
".git/objects/56/a8024ef1b53064f700e875a15a7097bc2f74c7": "8550b106ebb50c3bf93143ae6176afd9",
".git/objects/56/cbfbb5806b656ff6ecbbe963141b9490351ff8": "753783592538ce9ace3e02419b9389c8",
".git/objects/56/fa4a5511201c6f7186b6ce46b99422f563c987": "ab29f59198401102406167686329f905",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/c18cded54cd602afeb340ac2cd1cd203262a8e": "a4d2ecc845d88f276d677f29b4f2f04f",
".git/objects/57/c1edd0c665da15a4b54e79cfbdf066d4c330f5": "91cb8fdab11adf593244ae494dbfbb07",
".git/objects/57/dc776dc39163145593484fb60d0f1a824f6a0b": "c95e0c3cd94ab1e1eaab1860d41188be",
".git/objects/58/06eed856d1ab88e28e0fdc08fa4ec0cd88c594": "36ab518509928920e05915da5d183593",
".git/objects/58/1de5cbe14bce9091b3e35dd492c7711656102b": "de507bee01d34484255671856d031244",
".git/objects/58/46235b671013e3ba6abdbf36b883b0ec87e1c2": "861464fcb1dbad2c5a2ad445fb1ad417",
".git/objects/58/4820e1a28cb1a3fba07cdfc5e54d5696e72a4e": "3b9de66f46776613c3b6782491d389d6",
".git/objects/58/e0a6e254637fd7de05e8c8cbbea4b1a002a37a": "615087556f5ec145f944c68950dddc21",
".git/objects/5a/50fe44b8aea836792c57a2d0fff18fb25cb65f": "6c8cdad40955a78ba120b8a958f231a8",
".git/objects/5a/91af207e4a7340e88415e75363947b4535cb11": "0bc0c09054bbc71fd74d7656afe31bd0",
".git/objects/5b/2e92365fc5bbe372bd4ef3414c830832ecd830": "47b396b1f8ca77fab85dd4a5f8cefd88",
".git/objects/5b/9057d4920738cf28def257a1eb60ced86da9c6": "eab26203825cdb99a106c682aecae98d",
".git/objects/5c/80287f533e76a7c09653f3abd990b5005c34a3": "491e42271a18a52e3f1c0bb774637e9e",
".git/objects/5c/8b1883236d35e2c078ef2cb9cc9f13188ca8cd": "9a0caabe5de295807f3fd47d032c781c",
".git/objects/5d/716de42693ec66c36dd1be48d5ef325c10dea9": "d577f4881f4b447899ef310d0dcd8997",
".git/objects/5e/6ac530c0c34e5486155cf5509ab10033533385": "af9d5d3530e4c562bae5364e0c37e85f",
".git/objects/5f/973c86b45fcfe4f474e71b23d5877f50ae4452": "fe6fe22ad61ccbef05f46b9759cb7faf",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/d1d5e64015aa078c5c45f28d31cd543c8babe0": "2a1b0e5253b002a26ed6b77957b45b69",
".git/objects/60/0149f3693e4061aee85aab8c9959ca3370cba5": "890c5876c833d5d6c2969736f85ef74f",
".git/objects/60/49d02e5517a88f72bb492460794cc6c57fc2fd": "83b63fe112c0ee47097e27eb78179a84",
".git/objects/60/664620606c890819190163f3b6fa938e7ac5ea": "827bbe59235cd95324428337cf2da5f0",
".git/objects/60/8051a5bb1b9d4d46c072e197ed8860649ae3d0": "839991247a6c12b9475d74fd6684e145",
".git/objects/60/94bfdaf2846c2260bcf64266322284fb74f922": "cb3db74fc2bca2d63b6da23574dd5911",
".git/objects/60/d83237640330c1141af10fe5635229d616afe2": "f8d2bdc9c607946299bf404f87aeec14",
".git/objects/61/388d0bebde418c9f89322c356dff2665de4edc": "75af2956cf0295f27bb7cbed489f21b5",
".git/objects/61/fdef7fe40a9259069a52f88a47786b68436dc6": "bb9465901980fed830d4ae3ca4eae76a",
".git/objects/64/23d771e55be9779d377a14420e48ce96f70e3b": "ed62fe61adf1e4fbb06368c52148a4ec",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/ca465ea6bf96cde548079629dc3e6cdafac06e": "6982f8fd042b6c06b1dc7667ed480444",
".git/objects/66/05ad26fa00109e593734253d01e233a2b20dbd": "cc10fbf3cc0804d917e0d993a78f86d9",
".git/objects/68/87af61205bb734bfc0d5137fca61e404c26a86": "b7ea99188fd35d67b4c884421747fec4",
".git/objects/69/1131c6fcb76f5e833a137aa3465c2b70a760e8": "9c7338a57ee9c14798c277bc1ff6c8c5",
".git/objects/6a/56f7dcd4952b3ea31ec01cba1450c260509e47": "a3e752fc1909c2d568f35cd8b82708de",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d433ab727dd20248685542f713801cf4388bff": "31a24ea0dc39cc0146c0270764a13d37",
".git/objects/6c/3797b2fe36344665d70dd85ceab326c82c31f4": "c31f358e9721a4f9a3ed366f91f1a0e8",
".git/objects/6c/ca96768139becebc4d65a51d3ee591aec634e9": "843c7239ac10975756be87c72be5f32a",
".git/objects/6e/28d858fea480dc7a1c66058bb6a1f18532b6cc": "2c7721f0312124b48dc21c7139c82833",
".git/objects/6e/94d1af6a29bb6526fc6d20c8455744ba2b8e8d": "4a237ff4ce284b0070be8e3aee95b187",
".git/objects/6e/ba19a8834b903e504a024ed037e39569494d20": "d0443c1e29d9b5454bca10c0d14a027b",
".git/objects/6e/d6fa7f7f05875c98d2d442d937c34c9402cd76": "086810154662178fd9dad581729792d2",
".git/objects/6f/8cc696d9c8e5252be2e7c1d9b17aff8a35c3ae": "f4a63d67b19539a9ba478acc70b144fd",
".git/objects/6f/d71c01ed334ee0f6273f3b3d19c71127e23b08": "f191c12e4c77ffd3025368e438f682aa",
".git/objects/70/2ce590f686497395ac05ae12083e2e24bb2172": "94071b09492aebe3c4aa6fee2fb620de",
".git/objects/70/5d139d766ee1cdfe370e000cc482240e90f3ba": "e037edb5156424224172aa4f80c2e52d",
".git/objects/71/84b8f5942b1068b6e588a7cbccf194d8eaee69": "41507545f8ff0f8350d347e3c2f598e5",
".git/objects/71/e9519b7dc8d9ff8ca85f46bc0c70b96d09a6c3": "69d4965b2cb0f25fa50a250161ab4ac7",
".git/objects/73/49c0e9d1614640542435b18ffc26d8fb0477cf": "c420af154dad64c7a9d1faf1e4f2203a",
".git/objects/73/898d4b54534d297c8f047ac480418c0a0f91fc": "1b82a7954efa867e5c4037df393d71e4",
".git/objects/74/9c745b29e73ccc1fd48cd59dea0c8212507490": "10892784e3568e86efbb96586448ba7e",
".git/objects/74/f7fefcb7442df40b26b988b32518df8e670831": "428ae1e0952e92438d2025cdf6c5f4b7",
".git/objects/76/09030811b5b924259980d2f5424757572559da": "0a59902d89aec30e77daa80b4199ea8d",
".git/objects/76/67a356ad1dc321856eae8971ebdbc89fcdcbcf": "7d3b5cdee588295ea5c698b58b2d73e3",
".git/objects/76/d2fabea5d9c4b22e956c2430e2a9dda1be67e7": "44206fafff48cbdb0e3d1f3432ae52be",
".git/objects/7a/553dbb04294b93d905d45c4e63ebe2b6828385": "ac1ecff06bbc63ebf44d1ed63b86c42f",
".git/objects/7a/75663b4985dc22297b5bbfd41ee70cb5ca966f": "84c8d3237aeb04b1a0849152625a47e7",
".git/objects/7b/a2cf3e1b4205d468611c9478a11623123d6ec3": "34522bf1a4d6a4bc16ecda7c984212b2",
".git/objects/7c/221dd3a4a859e056258524ce308029d1ffd339": "17cfda7177a192028d9d8f400bf73097",
".git/objects/7c/97c4b9294bf0fb5355cd77b81b58a335d09a39": "14d5e5305679f8adb0303c7ffcfbee68",
".git/objects/7e/42a1f54d2fe1a1c3c8eff0084251606a93463d": "148ec5f938286e8f473a64ba8658de92",
".git/objects/7e/d7c2ad0e957e936efa648bbbcf6014b26b12d5": "673bfecc2762da465b4d526fb2c03364",
".git/objects/80/451c3b6d3fbdf6185de60f6cf6a1545c3a0c84": "5c97aa2f89e890b7c0f0e2309464d44b",
".git/objects/80/b6a7103467f0184436b2d194629e963a083f7e": "7eaa8bcfd424a84a9471d02111452c7c",
".git/objects/81/4daf394f54beb1b68627c4580e446b40806212": "4cef34d2da8b074ffad97f596aecb453",
".git/objects/81/c298954b66add6dac48e7df2c5d5726e30e3fb": "b75cd9164fe1490d77b68df16bf17881",
".git/objects/82/185cfe32c77cd1e56da45a6e79fa54d1c185fb": "22cc05bdb252c639d0af91765796143f",
".git/objects/82/ce966be8583b300526d540b7799b9785294d30": "b9bb7466a2cf33e39e4f0e4c63f5fa3a",
".git/objects/83/217847e3b3a61d3339e12b9624748de6fa23ca": "91d96fc8ca3a110fb1efa5771b438ac7",
".git/objects/84/840a5bbce3b2dfe2f95a6fed4f2687a15a363c": "97d07962775929b5e0f9c7e06fc643eb",
".git/objects/87/2afb75251deb2caa86700c461b66bd39584460": "98e39c7393c551e9570bdf6b769780c8",
".git/objects/87/d7a26aaff23c116ebd11166ef45cfb83702d81": "157f44504f596a48022f6150fd6321db",
".git/objects/88/7e197f0a0672b5fbcea9d805223caab7ac2c28": "e7d9e829c7e9121c0f4e964472fa4888",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ec88bc5729c5afc4adda4a839290e9a91c5860": "f0c8385c63eafa7dbb9a06ffc099e69a",
".git/objects/89/3830b079ffb0702510b4456b8c95e941c8dca0": "77bb7c2dc0ba5951b51ea9aa393bcf74",
".git/objects/89/73f0cea5b1f5aa0a2674b2c3f2655e70fba351": "940fa4a51d3a707c39f922b7f6296bc0",
".git/objects/89/cd81a1979f4b2c2457dfa0a19c60c0c9717d06": "61a1d0e4037df2660c39f4cb0576b367",
".git/objects/89/f1d942ff85f79a6ee490df8b2515d71ab89760": "5ae8fe7fc8530a2a70cf11b785b408cf",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a798715624a88c655a6669d429c986e2e2fa7d": "81159005b5ff2ec74181c6087d630f51",
".git/objects/8d/410971c4a0218a02c3927aa2f7e977a3a97a6f": "752b1780f8b3cbbe064b2350b66d636a",
".git/objects/8d/4a19dd9588f407fc76864bf853f258902999f2": "4ef1e64fc4624eee27203c3e8d39e11b",
".git/objects/8e/0a4edaf1f785a6759ceeb918b3129d268fa52e": "0164638ba01899fe6ee05fc4a5137363",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/be8adb3ce4c4802bd8760286d64a8c7d550984": "c881c27ab3debc3d952ed06d790ebaa5",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/93/d288ef8f2d31b0bc56bf62825f65dadcbc87bf": "6c726f48d85ab9ae570b4285ffd0e8a2",
".git/objects/93/ea27e0187df28d8b6b2b427cc976e0c0082709": "5c9bc7ada8d63de35767992f3d086648",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/9a29a74ccf0c34f167acdad9566f6922aab82e": "9e038f268ca3e857385a50550b221211",
".git/objects/94/b79408c4395c1122aab2a4cf4605e902fb3aab": "ee87bb0eb9b77ada2ba825c1806715c5",
".git/objects/95/f40e5a4b36c7258d1ce757d6f6a30cc5bebb89": "1b4b2ab867f43910acbc5d11d043292f",
".git/objects/96/b119b7601e4c9dea6fa994e584b3baf6dad0a3": "21c08207a34dc927cc58e84de4b2b65c",
".git/objects/97/81dce54dda27bb407c8cb9a7c50587926c2cbe": "b480b23e49acba676c7516c21c5cac17",
".git/objects/97/e0c517771d0fa2edacdbda4ae9fb98cc1580d8": "a5eb03dfd719f4abc862f1744a21799a",
".git/objects/98/7c30bd7737cca603c67b9fc33fc8a17cf91893": "efe40a847c466b723eba65be6fb9585f",
".git/objects/99/0e1ee0b245f3ae993987a80002dbb5b4652774": "727c6214208e2e4519ce71a824957abf",
".git/objects/9b/2d959a7ec83690553945a154b21815bda25523": "d2168ca65b12b68462def38e46c64546",
".git/objects/9b/4adb7d37fdb48de77b147cd67f78374f620d45": "7406d9b88c8481ff5bf564e2b06c4b27",
".git/objects/9b/cb2410276ae4117a8ac0cee4af5e8efbf37228": "89593a54538b074316bdef467a3213d4",
".git/objects/9c/047843f12ba487a868c37e2f63ce2c1eb8747a": "892b2b45929778dd6b279c05c90590a8",
".git/objects/9c/80852f8f6ea263f35f002feddc52e7e57a7143": "e43d5c5ca9cdb43e66fff5251fd67c78",
".git/objects/9c/e5367df127845fb71371fee237912e97595434": "9c08c4151bee89532549415edebe66c9",
".git/objects/9c/e8351ba81b0d5b8387c53791c71c33d5f4e93f": "819d66c8f1e2de6531617c43e871c4a0",
".git/objects/9d/2b46902cb15bcd03bd1730c262211f206de869": "0785a8a49ac7e652fc36641d27f7758d",
".git/objects/9d/81742bf8af8aed0931a0c8ab7c870bc7f7aea4": "0b4143cb32630aff18544942765fe66e",
".git/objects/9e/5068480c9916d504e9ab5d9a01f1fa4f3f9739": "d6006f6d94c949f85abae1d9e0f2acd8",
".git/objects/9e/8701f273cab997f9522f50c1d9e6660dcb3129": "d8bd4e21742396cf9b6ea497017df935",
".git/objects/9e/bbfbc10d4fb376972d085e52cb0e3c52e5c3af": "b558801e2ed723947f2ff14f97b990b7",
".git/objects/9e/e82501b3a62a82b5749edc534568b187539712": "c8adbc0e6c422de2f58108ca83fe9ec0",
".git/objects/9f/ccebc3c7cd7a9f73acb3e16fecb4b3cd724b0a": "5a00db4cac71e62e60bd3d384478a2f5",
".git/objects/a0/afb8439ec78598048d34536301f8726c790dcd": "5c83791230614e03280c7f277d1f9244",
".git/objects/a2/e9f2f698b9e0675d0a67a5797b834408d4bd73": "17f79c39d0d77d5ea4b05c96ead895b5",
".git/objects/a3/1278d42f348123b4d1db5b7dd1e1a462e3881a": "2bc3e10790fd4ea3c6894b53678de1fd",
".git/objects/a3/8e1df038cf9a9b7ca4332b2521348a08e54a83": "1127399be2bd1fe0520ab2065d470959",
".git/objects/a4/773d7afe5fce3b1de8a8dc33a5825d7d99d2b8": "abbd09c47839e361a2e5bda10a2cc77a",
".git/objects/a5/36490e5e4e8e806e70cd5334b68339895fa86b": "7ee75d9dab1dafe49ea21c3e5c4a9908",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/bb5cecdfd723e80b6e934ca0442fb03103b941": "59a31d4e33c537a41289060493d69d50",
".git/objects/a6/d348978bdd271e14a54011f1cf6b6565361d28": "7cf0d74413a51b2b9b966b9a6faf77b7",
".git/objects/a7/3bb5c2fee9450308fd88d7c36fcfefda04ddcb": "2be6b3290f88703cb0d5d2ccdadede90",
".git/objects/a8/85ed51c0195955a145001def1e0fd85c940635": "ea7cc9a55488e8c6743a11994c6df7c7",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/b77dbc58df6d44991e9df3e595b67e4e89f09f": "b755285e85db588d5855fe4b6062fb44",
".git/objects/ab/25be720e4ceff45b4add949f4605b34e736a9c": "ca22737099230e9763553f60569adcd2",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4469f7a2495daaae14c0e4235c0a07ca1bf795": "80fbf99b7e4a0ce8770ae0ad4ed25fd1",
".git/objects/af/64cc44b46094cfc47f02b3409544c3c6c7d2da": "328f53910fccd798c797b9e9f59fec21",
".git/objects/af/d246a2735fdb6ab68abaa89feba3cc38c9bf4f": "eb4650b7135fcb147b1dc3cbd0a4c50e",
".git/objects/b1/54c82a3c1460b25342e18b52e9780343767506": "732d9c7d16b694c6a163c22b1142ed44",
".git/objects/b1/a7cf40397d11b673d5578dcd008d56aa580ba6": "e011c95ba7714afca157918cc9768346",
".git/objects/b2/a9d3cb5a7841f18102182cf49bb2c8def9a8a7": "a6b13dedeb31e58fe7a5dfc33c716021",
".git/objects/b3/a3bb56167da3e387aea00c52ac23bdeda31b2e": "1ce2e1af368c0a7fbe7a00945bc28571",
".git/objects/b3/c885995fc23369bb6e588ec9b39e5ef5271afc": "a18e858484957e62636d856e46cdf972",
".git/objects/b5/5b6661ee8a17a3b3ede29c3960e5fb4e9ffa7c": "66fe496fdcbb6463f5a0e1d46c723287",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b5/b7000ddc8b47b15b071d9c15b3d37057c46194": "d27af603a227480c8195c2e572b4e6fb",
".git/objects/b5/f6a8888a31e5f3ba09a7745cc9b57e1b37ad86": "d19af1dfc1b2d893491168c6f3470a63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5dbe5de9a7f32c9e33e20fb1ea6e432d9468af": "85b5a481500adfa975c4709d0340ff82",
".git/objects/b8/a55be589906a2db0d194fc6f9c1178bbe62935": "49239f3e81a0d2c2040fe330a9f26e61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/27ff6f51d73743603cbd6c8f0ad4e4deb08dae": "225c9707a10c1ce3ded99716d09b45f0",
".git/objects/bd/906da5f4b8b993eed9f0098f9da545de9d4c38": "d7aae13691beccb224cc8e9da0d3e89a",
".git/objects/be/52e067020367dd4438c5e596ebf0b7424dd7b2": "d9819c8684019f368664dce5cb608fae",
".git/objects/bf/6180fde9eaec5df4032a4e77907cfa3e02f8e6": "5a107b5787868b17c3d47b4a7c2d6d0a",
".git/objects/bf/6ce066091b5d4ab733d76f1133dd13407b928e": "e94620cb6d2b08f15924b32cec48398b",
".git/objects/c0/06d6fd20d8b782590e091938dec3bbec1c6e57": "eafaed5a3d096f81a2df0f44b58b2bbb",
".git/objects/c0/bf86c0fcd9eae8db6f1d6ae9fef5a9668adac6": "632325269d4824e9fbf1c3d5be95a3a6",
".git/objects/c0/d8a516b4f0e81b56320035ca803646b8897285": "9039d857ecbeaa011d945c1d2c5cd1cf",
".git/objects/c1/d3c6b92d20c80f0308a6532ad47d604a1df4bc": "6789b2e48ec39c5bbfb41139a6fbdc13",
".git/objects/c2/dab6ab90bef1e1ec80c44b3a86d060dde69587": "d70e84518ef9870301a4983dac2f506b",
".git/objects/c4/13cb374a8abe9a4bc7f713cca486bfc2cc70da": "e7b244e1559c16f38fb9b51c7440bb01",
".git/objects/c4/31d39b450803b1cbe0de461b21213baf0b0b9e": "15a6290e241afff1ea3bdd6da035296b",
".git/objects/c6/ad58815f219790838107e2979b5cdb0bf71b7a": "4b7e0f2b10a78c2854583709db42b5f0",
".git/objects/c7/996bcd04eb20c0eb5427028acb3e1d66dd27be": "2b898552e73cd29835006e55e5e23029",
".git/objects/c8/59f6e0d14f2114e0320c418a633007d1075a7f": "83285665ed2c4a899d6d4b51af4a3087",
".git/objects/c8/864bb8199aa53ba6340a9b55abca31f8a22d5f": "217c133b866fe70c02b669f8d2fdeaed",
".git/objects/c8/9d262e707075ee63854cc6f4ac80061449c185": "759f8b7fce701ad731127a5d91f8b8a0",
".git/objects/c9/c5d30e462cf2d513974228d3686fa4ac824628": "8646c82d341bcba2528d6ed300ca8e23",
".git/objects/c9/ca7e37d2932b534c0d721fcceadb8a3426ee9f": "9a8e651f26160f2386a82ed4f51bb3be",
".git/objects/ca/5239715bb72db6f276be99e002fd066b005bd8": "63f85462eafb62db5ed9985ce1ef7254",
".git/objects/cb/f016fee05044b3031149a4920972a5badc1077": "bde13e66a5c161ac362223e3d29effcd",
".git/objects/cc/624861c9c610963188297f10762323b7e80b15": "29945b3a2d87dc328156aa65d2ab609c",
".git/objects/cc/cef891318ab87210aa077ec9112b11b1d3501f": "4073a562b71bad919afd4e7a49a0a0e4",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/9caaee243642c7f1b7a59f50f3279b5626bfc5": "967053c8706d90e0744fde0434dd4941",
".git/objects/ce/05ce18f4f2be4ec3b0768be13292ad87766b7c": "a3d16083f7b5cc434548664e7d42e978",
".git/objects/ce/4fb0c567d7cad8b4c07f221a8962e4d5ca07c1": "a2aae018fab101ec86f6c47cdd73e38b",
".git/objects/ce/7bfb14401f398386a60c26ab74bd1e656d730d": "890e02830c679099c1e3166ddb1bf901",
".git/objects/ce/d3f592f17adf4e66ab8db41da60d6c8f13fe76": "5dea17edd42e382d3ca0a12282860e75",
".git/objects/d0/049941f47f541840803335294bd76d10dd099d": "fb95371afcea7408e4ebcdf54706e9d0",
".git/objects/d0/101e197a6e0f96d21d0ccf61d6e78d2656c764": "e7ab2363191e31ba02430d1f959fe04a",
".git/objects/d1/2f6efbadaac52a326bfd56de5ac4406c1bc7de": "aad0dc134186fb87e2e82f28dd28d4fd",
".git/objects/d1/c708d6367c1ab326966b17aaa231b20b91eb9f": "52949b48111054117a282c9b579f852d",
".git/objects/d1/d8c453dc700dd7ea34e67d02844bae1837232d": "b048e02c70ea2d6944626e9998e77503",
".git/objects/d2/82ec57c9b52299c579b6b33f3b6c78ae7abeb7": "4474af7cf099233e310c02f30a82f0bf",
".git/objects/d2/8b8db7590570465fb0e99aff219ccd910b6daa": "afc2151a28cd8c2a9c0a35b8f230fa92",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cd364cdef0addb054946b374644795734b3b32": "58417cce1667a2ff91bcc38b1d70f6c4",
".git/objects/d5/d902866f4af9d65d637cb40f9d4dad8a9b91e7": "37caed9ffdcca4917cbc1289e173e846",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/30c1754fbf6775e56578b9df7b20a7c3915b5f": "074f2977edf97a448dd11b6027a73c13",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/81f0444ff8bcd3cc356947f66ea679f9f5bde8": "977b641d062339181075545ed8ce5379",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/075f759046635a226679fd18ac89f3da216408": "b6ea6d7d949bbd1841c33ec4d7e486df",
".git/objects/da/81b8a2090a7d54f7db47b96b7ef8149921557e": "fdb949d08e6bce56462fa2c93f505da1",
".git/objects/da/8c0e8d668ba8afcf1c42fa6c165424e527c937": "f11d9c62c4367f65365729c2ee61ca4e",
".git/objects/da/cb436fcd095b8a28dce216327865e7fef7af7a": "3254d4840f6b2aee9ce30fedf9d9e7f6",
".git/objects/dc/021e762015c484e59c5f8531f2db1a49c206a3": "8c26e72ed8bd6a61a9689c3d077fb570",
".git/objects/dc/3a9cf733a3b2c233363ae2c0cbaa5fe1eeddf2": "72a3f66317800a2dc2a97bcd82a3e7d8",
".git/objects/dc/ebd4e50b241c64c6a7b5277499cbf322feb353": "4d082f9df0b3ebef043ef6e891eeacb0",
".git/objects/dd/6bc3c766416739a3350364cdbe1e2cc43966e6": "a59bd6ae2d55a8dbf77572edaf0a1a0b",
".git/objects/dd/ec9eaad3955e437c6c9b3acb72398de222da6f": "96f7755b83183d844dd7289e577fe9f3",
".git/objects/de/38b92566df492d2057ebddef193eec0c594e68": "73ad31563b070a275f42c5c59005fb67",
".git/objects/de/631b2bd4d4893671714331eb64a17d7d3c8ea7": "e06cd8133731c0be63c1c9b3227599f8",
".git/objects/e0/df0b85edd2fa3026416c0481f078f3d4748eef": "ece8a201c2641fad812d57cdb07d7f18",
".git/objects/e1/8d8611012e2154da4ee5632694f66face4cd25": "20f9de425025cf9996373846a7a8e396",
".git/objects/e2/07508aff6fa6fcbb789f665d676eb7fd48c0f4": "28b29c9a2a2e1fd1df5d0c76f0a39afa",
".git/objects/e3/3d982604360169b583502d20d16d3f5e68a59f": "eab072a3c4c32f7244d9586a150f9902",
".git/objects/e3/5eb456279f7c3e24d06f3fd7a823147ccd7292": "342f5b6b1c427b8e07f99aea4871a569",
".git/objects/e4/2f8a5d1b6c985ce5e03a8f5b982a76c3e3bc47": "2fb43ab3a8c8e24256cc3efaa76a0416",
".git/objects/e5/bafba0afbdc4a5b3935df8ad9fe0058e01678f": "58cca96c66bc1f2575300b6fa804d7ea",
".git/objects/e5/ddaf6ecec6004407fa080aada35274b86a5515": "d2e5bc7733eb69e7a1e6f870ea79c313",
".git/objects/e6/6ee152204d208b0a92a8fbcf61c53fe9b725e4": "a9d783ceef2e5f8fb9e0aaeed375ca4f",
".git/objects/e7/e4ac81b207f0549c52d0b7587a9e605caa90ac": "2b1b2abc1e13fc43660a251ab3a8b60c",
".git/objects/e8/9c5fce52d3f03e16978441ebf584919b048639": "ce75ae7548ec0424f288e9866c780d50",
".git/objects/e9/5e72dda6c47afb25a806ad94cc62443cb021d1": "81a29e0fdc4f8b744748fe041f4c82c7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/5f2b2188efb8d351e17be1b43133cfa18c4134": "414598356bc84b1b0d2ad78660273935",
".git/objects/ea/730affcdb90871514d1d698eff63ec32d446df": "7ea341426c13c51a5b21b5c3fa0c79a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bfbfbe5c561f772f4d839430f2dd0c4d3a9ed3": "c3585575688b07fbe280b500c8a3fb74",
".git/objects/ed/6c46c4f7ce0745f8f29d813ee8a63d42e9152c": "ec752bd741352eb6831ae52114d73cfb",
".git/objects/ed/94f33b73cead4d1ffcaf98e392e5490b83db09": "c42b7bb803dfdec612ebd06126431d61",
".git/objects/ed/c456075d0b35258347c5a3fa468797cc0d5028": "179a190390369ffa744b0ce6834df041",
".git/objects/ed/d1bd72a56c4471e55419848a4fa8d22efaacde": "410df7fa9c9e36e4fad25c0311cdbf24",
".git/objects/ee/e1f1d77b381f0bda39ac9122d604cc3f5b235c": "ca6eab7e0a62dabd683dfb2a2c1b7a28",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/cc49e9f85f6b6ae24d1beb9d5afa4e6861f086": "f1d715a03c07a80a369f6f69fdfc0acd",
".git/objects/f0/7a96b60b6fa0bddf5b4d994c807be0d73fe552": "3ae0a2f473848461350e12352c7d60ff",
".git/objects/f0/c49c5925b0b1047782d696e4c4dd963726357e": "de15184cc42ff8679e851c7b1b0f67fd",
".git/objects/f0/efe610b1bf4dc2d888e16bf9f434676a97cb50": "446c74c4f042ed56ad841542a4d4731a",
".git/objects/f1/bdb76b0513d5f5cb7fcaf30f7e3f38492ab005": "d2f5dbe00e6827551dc6261c79e576c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/648b2761e07f5de8ed6cedaa5ed0d96702563b": "25f2d4d899940eb070526e8599f053e3",
".git/objects/f3/66bd4e74955ef0f0ceac84cea8fc7e55d557cf": "02bbd066cf121f82849de4aab178cac5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/3a7190c595adebfa319bbe6f097fb769336b17": "bf60abe1446fe5c93ce37fa51a8bd5d1",
".git/objects/f5/14e62063c03164b8139c9cf46fdc2141f56e17": "27cf4ba06ae3d49962f8ac58bd20bfff",
".git/objects/f5/6c832c3fa057116806a5043b235279b9c88cbf": "54a276010fa46a97b6aee11a1ee2c6e7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/c7fa2ec9d7fb541154fd79993705a27f950ee7": "94b5e005ebda14869edc391dd78d4fe8",
".git/objects/f7/206951b683cedc93ec183e840bf58ec275b452": "493b7722e6703d1a6db63b4c393ac288",
".git/objects/f7/4570fe7764f275a9f8b09aaf666d92e5baa198": "2e03c4abb6c7abfcd963ad5084759ab5",
".git/objects/f8/dae3c6d864a3fbc4e0ca1ee359f65bf3a62228": "0ebe3295113d22765ff85a1f465bd815",
".git/objects/f9/55998aa44d1d0e096722849330d320e52cb2ae": "3bbd5f583df3133f5f795eca75778d0b",
".git/objects/fa/d02bffe1a6c21c999e28a6e734cb91a0433d51": "75ba3dbe274d9a7fe6f71062f5b8bad3",
".git/objects/fb/6ba9fa3fd78d3e1b5e70a4a5c3486f2faa628f": "a33cb4c0cb447ac12e705559989d6e95",
".git/objects/fb/a1b55c249d509c9b7910f78c5f894c8ea1f3fe": "4204cbbeb761ab9f81b5f1e4bd4446e7",
".git/objects/fc/0d58e5d685627330c564ee32dbe431d73d1f6f": "049aa2eac2174817aa2fff90252fe10b",
".git/objects/fc/57360034efa08d9b1f6bb68dc69dab0cf6497e": "6b91d8c61f501526a614c47a6ec93241",
".git/objects/fc/9acc6f2d191b368c4d651152d4e0db90edaae4": "8552fb2317780d3d8e4bb7cd47488a30",
".git/objects/ff/0f56aecc2fe9d63f3d8f33a4935acdd178a5d4": "3e88db08971f7834f84af9ad58db0ae1",
".git/objects/ff/329a385bbf1e9503207020cba3df1f4a1479a1": "cd8ab71d1f2935abc70af15fd6ae8e53",
".git/refs/heads/main": "0a018dd173952ea9e79addfcdb368958",
".git/refs/remotes/origin/main": "0a018dd173952ea9e79addfcdb368958",
"assets/AssetManifest.bin": "72aa50c6fe2e9a3cc1d70278cabb616c",
"assets/AssetManifest.bin.json": "6e9aa064108befd3545e5c1e8923e0b0",
"assets/AssetManifest.json": "ea4dbff0a70eae07ff5b3b8f1e607dda",
"assets/assets/images/aibuilder.png": "20c5370bb880ae9b41bee46e87e86da3",
"assets/assets/images/android_icon.png": "16d76bcc1b7c452ee1a0d10bd9f3c9a1",
"assets/assets/images/apps.png": "3b4b646fd409cb870a135ed4b739e890",
"assets/assets/images/arduino.png": "175f57ebc2a4aa2581ad4baecc5560e2",
"assets/assets/images/automate.png": "9ad2189e84c8732659b3b3d161dee35a",
"assets/assets/images/azure.png": "987141c7fb596a20430dd95774110fb1",
"assets/assets/images/bi.png": "a5a90dc11e83e4b4eccaa252c5975ce2",
"assets/assets/images/c.png": "e77435780ae86e1edccb4dab117dc167",
"assets/assets/images/co.png": "6fd7a8f2364b3a33c14e8f6dc862f710",
"assets/assets/images/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/images/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/images/databrick.png": "5dcf9b93cd17079cb650bc0107275ef2",
"assets/assets/images/dax.png": "b83c229bc83cfbb2b144ff7516eb4846",
"assets/assets/images/desktop_icon.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/e31a17b9": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/images/firebase.png": "c9e1c7a50faa42d1583b54038aac3fae",
"assets/assets/images/flutter1.png": "d4b64d7bba6e6d281a30d110aff2be40",
"assets/assets/images/flux.png": "de728bfe2a3ff2cfcdfd2f0258072ec2",
"assets/assets/images/forms.png": "cd10be49a450e9891a58e429bf68957b",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/grafana%2520copy.png": "799da75bc8e4675f6990a09e83b04985",
"assets/assets/images/grafana.png": "799da75bc8e4675f6990a09e83b04985",
"assets/assets/images/gx3.png": "861bf2cac5b9bf4102a814af3e82ca13",
"assets/assets/images/img1.png": "7963516d4b31a0013cf24ea22872c26d",
"assets/assets/images/influxdb.png": "3d8d1e59885590c7f4b114b5f0ab3598",
"assets/assets/images/ios_icon.png": "fbd75fd6af3e3ba5c1277b76803c28e7",
"assets/assets/images/kafka.png": "2257cd9aac8274fb0adec4d936f908af",
"assets/assets/images/ladder.png": "da9dbc96ec374761f635682a6e058aff",
"assets/assets/images/linkedin.png": "b2597cd80c8da3f8d26d0c1bfb5ed71d",
"assets/assets/images/linux.png": "56974b4a61f4dbbe624cc6ca69b93b60",
"assets/assets/images/lists.png": "be82d37d32a383873ae1e9695e8c8d2a",
"assets/assets/images/mqtt.png": "aed36f1f8e5215ec2b462a559d31684f",
"assets/assets/images/oracle.jpg": "57386ccabe3170f60832790bf8fa9222",
"assets/assets/images/oracle.png": "fb51625832f97bf7ee7e2b9dd9b512c0",
"assets/assets/images/planner.png": "fa24895efc9c6f720a12d66372ef8048",
"assets/assets/images/pycharm.png": "5da70323336e660f903eaed202688082",
"assets/assets/images/python1.png": "f94eb89e1da1f5b2572332bfce032b3f",
"assets/assets/images/qt.png": "d492d80abcb4b7209547f470c80b7fa5",
"assets/assets/images/roki.png": "cb2a60e15a509a1adfa7917e1f9f68a4",
"assets/assets/images/sheets.png": "f244b651ac890f313b1439011ba3bffb",
"assets/assets/images/siemens.png": "68d892205b1c998a70fac03b3aef85d4",
"assets/assets/images/spark.png": "5d27c38ae6e215068125ef2f3dc3874b",
"assets/assets/images/sql.png": "2b5af72f6c5d772b7dfc9da531828028",
"assets/assets/images/streamanalytics.png": "62f8cd70c2e950282115c1ff7bd2ccaa",
"assets/assets/images/vrep.png": "10bab37400d1bcef8f227d37175c20c3",
"assets/assets/images/vscode.png": "c674346f730f23f63282c24423697c98",
"assets/assets/images/web_icon.png": "4a817a9e9f2e49e52583f172973d4d3f",
"assets/assets/images/windows.png": "5de5ef2789a2882028d7eda1303b82ea",
"assets/assets/projects/41244d10": "0c47896d771acaddb5522f7d6bdc1027",
"assets/assets/projects/419c95d": "c338c07a7753dda4a36bed1d2944de2a",
"assets/assets/projects/4M.MP4": "e8f2b2b471f273999af0508b77669d9a",
"assets/assets/projects/4m.png": "d6b2eadcf22c8fe37e2d72f064b684d7",
"assets/assets/projects/4mimg.png": "8da8b7bec739984871877771af9587d8",
"assets/assets/projects/5s.mp4": "b391ce0ece6ff4043e2fccb8cd2ede61",
"assets/assets/projects/5s.png": "945c279b9adefdc0e71d14f79693670e",
"assets/assets/projects/5simg.png": "4537247899c1b0b7b7926a047537d1a6",
"assets/assets/projects/access.mp4": "8f8277519093d635e967169516a0b8aa",
"assets/assets/projects/accident.mp4": "11ec7b33b3b9e4b9d8b9f2f9e323722d",
"assets/assets/projects/accimg.png": "e60cec5706f50d54b1cb364f1800c1f5",
"assets/assets/projects/agv.mp4": "27eb2b006f443091ca9482b28ca066c3",
"assets/assets/projects/agvimg.png": "1f2152c1e160604e09557d90fc45e37e",
"assets/assets/projects/bi.png": "b2800844e0ba2eeb4201a987c15a8989",
"assets/assets/projects/booster.MP4": "e9ac9fcdf2ae387ec88c0f642fabcf30",
"assets/assets/projects/booster.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/boostersimg.png": "adf4fb8436961b892a2f233fb48c36df",
"assets/assets/projects/bosch.png": "f6921128286450b8e13146c3aa2174aa",
"assets/assets/projects/bubbleimg.png": "276363221863f7edc43c1988b93f91f0",
"assets/assets/projects/bubbletest.mov": "294c0c3d069cf97485338b17ed43f4b5",
"assets/assets/projects/bubbletest.mp4": "3d484da534f18a4ab05b0613285f7d40",
"assets/assets/projects/bubbletest.png": "69af0a992bfbce7d823e611cfd6380bd",
"assets/assets/projects/C.png": "dcb140cbf5d7e58706b22362568227fd",
"assets/assets/projects/car.mp4": "985587b41f5576fb221b341ba6f5f77c",
"assets/assets/projects/carimg.png": "a8fbeeb69b006a79e8d9f9eb0bb4ea7c",
"assets/assets/projects/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/projects/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/projects/daikin.png": "6abfc63a0c6f804d246645152f4ae94c",
"assets/assets/projects/ecr.mp4": "a40fc7388b546666d2460e3f52598b6a",
"assets/assets/projects/ecr.png": "fef206b347700a601a35decfb2a6f190",
"assets/assets/projects/ecrimg.png": "8ba235e16e03d59bebb3820bef674b31",
"assets/assets/projects/edar.mp4": "a7b951d0b98e26e95fdb30704312237d",
"assets/assets/projects/edar.png": "1c5e0c34ebbc0d63b24fd051d6de375a",
"assets/assets/projects/edarimg.png": "13540da9ca1672dbee1395e06ce1a8aa",
"assets/assets/projects/emailandfirebase.png": "d6620c0165f7ffda4a992a494edc6c24",
"assets/assets/projects/face.png": "59e8f1cac365dbc64b2c0def4444d7a7",
"assets/assets/projects/faceimg.png": "0ec6bd32f5e9138361b1291374ded1d7",
"assets/assets/projects/fibo.png": "7c80d418f63a184927de208645938899",
"assets/assets/projects/flutter.png": "9ceba8cfd9db18f7dfd8be50d46f7aee",
"assets/assets/projects/forms.png": "0c47896d771acaddb5522f7d6bdc1027",
"assets/assets/projects/image.png": "ad09ddabeaf799c44ba9129ba67b2306",
"assets/assets/projects/img.png": "1023e168a3f5b75c2a62f4acbbedf180",
"assets/assets/projects/it.MP4": "c338c07a7753dda4a36bed1d2944de2a",
"assets/assets/projects/it.png": "1fbac6a690a164067382e91cb1f1593e",
"assets/assets/projects/itimg.png": "c9c851c90b6d05e40ad5a645c4218ba6",
"assets/assets/projects/label.mp4": "83470dfead9c83993d5ee5b6961c4b65",
"assets/assets/projects/labelimg.png": "af11982abc90f3971df1754b17a1fb7b",
"assets/assets/projects/lane.mp4": "c44b59dd653c22dee7836dc461b1df51",
"assets/assets/projects/laneimg.png": "789311ded0dbf98e98ab8f80b152c0d0",
"assets/assets/projects/lists.png": "520154d38e46b11b553e08ff75d27f8f",
"assets/assets/projects/loginimg.png": "b663ec7b2826b61043137485f6a3fc25",
"assets/assets/projects/mitsu.png": "b99aca6f9c7b5c30fa30dc10627f8a30",
"assets/assets/projects/msm.mp4": "a425c53ec2f0a850aeb0568f34ed2372",
"assets/assets/projects/msmimg.png": "b98f1e7f3b72fd72be027656580803b2",
"assets/assets/projects/mut.png": "b60a4a9beb1f7c3e0315935f7b7e6653",
"assets/assets/projects/NewModel.MP4": "4d18e60dceefb5d68137c6e39a761da1",
"assets/assets/projects/NewModel.png": "28129d5e33f07b4957b9d93179c08c3b",
"assets/assets/projects/newmodelimg.png": "71c35921c63f4eb4c006bf05c4a4cac1",
"assets/assets/projects/outlook.png": "928023ff3989615feaa18362854f1afc",
"assets/assets/projects/pickimg.png": "d3d525562ab3f1e419dc4ebd1e8b1576",
"assets/assets/projects/picking.mp4": "ea0c238eef3a1c9315c512db76a6586d",
"assets/assets/projects/pincheck.png": "b44495620470000022434dba1d599e84",
"assets/assets/projects/pinheight.mp4": "7c43e56aac012a4d8d510b199f8ab26a",
"assets/assets/projects/pinimg.png": "0c5b0c65bc3096a95ecfc8e3cc0d9659",
"assets/assets/projects/planner.png": "05b253d6fd086eb461947c5a8355e490",
"assets/assets/projects/PO.mp4": "c6c5fd438c343bea8d5710c0f6e43cc4",
"assets/assets/projects/po.png": "14cc1a7821eddf4e279672e9ad1bff7f",
"assets/assets/projects/POimg.png": "103df156663ee34a20503c84d6a2332d",
"assets/assets/projects/powerapp.png": "9d9818ed44d060088e021a4a55369bca",
"assets/assets/projects/powerautomate.ico": "1a3716213f41c1b8d77a3c50881a84c3",
"assets/assets/projects/py.png": "08f6cfdd9a43b1a9b72793b42d21b13f",
"assets/assets/projects/python.png": "a9e58974ef23ffe5eb9bd3bbac0b5645",
"assets/assets/projects/scap.png": "bdd86cbe1fce4b1f1d787e91276fc727",
"assets/assets/projects/scrap.mp4": "36928bda10bff7666eae028e798661f3",
"assets/assets/projects/scrap.png": "7ff3819f5eb147cb99e50bc780714df4",
"assets/assets/projects/scrapimg.png": "4fdd0f27664b896684d9470fb3f2e816",
"assets/assets/projects/seatbook.mp4": "cb78ed9a0958f86fdf3832dade94501a",
"assets/assets/projects/seatbookimg.png": "a796079d1f81ce18c8989ddb19591aba",
"assets/assets/projects/sharepoint.png": "184df60f893a8bfd8e6610998a1156eb",
"assets/assets/projects/siemens.png": "b0d98927b39bc6a056d4e9bdef258943",
"assets/assets/projects/signin.MP4": "fbc07575f2af81e6e6613abe79447b8e",
"assets/assets/projects/swimimg.png": "b099e6224332703fa0a6323e1973c568",
"assets/assets/projects/swimp.mp4": "276ac59b8f1d359f6a30f173552bc754",
"assets/assets/projects/swimp.png": "a7ecfb43a8f2ba84f7e873cc5f525d9e",
"assets/assets/projects/tank.mp4": "5b2b0f4f49e242f2293830546edc5998",
"assets/assets/projects/tankimg.png": "8a028c01ee85bddfced04742eb6a84eb",
"assets/assets/projects/teams.png": "920a7a591ba7dcb61e1aa2779d5ae30f",
"assets/assets/projects/todo.MP4": "8f7010102890fb29e28f0b78420cdd53",
"assets/assets/projects/todoimg.png": "185e63364b71ef5f2536acdb456dcb06",
"assets/assets/projects/toolimg.png": "27da4c6e67a106fc43cc4469c9401358",
"assets/assets/projects/toollife.mp4": "6ffe1aee7e5f1c37c5cceaaad4e2a4c7",
"assets/assets/projects/toollife.png": "7ddfe72aa47f8f700b1088144c3ea12b",
"assets/assets/projects/tools.png": "2d74b6576ef54f93e3d1b680e3fa044d",
"assets/assets/projects/trace.mp4": "2637fb013a015a060ec0c856902104ec",
"assets/assets/projects/trace.png": "b64ec02c25e99fcdc91e334980da71f9",
"assets/assets/projects/traceimg.png": "c28212943eb0cde172d83956fed950de",
"assets/assets/projects/ui.gif": "eab2853cc202c16378f932d587fe1d0a",
"assets/assets/projects/werbi.MP4": "2abf69700755f2c80eff6877afc8a7d1",
"assets/assets/projects/werbi.png": "028e55c62bfc518f8e5cad1c8c32ea6d",
"assets/assets/projects/werbiimg.png": "7346e588719d9786285dda085ca96284",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e423298f0b0a9265386c5412f413a893",
"assets/NOTICES": "78bb98da328aac01996d394e4a342229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1bd113d699faa9c2949db4bdc6df8a1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "825811ea5068fbbe62a9e861b7caa1cf",
"/": "825811ea5068fbbe62a9e861b7caa1cf",
"main.dart.js": "6d18ffdade2249eb4f62578cd2a3db62",
"manifest.json": "a43b48cf1e6677287f4d852ea8d1212d",
"version.json": "03ac4cb9478445346aaa58b867540bb2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
