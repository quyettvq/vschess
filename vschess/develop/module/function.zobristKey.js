// Zobrist 编码表
vs.ZobristTable = (function () {
    var table = [66, '02010d007b4765f9', '171880531b8d5860', '957a1458a42becec', 6, 'd4a088b2e2591ccb', 'f9260f515c7bec95', '54051e52de03c1b2', 6, 'bb8cb47e59282224', '2d67375e4ccd7677', 'abba445d0e5e56a6', 69, 'ee8344c1e19954c4', 1, 'c448cf344c71909f', 7, 'c44047e6f7a8ff33', 7, '1603571cdc91c8de', 1, '9331def3087dff1e', 50, '64bf6640836f6037', 3, '2548d6fbdc1f80aa', 11, '21825ec968846814', 3, '06f79b8c40333b69', 3, '752be6837f80f5d4', 11, '3d85ff2aa5a61469', 3, '0cd680125ea617ed', 2, 'a5dff339327e7078', 'ab400c1dfe73b366', '5cf50f5d2b5c7d0b', '1c23c7a2e0de9575', '9310bfd66b61b5d1', '25489c041d6b07f6', '0c54ea7b8eb75e36', 'aa206c84fce12cdc', '603c2e6f4abef76e', 'a7950be44ce5c030', 'bf19f45cbe7877d3', '690b31994f8258da', '20f1dcb78c3ca5ee', 'f9b677558d274c3c', '35155a33f117aa34', '0463f288d157c25a', '4c8440eb5956efbc', '7debb4777a74e13f', '3b89fe2c397d1e0e', '79c03729d4807dc2', '76640b24d075993b', 'cc3030cd961231c8', 'f33f066ef548ba59', 'e650f745d76565e1', '4e7045d3c7a72acf', '2ae92f5d43121c73', '8c11d8cbf6e4a584', '3d8e6e8510a0a07e', '57242239dabe7fbd', 'df24cee742476222', '132143633cb53b74', '85ecc54bb9aa82e7', 'd2b73d12226ee596', 'f5e0f118147d9c5a', '60ebe31c90919002', '6182d88ac7fb104a', '7ffaa7b53bcd7d2d', 'f01fa550ea050e8d', 'dd3a7a97c727f8c5', '202ff086161c35a2', '63098f64c3519be0', '8b6b9080fcee6e2c', '8e64f0e0bad3b0ff', 'fdd124fbd9f47baa', 'fc9a8120eac4f4de', 'bdaf0ed0fd9f5909', 'f474564301c7213b', 'cc5a0abdd7671398', '0ceed4d537de1343', '58e79783d661be84', '82f9b58a523eeebd', '25f38588e5c2e805', '0e855f5ce0f874eb', 'e53d644bd96dfdcd', 'dc13773e39d2983e', 'd4cbd4f4f016a510', 'ec00ceb009762a51', 'bc18717e5f315789', '44e0fbc21a20374e', '77553337365a10a0', '46cbe73bf081f5ef', '879d223238fb8588', '2ed76c189342fce4', 'ad1836b1bd44ae3a', '2cb78f5a79a68d95', '9173fc9659e5c5e5', '538f503fd8ec25e5', 'e557d988a0f0b5fc', 'dbd9b79f0ddbc770', '197539f52e6a1483', 'af5546fdeefdbb80', '7a5ccee4a4b0bb30', 'f135393105f16da9', '7cb14577c1c96493', '29c08567b365d088', 'f65e476829855207', '2bb66190b0589d8b', '334afbeab5fde105', '06be417fb2f4d2c6', '579274d2719cb915', 'a849635cef43c8fe', '896a95118af5d879', '541aad61b2715a13', 'ebbba8eb36c6e5b0', 'aeb7fdd53512efe0', 'be6eabe388fbd437', '39d468522c9a1578', '59be957699b964fc', 'c7e10451f916c4c7', '9aa1b47ef1a7cddb', '0528606a6938c6f8', 'ca8a26e21869ea39', '58af39057db7692a', 'd7c175677159d07a', '854c2f005e2b90b1', 'dfdee7c57f42e59d', '6d6cd4aa8fc3284a', '15e714de3f2e60bf', 'bdb8cbb3422ce24b', '35e628d027f9981f', '77eaf786de54a30c', 'b7d723a05c7364eb', '2a4ea8bccab707f3', '529f0276deccc6df', 'c20d1474776fc285', 'f3262f5b88cbc9d3', '41486c06694d6583', '87c1db3f8a5fb573', 'f5a587a5c5b2043c', 'd7f2157e386b33f1', '2053c57ef8051a8d', '123616777af47fdd', 'd2b6bd9bbb110690', '5a242d096ee6306c', 'c30eca7eb20b31fe', 'b9350cddcb9a222f', '4743806c451489e0', '38b686616cbe95bb', '5510ef7c6ae03b73', 'd8ca5e88067d4205', 'a73a67157a66bea9', 'dc556d97bade0680', '285fcc5c81c07deb', '0d0dafceb059b98d', '63c97ba69693b7c2', 'db91fd578c381f9d', '99f174c7989c764a', 'a6a176457885ae59', '27a7b9734c0bb489', 'f6465fa4d905bb07', '214522e4393870ad', 'b463885664b813dc', '295218d708b04e88', '8aca5a337c579b7e', '1b89446e2ed73df8', '1cb65ced9de73ed5', '4ae4e0ad8ace67ae', '65213fc823013c8e', '1b6c45c466676be9', '9058254aac43b254', 'a73b15ef0d298557', '6a52e2f2e8274433', '15a42be5d8a526e4', 'c78dac6d791d037f', '6eed5739325c478a', 'c1054f9959ccb8b9', 'dd33addd43ce65c8', '0be6e3a219c1d87f', 'e768a7e3ed454bf2', '755a0d2ed90d9fb4', '1ecf834debf6a312', '136bb9b0d8daa7b5', 'bb8b44627c57b5fd', '7b067e5f34d777d5', 'b313f1fd14337904', 'e1a4a6da4d03cd2d', 'f0190bfc79ec283b', '05589d19c0a0a143', 'b89bed2df7007a8e', '83cf1ae2e97778ec', 'b4dd761623f66ff1', 'b0f607aa96f29280', 'e9f9e364f5549663', 'a00aa8dc87541658', 'cc00e8b64b51f0f1', 'dd8d3e21055d32cd', 'bc122aa51ddbc945', '0a4480148e3a87be', '06a06a7d3621a8c4', 'f65e21280296e5da', 'a0ca51f33c7a9d55', 'b547e19fbcf21922', '35caeb4c4722a4be', 'df9dc0388188808a', 'c0f609ee9a2a9027', 'b2879d8f7799de34', 'ecff7f1ae697a35b', 'e6dae6b82f8ebae0', 'd9fa6c8906fa93f1', '358c13397d9c7209', 'a7e99ca0834575eb', '2872a3e753893af0', '85f5d2fa9d3491dd', 'd501ae14f28e9b02', 'bc4856ff58678145', 'c1bbc557f7e4b967', 'f8994976f7111e32', 'da380e3058d58a66', '51bde09c572cd41c', '0fcfda00a2df7582', '78fa613231dab129', '454fbd346706e28f', '6fededeaf06c2a7c', 'fa681fad3c63d436', '99eb68c5cf1229fa', '2b1ce20b9f018221', '83373a5a2f1e120f', 'c44066ec845cdd9c', '0b79baa4ce38dcde', '70026e9382805605', '0e100ea5adb68272', '971e938a1d90ff77', 'e32ed01d314b227a', '147df51df231631b', '8801c04653b12f00', '714b6fd7487cdfaf', '493daa3229d74f30', '67b74d0281aeaa6d', 'a67c5bbfb3abac0c', '035c54358954bd7c', '74d61070ac52a463', '6dde8a787103d6ce', 'c82ef638075bd765', '63aeeae23bf85195', 'b5116be9af6fd846', '8889b1897387dce4', '07e0a5df0abd7bda', '9241ba7af22f8c09', 'b821659be01100e1', '087f12ace6a913f1', '2cc154384890cf2e', '332212fd0d4c93b0', '1ad3986a5eceabe5', '42cde963f0153516', '71809460427bc207', 'b7d6144f90015e15', 'd0140299117f3504', '4114b95f6e3cab17', '60ac28dcd62a4913', '0f296a2620172cd8', '04e31164c35e4f15', 'e466c33a2b4de535', '5c6d64a8002c13a0', 'dd066e73f4df1124', '4dff95b959371d49', 'fd9d55ff33ac5c45', '16b318d74e485bd3', 'a518062f2c0ccefa', 'd370f45ac2dba449', 'b8655a77918b7aed', '23a7bd7c80ad5a0a', 'eb849fa8a71305a5', '8f8793d12dfe840a', '7d4d49d1973b14e3', '836ee4a0f1693d56', '6741d42b00c3c409', 'd0a54661e926d116', '68f9fa3fe742cd3e', 'ee04be4df06e52d1', '2a1d652db6466c28', '0b5005e765c8a126', '3af7e4d59e46cbc4', '2737469dac0a7f91', '2f02708242092a01', 'a8cdf652345ff5ef', 'fb5eb1c305ef2b18', '822e768eb6d0f2b3', '0584b80f51416c9a', '39973817a390d296', 'c2b47076deea9063', 'd0d3a22e8b43e0a0', '2dbdcc72f2c0c73f', '4cb9b1b8637d9a4d', '0b2c99130ded34f9', '247681315a7c78f2', '0680cb501629e2e6', 'd810f1f4c5df4862', 'b62be7d66825e997', '3e3e69f9beb821de', '241f00d917a2522c', '70233bdbc8a3cd53', 'bef9c72d97d3358a', '06c9113cd1d3c725', '1de455ab8c7d850f', '2a04cbd36215d78d', 'e4df38bb6f501356', 'dfda3cdfcca10fee', 'c1139c7bf1d6b9d1', '2e4b812a51be9ce2', '1751f3760596a859', 'bc48755ea10b322a', '13749255773c21c8', 'fbcfd042255a9d89', 'd311a2f86decc442', 'a6b03b285ffef093', '9e481e985bf9bb42', '0c504fe712c8855e', '5567ab7ef06c29b9', '4f064b289b11f7f4', '5bf1466a1abf73fc', '2198da99798a20ec', '64e98c05a5e6c094', '46a771f3dff7de19', '0f5e138349460def', '8f495b2af499f1d7', '7d2c3c49a1b964f2', '74004a1cad2b4573', 'ec907668d770ae92', '25662b041d21618a', '80dac3f052ce2487', '75f42374fa78fca0', '2c882fee641ac3d0', '9c249ea4db410203', 'fbc4b652bf58b471', '3ec3f7e58325818e', '7a69e92045e9181f', 'bbc86efb9a305ddf', 'bd0075f17f04379d', '70a7d3114b38adce', '50da4d9da706d05f', '677e1761b95b0763', 'f1a71474deaafda8', '34e9a39a852f1916', '5fdc168d9d2d5873', '208044f7adb25109', '910e48f65bed86c9', 1, '6234cb83811aaf35', 1, 'b75b3a16b9dcfe11', 1, 'a62f3a5e37361b0b', 1, '37a7de5f54b2f6be', '5b4a46be7664697c', 1, '8a7ee39e70e45c72', 1, 'faf9b526a2e49055', 1, '775449c8b6a66ad5', 1, '9ccc4e653037370b', 30, '9c69702b27269ea0', 'd081c17c4335e389', '534905ef8d860369', 6, 'b7f433c21183711a', '0e9ba058fb67e701', 'f25b8f9bd234a650', 6, '659703ea7bf6d335', 'df20971f4f15896b', '34c4cc39dc2540e6', 69, '5a912193aa89f7b4', 1, '06f970f53a8599a0', 7, '6f064bce2cd50c74', 7, 'b3271f3807c1475a', 1, 'aeb2034152ce0c01', 68, '028d8dd17e7d5272', 3, 'd217f6c8f2dcec1a', 11, '8fff55d26b87f7ef', 3, 'd7143b758ea86f2c', 3, 'bcfb76ba7e946df7', 11, '6e85ab3fe77b980a', 3, '3aa6d2d969dcdfa1', 47, '6fbe86fb2f51ff7a', 'a74722d0a49e02de', '7592c54797a4da0a', '9dc7f91f8b7da86a', '6c7bef750341e9b5', '162dd072e0e3787a', 'bdaaeca5d174ed26', '3dea97632f5f7126', '0dd707d3d3bb657f', 'd54f7bfebea90a3d', '27f19f19d2717316', 'dac56a5b50656e71', '81f00d38b1594ee5', 'f67cfcf79b851f77', '52c4615c0093825f', 'c301e36df36e680f', '705e1e54abf7d645', 'f09926b9f55c81b3', 'de6de46a59a83cd5', '5a5e094da95f82c1', '31b8d66ae62bfc9b', '0cee700e60839431', '2a8ec2a02f1cc99b', '481ffc438b7daaa4', '0bb429df90cef779', 'fa989ccd422e87a9', 'fee01738cc30c80b', '326a27b396abd9b0', 'bffe7620299c2868', 'ec11f75d1b08347b', '2585c01fed5396be', 'e273ab9831ecd6df', '7d7be20119bb97e1', 'c2a8d7b69a6e6c28', 'c1b6ed0ffe81be56', 'caffb96dde233093', 'ef1c539f9d30427a', 'e72c5c5551f930d4', '2b3de5e93f2be746', '17a0987ac3c0653e', 'e2f5a6586af9293f', '517c2e7d5c078aef', '6b0ed47de1452c22', 'fe7da6edef0f078c', '3ed43dc626403a9a', '9ae45043add1c820', '552958c207e9cf0e', '62721996f8e65773', 'ce5174bd8f5f8ea1', '0de6f8aabc6765fa', '942c1cb043bceee7', '125d6b909e6c82ac', '975963c9cb96d4cb', '1dc1d8ff5cb53cac', '26aa74052a4d7ad1', 'a01f124a7f7fac5e', 'd8ab7cbccca788b4', '5dd31516e3683219', '242193a82b7bc58b', 'c0ff6aa2aad4e923', '3253c01a7b1cf04b', 'ca5ee2961d758bd5', '46b498263eceb496', '5fded798dd7f79f7', '791f1de2636e784f', 'daaf0082a5021001', 'dd88224462b00f16', 'f787a7b9e89a63af', '68d1dd6bfbeae93a', '22f8e11618ae7ac4', '774aabd4a7ab16ab', '8620949856f81764', '12798a048363c441', '4623228e3d0778a8', 'bd0a10df9aa4e38d', '51fb319467ae954a', '5d03789917478f65', '0be6e534da38b907', '1c9c1d4f5899fd1c', 'c98155980ed5738d', 'a8020802c4bea165', '1afaa49d1117879c', 'ac0cfd625c3d1974', 'be11889afc60aacd', 'd6dee8e56c7a74a5', '1e86f14f16289ae8', '33ea2135c9998ca1', '79d4576124777797', 'c20f8782413344fe', '79dce062c4cf2625', '8152a14f454a5125', '7ee6c15beeba3eec', '3624650aededfe35', '16d72743790ea00a', '19fb10721229ec81', '85b1aceb6a41611d', 'df524520064efa06', '677aaa8b5d222d66', '130f0e9ac2271108', '2ecc0acd207a9858', 'ac7803cb23f3a28b', 'ea48f53d74c4a58e', '431e7d5c8a69c486', '11890aabe8c8ad06', 'ae09a61387f214ac', '7c33bd4baa305554', '334bb3febce49b68', 'c70ad3c513c63193', '54953487341b542f', '7fa576e8e070fc2c', '90401c5f98a95bf9', '0d25ed973d7b8ce2', 'cb09fd1fb002d3bd', '7ba0863e1d849e2b', '4ca22a556600c773', '3f6df49cc12ce3c1', '738d31dc605ee312', 'f27deaf2e887bb19', '8860b0694e63a65a', '962ef558bdabe56a', '7e307f71209b9b8f', 'e0bfc7f6cdbd8364', '8c321f42cd134833', 'a00500f82c987528', '8b7ddfa8d0798372', 'f36a6dfdbfde1193', 'dede80d5373d22c3', '43838810d69fd1dc', '3a02c5df95fd2717', 'a4a856f899bf833f', '67f4ceaabafdd1f8', '54e1be0a1158779b', 'ce0b65bf10ef9877', '4ac045f452e94bbc', '18fe7d967f50b061', 'b8970343b2d85018', '64cf7bb3889695bc', 'cb70b27c29edf774', 'ae2078cc0e7ed6e3', '02fb0c044be718b6', '7c3b0e8c25ad3b7d', '18ac41058e1f50a7', '6e21b9e1da39f220', 'b02d9a63e8e30a0a', '790fcda30f14c748', '50ee1335c25bff43', '8df5d284dfedee37', '71532e198c0eb9ab', '832cc61cf7be441a', '8431dfd16e0e5d33', 'ce26f2f74f5ff23b', '1e36d36389caa05e', '9063d6730be1105b', 'e638bda968cf9bbe', 'c771048bd8a021fa', 'dad72421848e3455', '3823689faf46ef08', 'daebe25de0e823e2', '042187f1df14f055', '4b02678ef80956f9', '453c53fbfe998478', '8e95702144b82c60', 'c489e75b4e054027', '3cd217b9feb7a7a9', '0321e049527f5402', 'f99ba6ac4c9ceaac', 'afa2b9809ce8bb0b', '82ce0815e5fbe2bc', 'dc0dca97eb94ade6', '29168abcf745e0af', '5f3e461c04f38e68', '0903890e45d25671', '4472aad46e94e05b', '61ab4ec37a9108b4', 'c3ee971e1827e088', 'ebc32b8dfc648fd1', 'a062d075d09d0c81', 'c0603bad959a4b46', 'a5527848fc0c9b83', 'e862cb609b417dff', 'e45f36a8b694ab45', '9b24fe28320004df', '3642811b09588ef4', 'd788dc4fef59972f', '0a3a96442083b501', '227c1734a268afe3', '290e5437196ae2ba', 'ef952aacba3f4f69', '6ccfb906c6257385', 'b1e139e09a1e5be6', '6f3d0afd812024e4', '3678d3ac8ec5fe3e', '468f22a9a2b46aab', '7975967539fdfd49', '3a3560dc389ae61e', '6c99f906b7b4a36e', '2963c8e15bab0750', 'ce24f1b554416568', '1474da2902df8dfd', 'd4cb5b4555abd17c', '4093dd219148d1ea', '523ffe88f02e2717', '9a859ef4595b5d94', 'fba7de89b355e9d7', 'cbe4a7e7ea74bd42', 'b40dade54c85679d', '3d02faa4c31f0f0e', 'e46a08f72b35ebf6', '8a4185b3c3d5c92f', '9f38656156f1e1ed', '065d806b601df2e5', '382c64ead6812c9e', 'db0eb3157eb4a9a8', 'bad5f2966684a8fc', '99af45facd4bb152', '6cbd9df2bcabd086', 'f0993e0f9e9c3f7f', 'faf9230d5e7020c7', '8cd41f2333f1277b', '73d2955f527964c5', '283480d1dc743465', '940dbc679f722e6b', '759c7a9d40dc74a0', 'c80d7af3e01cf9b0', '4831360b9ff3911b', '10624b8841b04184', 'b93412265eedd34e', '659bdbee52978d0a', 'bab1cb0366d793a9', '3d6fc272f1588226', '93b07778dae82b37', '52afa557f6939375', '7a94983330b73a38', '93c1c1ad49228f5b', '05ad91c65a2dea33', '581b9be28d61520b', '798ca01a3b55be4e', 'c435d385a46fa6c1', '39b884e6fe73365e', '826a84511f118d67', '94ce8ff134e42dfe', 'a4594eaa7c79e0ab', '2f5bb7e4d9863113', 'aeeaf37ed6f1c0f8', '65c19736a87c9488', '2e6bd6cd9cbc783d', 'dcc129a42217657f', 'fff0a2971827d4c9', 'ee17ca08aa888c93', 'ad004364a1267202', '5a1858dc3a625f09', 'c872bc0fbf8a5350', 'c912a9b717f8ac80', '751f6d26cd92a88e', 'a1c66600137b590b', 'ddde94adae44c793', '3602893cc5fb9465', '53fbbac7f4883a94', 'dc93e87d60d1e284', 'bc365eda830fbb94', '5c0331dabeba9a60', '31a4f7c4765f42b9', '1816fcc720964226', '5af18278f263302e', 'e8408c7fb70f04ef', 'e6e00de18a92af6e', '5ac1d7c694ea9384', '5720bbd6e17f27ca', 'c0bfda4838c0a0cd', '8891314377c5c1ce', 27, '2a2ed5c026b5bc48', 1, 'c92e7b76eed97a04', 1, 'cab996739436a28c', 1, '051b2091d03357a3', 1, '18f95d4c5c8b3d6d', '664c7f4f1b4d68b0', 1, '15b1e5b3a106b873', 1, '25b4b0ce175ca086', 1, '53c20718b90a909d', 1, 'ae6c7b25d0282cc9', 'b4461d12225a6c64', '3c572019f2ee97c4', '42f349edbae36833', '0e05cf63c06ad4f3', 'af450ff674bc724a', 'f48c5b768b6d4e16', 'c2678c86dfca1b17', 'c6b1c2bd370e3d15', 'aa7e82db85741ca1', 'ee83d46e93993392', '8fa7b0500890b4b7', 'bd70197c26dfc8f9', '607ae95a948a095b', '19c4a4058799ec55', 'c5a9fc21e5df09c0', 'b84aab0833ab7396', '76c6586a1d825cbb', 'f59bf07bafbce6c0', 'bbf5cd196fe639a6', '3e1079e27b02dffb', 'a76cec86758c2bb9', 'b5616951a3210279', '4895fc655659c663', '10b487b086474df6', '5af2a8975c049bde', 'bfdefe754304b65e', '45b88c628f6ddc35', '02140517e93e594e', 'f90b46d491978b57', '8af75603e59942a8', 'f8c3ff97b4a6bbfe', '0222dbce5a80eb73', '696fc14aaddf5091', '002eab000050eaf6', '9ce095f19a33943d', '80509f3e3a14154b', 'a6dec4bf6abd9c76', '30f9b73ada41ced5', '8be437bb6bd7f13c', '4dd52d0a7130f1da', '21dd6c4a48b349bf', '4d075b28be81b1ab', '2015abdd10265d21', '2e57d1809f4e64da', '7c68260b225bc190'];
    var zobristTable = [];

    for (var i = 0; i < table.length; ++i) {
        if (typeof table[i] === "number") {
            zobristTable.length += table[i];
        }
        else {
            var nums = []

            for (var j = 0; j < 16; ++j) {
                nums.push(parseInt(table[i][j], 16));
            }

            zobristTable.push(nums);
        }
    }

    return zobristTable;
})();

// Zobrist 棋子编号
vs.ZobristPiece = { R: 4, N: 3, B: 2, A: 1, K: 0, C: 5, P: 6, r: 11, n: 10, b: 9, a: 8, k: 7, c: 12, p: 13 };

// Zobrist 局面码-红方 a0ce2af90c452f58
vs.ZobristRed = [10, 0, 12, 14, 2, 10, 15, 9, 0, 12, 4, 5, 2, 15, 5, 8];

// Zobrist 局面码-黑方 0000000000000000
vs.ZobristBlack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 计算 ZobristKey
vs.ZobristKey = function (fen) {
    var fenArray = vs.fenToArray(fen);
    var zobristKey = vs.fenIsB(fen) ? vs.ZobristBlack.slice(0) : vs.ZobristRed.slice(0);

    for (var i = 0; i < 90; ++i) {
        if (fenArray[i] === '*') {
            continue;
        }

        var K = vs.ZobristPiece[fenArray[i]] * 90 + i;

        for (var j = 0; j < 16; ++j) {
            zobristKey[j] ^= vs.ZobristTable[K][j];
        }
    }

    for (var i = 0; i < 16; ++i) {
        zobristKey[i] = zobristKey[i].toString(16);
    }

    return zobristKey.join('');
};
