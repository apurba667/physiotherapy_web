'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "262426eea37ba5af988a5b740af99228",
"version.json": "bf025fe9d15386cc5458e1c7154ffd33",
"index.html": "3e366722630cbeb317057dad40741419",
"/": "3e366722630cbeb317057dad40741419",
"main.dart.js": "a32e5ec0146e0e10acc8705c76955c62",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32c892a04aecb1a886a015833ebd5acc",
".git/config": "c5d6353f55dbe288dce3cde077561996",
".git/objects/95/b983faff5d2c512404866c4820aad10908a770": "4dc7db6e123fb8bf9ee49f46ab748606",
".git/objects/59/c2ae546cf6e37bcd88e34daa5534bd1074302a": "fbd80537c70eb866d389ac442f86cf46",
".git/objects/0c/13dc0e7fa1ea24f3480ed50987123bd5e7a490": "dfcc0fe3a09c292c6c2e214c9c142d45",
".git/objects/66/de3c549a494fbd8bb308e7f74f4051c04d30ec": "e7df7c6afc09b1ff8c3317c1b5da995c",
".git/objects/68/68987d8431dd6458e18639c6f73f2689783f92": "09702d95cc967656db2335a0aa82fd51",
".git/objects/68/ca8cdc2b1fe4dc0cd6cd0fd84c5740dab074b7": "7bcb541483962ad595c8fd1c3479a5e8",
".git/objects/57/a4c179126d6bb7d9c1e5a6dcb9f02f8529e230": "99a6ed7b7eed5bf1dadcda5f0d84ba7f",
".git/objects/57/44f322a9f47a014c5db8eabca5bae2d52ce720": "cbed6ca23e5f066814dda6701f9427e1",
".git/objects/3b/06bcf24e6461251b5328b8cb40e0d6486a0d60": "f82cd8118be4788258c5c03352e7f2cc",
".git/objects/03/d93bd49b80a08182768b4b455dc5fadc9fe3dd": "18f946e960f10402a1280262fee0c343",
".git/objects/9e/2189b3d53e6b7ec13f1b6af7865db13abb147f": "6062efd1c2148d33328c944b828a8cdd",
".git/objects/04/65d0b8a661e62dcc0f873ae213064322a3400d": "cb43c6114bc67b43676832712d681353",
".git/objects/04/ee5f85e05135c4769480d2fc3ef92bad6b670b": "b50032debf6e0613d640ff25f272de29",
".git/objects/35/d02e18251224ecbf8b0cd2c05085d6a83f67a8": "b61a1f66114e93f746d75696ad830589",
".git/objects/35/a2a1111edd8045b908272ad7995f5f6da0a930": "2a2b8c6b82deed3dcb038691acbf4ca8",
".git/objects/3c/0e84c667e174d5525bb52e9ecfe364f6fe1440": "81dad2011a438db8cd116bf8ca283667",
".git/objects/51/0b0c6366dfa22d50f44bc7dfec48b9849eb9fe": "56d5707147f062795453df9272ef7025",
".git/objects/58/e2cf2baca2cc42b22d0a08b6d9edfc78902e87": "1229aa2f2cf8111640312f267ad69668",
".git/objects/67/a146ea55a42f34380cfa97af11144db7a82400": "33783fbcb0b5a8138486842a1d7a431f",
".git/objects/67/2eeaea2cbdcd75226e575130da3fa9d7d247aa": "c78d7cc3c7e3687e3c58368db5d252ca",
".git/objects/0b/7f3c0491eb4f314c4338160fa5ca63a3e3fbe8": "6c95ae1e4aea97ab6c67c489c40a5691",
".git/objects/0b/f1fe523927d6f45c58489399f19245c2ed15d4": "e3ac887eb84c7f3eefbb4e219b9916cc",
".git/objects/60/939d7131b67cc42fc65deef5702d8b110ae6cc": "05bdfa204736809de43363b2afe25810",
".git/objects/34/737b2a676c918492d320f56b8c2860a89c76e5": "03fa2006d214660b34e7a889da707734",
".git/objects/05/a9c09613574de9b77071261d4429ad6457f4f3": "ac4627b63d6bbc4a63e59c613b45193e",
".git/objects/9d/8863ad39e23cc2734810dc0b1a0688f81a2588": "aa05182f1503d7e15001a0e66691567c",
".git/objects/9c/d4622ea2a5d0a594064be47316a3b9491fc1cd": "e73190c22c6a43b800c3af787aaba2f8",
".git/objects/9c/8e60022f9bec21b70c410cd0536145e40dc17f": "3e3789c35a4c688b2644b9e949ba5467",
".git/objects/b2/a5400a53ab6c0af058473f94d093b9887788e1": "bfd1128185b65e7f75a566b2e260f4b8",
".git/objects/bb/c8adb8e157652689a15386c7c02047971ae31d": "81c94dbc93d88f11b2b7a89b20e60dad",
".git/objects/d7/3f739ff3905a564686602d7fad1241068458c7": "255611f722050304ac9fc465e15060de",
".git/objects/d0/c0c659a8a51fc09e0087e5577a1996c5464153": "5dc64f877da8579c46cccdf60a6fb9b5",
".git/objects/be/fce6af890a4edf6d3c858878b30c1c2e2cd803": "a6c70daafc28408c562234b3d09e0578",
".git/objects/b3/a9feb6953495f425b9a69c83b532bdacf2b0cb": "d637f650947c45360bc3257a7eebf2da",
".git/objects/df/ec4f60f473956cc22d698a0c48d838d15e8959": "90a2b051e4fa3c3554f5022f1e9ba913",
".git/objects/da/3ac51219964ddce076395c2dcedc2c140c4a81": "14a680268afae1e306a4dd2811384cf6",
".git/objects/a2/98038c8d743cd3970ee8c44c070e12f411ffb7": "fea7019bd8e4c0092f578c59979cc9fa",
".git/objects/a2/208334659e45571cb364b288b1aee674a5005f": "6d0b3997067ff039c9c05fc4a3e70da0",
".git/objects/bd/629834ff37aceea9e213a4cc9efed40e689787": "9e70185cc667a93991a99e509c075fa4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/5ea9c20991cf389802d5924b6716395bcea66a": "20b5c0c0e36fd5721ea0a9e1e0e573ad",
".git/objects/bc/8cfeb9c9e24f5ec199f9c56dab806d83fbe6ef": "344542abb584e45e13f4c23bc59c30d9",
".git/objects/f3/04111a9e35ce538df4df6df2f3025902df436a": "46ca059dd2a1b2d4d7fa31e3a656ac44",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6df7034f6c4e0bbaddb57dc5b29214fc764cb7": "4a1f308f0d7176c2166d5923c298ae5b",
".git/objects/ee/d4b24e4e8ef5155750adf9517a2fe9edf92847": "6caccab795d10cb8f2cf13d03e24dea4",
".git/objects/ee/dc27b15a20609a77f2d6c88a1810cd349efd76": "3c7b1f4e35573e8c9a8339350030e64a",
".git/objects/f2/c9ebab0d53e1f95e6b4943880321d0dc187ade": "88908e835f3a41103cb8bf0c6848b093",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/ef09b635e13007ef4f68f76f8608bcea16c859": "262aa35037792cc3bec7860142f1acf1",
".git/objects/fb/e7181dd393a7e169618702a84bd557d9876761": "6bafb225bacc24120d118251f0d7a3f8",
".git/objects/c1/65102a016e31d68692e9986bc2c9c56421fc12": "9b685dab796b3e224aeb9b3a69de569b",
".git/objects/20/a49049ecaae3ca22000e34d50aa14fcbcae993": "6d85ffb56c74238345a63dd3b6fb46d3",
".git/objects/18/dce28afc3e4feeae18337127a9227188459d24": "bd0125ecffa0b3844d1f74abc426a679",
".git/objects/7d/7e274dc5fe556ae5d95a8ce2e1a12042ef9d90": "49582740e57237baa738cb42ac9e28c5",
".git/objects/7c/0dc414877fe1ac6228d49662012da68f27a31f": "ffe3ddb58be901cbcbe7a3be4cd11522",
".git/objects/42/5ac34c0c8bb22d7580baef876bf18fcb654caf": "d3ec64f3ede9495ad24fd0b4e54653e4",
".git/objects/42/9e5c96f44286e998136f64f4e82e805f0c3c13": "a403d3c3e74656848b6d3e6fba1efb34",
".git/objects/73/5fe05d2d9072b1c725a7c5304bd56445371b1e": "60897b768b1848dede52743f3835bccd",
".git/objects/73/09b82ae899b5a6f638d37337a3de1655dbac8d": "21942151335236b47191a837de639dc1",
".git/objects/87/c3eab023d67d67d5e4e4fc5f446755dd58a678": "c443a2a2446b91c3aff96b6870380fe0",
".git/objects/87/2b36bfde8020cb1daa4a6a9cec9098372b18b9": "11398b67bcd34cd1f7282f94b51a241b",
".git/objects/80/1e37246c6345c2e4600b9146d217eeb4ac7513": "6aa64dd734cc647fc10829e7b421cf34",
".git/objects/80/0a4101f7b9cac3d33eb8df8b5f7737309d639c": "c09ae93d3434e05b0206497694f404e2",
".git/objects/80/5ca0b75d05da6e99bd3ebc1c1699222271baf2": "1ccae3341222aa469795cf371e60c036",
".git/objects/28/6a48c5a453d73fb5ce555f9a0656a923e22e96": "99f80d4c240a77ee916c880b7fc4f03d",
".git/objects/17/fa746add0121ea0bffc9f5194db51f95cb16dd": "114df4ee66fe174d0bcdd6e117e44da6",
".git/objects/17/30370aba4bc695b1ae425bb49e1f742850ae2c": "97875d159c54de2fdf7bbc60c1a4f770",
".git/objects/17/15ef0b79c8b9c18208be483bd19b5b2556d9bb": "c972f9394b52512409af34b7bca6541f",
".git/objects/8a/610617ac8d82e6793d6b8d1f64ebd774f1f423": "239ca42dc1a52cfcb235a78872d32bc6",
".git/objects/8a/e5302fc0e0ae0e35946669b536a77966572dc8": "ca73ee00053990dd990a06a76974608c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/58d118bc7e23326405329e47b81d8b908bc858": "6d7d636c5f69dcbb4478ba2452b1b97b",
".git/objects/4c/472498f6d1600730c210257ffde698a9f4c834": "6be9d769e9b62dd2d9b6f38cdd7b40aa",
".git/objects/26/b79732d17f05998fcfb7f7a18bcf351c97e30c": "708f6df1abc562ac455e69acc5506bf8",
".git/objects/26/abd30cd114d2060ae76af240bccf463ae59220": "abc5a6ba70bc9c9b2b244c105ee2dfb1",
".git/objects/21/173344ba91fcb070ed2bd34c1ec8f8165fb952": "0893a8f41662ca13fab42ce3ab871216",
".git/objects/4d/7f6fcb27de3d2ca3dca0c0a5dd18b4eb3c73c6": "bd014e74daf98eda14d114c7fe91a07c",
".git/objects/75/78e064c84246453aa23aee9df7f0a2fcadb8e2": "13ef7d8d205b660c1700689fea34102f",
".git/objects/86/34a97c911ebed728ca5d3ca1ecbd526e7e6533": "a19c71a985a50a082c95d30c9c7ade17",
".git/objects/72/e7e8314d82a248f5c5d39683e918e7d59bbeb9": "b76e7e47f79378869b9f96ad382f8b28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1721d20951839911ce7c402fb886d9cea42e9f": "105acb85b3a5b2e764a39d13c3ae014f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/6e/75487e40bc863aebae64c4b87e2189e8d4c199": "5e59761ea995d5d146c4e5124bfd0bef",
".git/objects/36/783c1deeab57c05a1d689fbff30fa89a6f100f": "8246423201dc7e7b7f8692149b37f822",
".git/objects/5c/2f1a69048d7b4d4ba15431e1154500a6202eac": "2cf13f480610dfbb2d5612ab4690cc65",
".git/objects/09/bef435aa1f1168a5a6b8a50b6a002bd64f83bc": "296adebd62a6b3e14e55bd70dd1cfd5d",
".git/objects/91/08ea89f21b710aebaa30f43780f80225df88d3": "b96bf75f68d5e6343a9eea7b2178c8bb",
".git/objects/65/42de52670ce5ec73b1ddc8d03eac72cc1b51df": "c69d932c40316403ec0c71b02d7837bb",
".git/objects/65/65f6e6cdbb8619b8a84c1d5970e637e696e041": "f0bb4c4b8fa1fdd7486a681c33b8f5f1",
".git/objects/62/9ac071289c20c341c385b817b49ca91d00d0e5": "626bbe948877328e731c8d7c776e89e2",
".git/objects/54/923c8ad2b5a4e5fa20cd97955beb8196c1b192": "fa2d3a51c4c1cb8117e705e217f23ca8",
".git/objects/54/5919c1b517a20efc975bb9304cedd2d0850af2": "c9dba75b2d047558f3fb825662b00419",
".git/objects/54/1568a0fbca8ee35892b6c08ebf0d8520bc54cf": "752c83ab5259d69bd0411ed186c93235",
".git/objects/53/e225ee8f69609dab29dc01fdcc9547dc2fa2e4": "27318afb8b3fa87dff16489932ee69a4",
".git/objects/3f/5fb7cbc8140575afe345685c58c6bda52ecfe9": "852aef7dfe56b0d5fe41a290e2b7f988",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/5e/8448cfdd8ff56e1090bdec7886e124dc40e632": "bb77138b3a7314f7a73f388f2a84d9ad",
".git/objects/5e/7f19b7027f92bbf22d144455210785c10f8083": "4a0675e5d3c067d773421a72297706e8",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6d/bda80d2b21993df8dca8e826c527a4c8529a6b": "faee0be164170a5c0a738273cb4e70aa",
".git/objects/01/dbfcf2d552d9ec46e740328ba2fa2ab3ce966e": "7c8aecbca867ca00846690c57f2887bf",
".git/objects/01/1842b856d2844c35f671e492a3793c1dea487f": "9a7fa59443b8925d7b787ea6939b9d2f",
".git/objects/06/d25d140cca7983fb045273695e729fbcbd35c0": "6539139afde4d49d638dbd2c5cf5f755",
".git/objects/52/7b665b052f9cf5f47314ee9406230e8d86aad9": "fd1354f45879ace3f7c471e9c358d463",
".git/objects/55/70739744f33175105f48ad01ce03123ac3a6b3": "bb9d5140646647373de2e378dc0079d1",
".git/objects/97/ee3acbc28bdbcea49f43a627e9722296df37d4": "8a1ac43ccf3f795fb1c9f8ac6ef457db",
".git/objects/0f/25d6d8d6dcf8df83190dcd253bdbc83f7da8e2": "99ca4edba851e2586f2894fe3814097f",
".git/objects/0f/48f8a1acdb9f32c4706674d6fcee8f4b2191c2": "a86e059a0529a89875b42c0592e0d56b",
".git/objects/64/7f3f4ba1623f4b64cdebffb9fd6cc1ad0c704c": "416e43964fba9d9c902e1cadcacbf40f",
".git/objects/bf/d1a8cadc32a271ad3ff6212be7bbd877862b11": "24efe6a14db5483409b8ef200357823e",
".git/objects/bf/b4db1b8ccc20650d97263e91179e4d0c1e83e8": "daeb1466faa20fe0774f6fd6d0fdbdeb",
".git/objects/bf/c5e39e5294aa3fa5ab6b150d59d8b7cf714b6b": "38eed62b59a1edd5bb193de4c989c6b9",
".git/objects/a0/a18cd72e11c7416abde6f8a3e372485a8b7f10": "f415f7900abcb6fff59a4219caec09f1",
".git/objects/a0/8c480d01947a569b4fefd434975e6d32417746": "3ff84a66a881e0191eeebdfb70cdd49d",
".git/objects/a7/6a911f8a2b55b486e3477655f7b4ec87a7a35d": "4f0f13c2462d5f8176ccf04d773e7ce5",
".git/objects/a7/cdf6bb3ff221b26b502d787d575d24dac93dd1": "ba7ad0e971627f6e6ff88dc0fba73681",
".git/objects/dd/15b940a2d1e25091260ac3b6bf63f8f09f5bf6": "6c6d32daec907a6b05dc515b04befdcf",
".git/objects/dd/6eb26bf1d85cccfa88dcb6f3a8d8a336219717": "b1f9ad6dddf7496720c6d1fa752ff790",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d7d93ef2fdd738851b17d4781564e2486ac289": "9a5ac0dd070af16fa1a1cef2e99737ed",
".git/objects/de/dcbb41c7e143940dbfe2eb5bae3ba6264e247a": "eabc353bf4bea5e8a711708b6390b3e1",
".git/objects/b0/54e7f17299d618aaf6ba7c8f3d44812c74046c": "4ca92ca072055885fe0657c0ecb78c25",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6795b9a9c2d585b24d8e33f9b08995f4ec5539": "62221def9072ef9a653db8d550b88337",
".git/objects/a1/1c19c09c87db807c29ce98c88117b69c0b71cd": "c907509709b723d1f0b3db0818ddeba3",
".git/objects/c4/eaea4deb0f57aa99a07307e80bad94003d3e16": "e17704dc742c859fc1676e34ea4a9958",
".git/objects/e6/2450a1f2c465ee824ddda3c2c92188128c9cce": "7c11de59fc6b99c62b1c1af596fff0ee",
".git/objects/f9/8f2fd4ada8023eb4bd4c6407f90c03af283624": "af7984d1c06d3bad729fbe9eca20f8e6",
".git/objects/f0/bcb19805c0265c5816c96262f189c37e58e31a": "51993ffccdb1dc3ee28cdde5b6ad7983",
".git/objects/f0/5aa4b22b9ce0e755d5137acab86484d2fe073f": "f03f4df39849dc66eb1d8bd9022795c7",
".git/objects/e8/f15f2b8f6a98c506c5e1b587e36891737cfb61": "8c1eec9d5fee30c6dc550cf32709d80d",
".git/objects/ff/fca7878462e67fde905dd74392fd9a79bdcf31": "53b60473556ba8b045ef60206e858c7d",
".git/objects/c5/66def1959c228b994ef9c025b465369d01090e": "0c865b3e53a0ad32e862f25918dd5ec6",
".git/objects/c5/3f96176d44da83bc197f54ce0b0997e43fb5bb": "884ecee8e2ef6343a617dea4afcf1e31",
".git/objects/c2/b5f5386dc7f2e76af185caa6c6d2c99fb1aa23": "79be66fd528e43325b11debb7d5b50ed",
".git/objects/f6/9a5d88427998058707f5e7a5de8ad4e7fbd5b3": "3efcd92a22e526b8f3ec688864c9b872",
".git/objects/f6/e330e6c7ab67d97d13f3dec4d41927acbdd1a5": "fe1ee59abad3fbea09e72887a2f08c54",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/b935b6cf53b41ee003f19247d44db870495566": "bcf0995e13b22ce5a9d7fa9731d7382f",
".git/objects/2d/198c1e4c51bd7c0f08d3f9047b03902a7a59bd": "dad941a9ae7ebd22759fc70a52d643b5",
".git/objects/41/2d4795b4d615a353219490a5d4fdf6a4eab560": "95f6019079ca808739e66fd4c00bca0b",
".git/objects/83/ac5d5cdbb758c674be5f7b549387b773bed412": "395b1332c71de5d4606f36c2f2411690",
".git/objects/48/8c719eda09b4577acb7130d2c676ac319ae1ac": "f53ef97521d445f61aee2a61d4755aa3",
".git/objects/1e/5de9bf9ee971be90f3d5ad8b3260b618ac07f6": "e21f0a758e98cb0a396f265f08418ac8",
".git/objects/1e/54a86f80eec9b3da9d72d436cef5639fa8dc66": "3ec681bd76761614c211bd24c8cc4cee",
".git/objects/23/a882e497ce2a6dd86db2437fcf79165f36cbcb": "87d5946eb3175e457eb57244d926f31d",
".git/objects/15/888c676e4befc50f8541d13a9d1b9409252740": "4b5b0303426edd461e2992dd82e56cce",
".git/objects/85/04d915d2b9155db59cc4223c39b9a1a7c8eca9": "38908a9b2aafee6d46f4ccbb07336446",
".git/objects/76/808a79e9fab7b484d8b848195c085983697a52": "b0ce92d74be430282f98fc4cf1cf9297",
".git/objects/76/af2a5e85b19ba3b9f9b9ce5d788de3f49b3a07": "73c1b2d9fb7c5ae3d267095050415fcf",
".git/objects/49/f7d4b3c7f11575c18da76baf6126af5dc50fd4": "b1f4803b23aff24fe4dfc22efcea9738",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/2e/4fe6d3e350337fc5227e115e36e3ad3ba8e5df": "2a18985794521839bc4617c6cd815a61",
".git/objects/2e/b8cb881ed7e973a930b91ccf9e9a375b5cec07": "bf7db6449db9806574212f059ee7234e",
".git/objects/47/fda8d57705765d28619a67ca6901a0bee11b4a": "f32d75d7f6a8170e476a10a00582888b",
".git/objects/47/b4183bfc9b810f3b0b6b2c1415830fda4dffd2": "65c14163757b3752969e207daca56176",
".git/objects/47/77cc37f3fcfb5bafe19bd468e3f554a1be25dc": "38ee54d132cf163757a25472465f8581",
".git/objects/8b/87991e380d614b6de36ac766aa12e214256810": "4fd04f495661332c173b5b8d3f273b4f",
".git/objects/13/1b573920a28d73d534accc414f64e3efc27e7e": "05f73083384fdb8e89b2cac276b38860",
".git/objects/7a/199e9671dbb4e4fa638e57e17b80d8fdcbb3bb": "498c08d94d1cb893c20dec17a3f49446",
".git/objects/7a/280696728b415946c4e132020d6d72f4190b49": "d0be4cd2d4de0963a6af6a432cc22498",
".git/objects/14/c4aba2fb4df0de7bd6ff2e81fe60461d69d7ed": "8d632eb15429c9c6fcbb4853b21feb45",
".git/objects/8e/6e946e68a83521acc5b4ad66dc13b28524f241": "6dd3203c488f8803dea80d642c50d245",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75ed947df12017c3d23cfe69797daa57",
".git/logs/refs/heads/main": "239e418e100580500f206f7bd2e25e1c",
".git/logs/refs/remotes/origin/main": "d62200b4bf9c1c9d189b0d69431e57ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ab1aabaa3a753958b58b754a117b269a",
".git/refs/remotes/origin/main": "ab1aabaa3a753958b58b754a117b269a",
".git/index": "722f995c0a127b9d7daf9acd27b8eb26",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "ed0183aea4bb834e2b7fc42fc5526eaf",
"assets/NOTICES": "4f0cc9ff04d713e22d60e8dac82930b3",
"assets/FontManifest.json": "3d510108bf55dc98d8f285b83c171f07",
"assets/AssetManifest.bin.json": "53453a65764a79995c23e97c415e263f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b4a986282960b773e0f01c465f2b8a95",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7d561696df1318244e95dc770c49b0fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "860208b8cde709357b2dd8817c942dbc",
"assets/AssetManifest.bin": "cad02af4bbdea5d2629e8160dd68a1cd",
"assets/fonts/MaterialIcons-Regular.otf": "5434b375b816b5448fe8e193d0bb2ff5",
"assets/assets/images/slider3.jpg": "6e994536bfbc7608b052cb12c489c6f9",
"assets/assets/images/slider2.jpg": "182d95a54251f63fc7f2a408bec1f8d8",
"assets/assets/images/crp.jpeg": "a3f16ee3046a85a62b8c1107c9450201",
"assets/assets/images/prescription.png": "b48e47fb8a3f085a5c9d19982a78174e",
"assets/assets/images/prescription2.png": "2c90f6c1cee926ccb627dbea89916998",
"assets/assets/images/logo.png": "f3b96ec0716b69ccdddc3a23cb692a64",
"assets/assets/images/mainlogo.png": "af697d680d97c08a59fc09d1787bf87a",
"assets/assets/images/slider1.jpeg": "6c71d7b28cade5dc14a7e6cdb05e375f",
"assets/assets/icons/icon.png": "30b9cb736f57b9f5171bf9aadc261059",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/facebook.png": "2719ea7d32cd853384f5585f78b5f5aa",
"assets/assets/fonts/Notosan.ttf": "0cc3f543b2f6f11cbbe121eb341f3e3f",
"assets/assets/fonts/Siyamrupali.ttf": "03ca9b19c7fcdb22fbae283127066b4d",
"assets/assets/fonts/SolaimanLipi.ttf": "606055243509260f506382cc97cbafbf",
"assets/assets/animations/addpatient.json": "200818f65e9760c21065396311a4c780",
"assets/assets/animations/patientrecord.json": "61972a413030d9c07aec60b0380dae28",
"assets/assets/animations/assessment.json": "b50c055a2f4a99eefc8825970531369d",
"assets/assets/animations/loading.json": "9b7d2f64714a76dbdd3b98b40b6a2170",
"assets/assets/animations/patientrecords.json": "bb51df4046df8c3700b8d1847121cc66",
"assets/assets/animations/splash.json": "89e691ff2eca39e021c701c4d19f7a83",
"assets/assets/animations/prescription.json": "4c8664b26e50ab95e57397b874decb95",
"assets/assets/animations/blog.json": "77f8fcb0b36c8a796cc469efc0451e81",
"canvaskit/wimp.wasm": "33dd67ff4c0ed7c123720365dcfddc0c",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/wimp.js": "fd6185aed0230a04a3aacc9ff9692f7d",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/wimp.js.symbols": "04c101a7c3fa4a746530dfeac4454914",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
