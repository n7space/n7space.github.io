var group__Qspi =
[
    [ "Qspi_Command", "structQspi__Command.html", [
      [ "address", "structQspi__Command.html#acc2f6007d6a045ee815943ebc1b8a7c7", null ],
      [ "addressLength", "structQspi__Command.html#a10e103c6a85559c4c574a496cb06a942", null ],
      [ "dummyCycles", "structQspi__Command.html#a65a217ef5a78c23a7487d9f7e0c81611", null ],
      [ "instructionCode", "structQspi__Command.html#a0c97892f2d3586727798e25fec0971be", null ],
      [ "isAddressEnabled", "structQspi__Command.html#a1912e426b7e3606a0bfe4917cf473d83", null ],
      [ "isContinuousReadEnabled", "structQspi__Command.html#a6b1e6a2fd9ad6d6111728e87f33a9325", null ],
      [ "isDataEnabled", "structQspi__Command.html#a2004326dc17cf68cc9096b4f84a157b7", null ],
      [ "isInstructionEnabled", "structQspi__Command.html#ab35ed3edcedcd7be8215fb9ea33918b2", null ],
      [ "isOptionEnabled", "structQspi__Command.html#aaeed47b434ae9c32a0ae2bfbdc13ae84", null ],
      [ "isSupported", "structQspi__Command.html#a8615c33d97d9954f1145b6654b6b2c9b", null ],
      [ "optionCode", "structQspi__Command.html#ad348aa50568a19ba33f4e52ebc8f88f4", null ],
      [ "optionCodeLength", "structQspi__Command.html#ad6cdc1336e7a440ab0801ddcd7c92b26", null ],
      [ "transferType", "structQspi__Command.html#a6e48499c8129d583e950d6635332d4dd", null ],
      [ "width", "structQspi__Command.html#aca492b0cd36105abc3b30b228fb858b0", null ]
    ] ],
    [ "Qspi_Status", "structQspi__Status.html", [
      [ "isChipSelectNotAsserted", "structQspi__Status.html#aef176a54fe0523103d16f9e9a6a274ff", null ],
      [ "isChipSelectRise", "structQspi__Status.html#a3b9e871c3e9014150fbcd8a2d2f2d9ce", null ],
      [ "isEnabled", "structQspi__Status.html#a33952c4e874cf8d7348cf799e5410644", null ],
      [ "isInstructionEndStatusDetected", "structQspi__Status.html#a6b948560b9d19ee669d9b57f0f9c65a5", null ],
      [ "isOverrunErrorDetected", "structQspi__Status.html#ab43b0e8dfe13231ca683cf3bb62cbdc2", null ],
      [ "isReceiveDataRegisterFull", "structQspi__Status.html#a6634eeac215133b44312fe036f2ed39b", null ],
      [ "isTransmissionRegisterEmpty", "structQspi__Status.html#a26575a5472a3de668150f0adaa765392", null ],
      [ "isTransmitDataRegisterEmpty", "structQspi__Status.html#a144167fba099db1cf53500fdb2856c29", null ]
    ] ],
    [ "Qspi_FlashApi", "structQspi__FlashApi.html", [
      [ "flashBaseAddress", "structQspi__FlashApi.html#a2cc0ad2e856911fba484d5b7fad15a0a", null ],
      [ "flashSize", "structQspi__FlashApi.html#af778be9390509668d707d30ba654f538", null ],
      [ "getPageSize", "structQspi__FlashApi.html#ae5ebbf8dc3d12b8598d3582f51f1dd2c", null ],
      [ "getPageStartAddress", "structQspi__FlashApi.html#a59b51f7146f1bc607ec2a082ed8f66d0", null ],
      [ "getSectorSize", "structQspi__FlashApi.html#af23a56431039e18adb29ec37bb045876", null ],
      [ "getSectorStartAddress", "structQspi__FlashApi.html#a7944f0bbc18a793aab8d9eeab7d6250a", null ],
      [ "stateBusyBitMask", "structQspi__FlashApi.html#a7af36d0de8bd2fb9c380fd53fb98d920", null ],
      [ "stateBusyBitOffset", "structQspi__FlashApi.html#aca1e2bfcb79ed10d194e2936e0014e13", null ],
      [ "stateBusyBitValue", "structQspi__FlashApi.html#ac9751463cafc7cacbce65cd4147e720d", null ]
    ] ],
    [ "Qspi_Handler", "structQspi__Handler.html", [
      [ "arg", "structQspi__Handler.html#a5c078bed5399774cb42c964597317e5d", null ],
      [ "callback", "structQspi__Handler.html#a9b5f9e9fcac3fc9feadfc61ea21fa011", null ]
    ] ],
    [ "Qspi_Config", "structQspi__Config.html", [
      [ "baudRateDivider", "structQspi__Config.html#a13a869c3a887c54636d99f593cd3bd0d", null ],
      [ "commands", "structQspi__Config.html#a4cdfa6e5fb1cb9280473f13c5a1ed8b7", null ],
      [ "cpha", "structQspi__Config.html#a53b73f7f570a1c1a3accd3651706ed9e", null ],
      [ "cpol", "structQspi__Config.html#a024c183c81385d78a49fe83ab782b5d9", null ],
      [ "dlybct", "structQspi__Config.html#a3ed882a2d068e26114c888b38174c01a", null ],
      [ "dlybs", "structQspi__Config.html#a7afd308d45e66663d94cda266331ad90", null ],
      [ "dlycs", "structQspi__Config.html#ae1579f5975f34d9315de491f691fcefa", null ],
      [ "flashApi", "structQspi__Config.html#a695219a399fb623cfdc95c8fadf24128", null ]
    ] ],
    [ "Qspi", "structQspi.html", [
      [ "commands", "structQspi.html#a87a315bdda718294a5d27cb60abe8048", null ],
      [ "flashApi", "structQspi.html#adf6af0a766b91fbec9e534410a02973e", null ],
      [ "handler", "structQspi.html#a1aa6f66ce1fe3f375b5b5a23232e32de", null ],
      [ "isOperationPending", "structQspi.html#ae28ca80b51ec68345431271e3cc168d2", null ],
      [ "reg", "structQspi.html#ae40bdc1b8855dea6858d1f504c236f80", null ]
    ] ],
    [ "Qspi_Callback", "group__Qspi.html#gac71e129929ffa421783cf8b6bc0be801", null ],
    [ "Qspi_FlashApi_getPageSize", "group__Qspi.html#ga9c45aed3a3a9c1c05698fb158de26c84", null ],
    [ "Qspi_FlashApi_getPageStartAddress", "group__Qspi.html#ga5b30371ce330dee80ff3e3d25d5ba685", null ],
    [ "Qspi_FlashApi_getSectorSize", "group__Qspi.html#ga970826ca139181311897d2b1b4a77037", null ],
    [ "Qspi_FlashApi_getSectorStartAddress", "group__Qspi.html#ga4d630cf649e83f536c05e73a0fd5d649", null ],
    [ "Qspi_AddressLength", "group__Qspi.html#ga2e4cc1705143fd6d5bae92550bcdd22a", [
      [ "Qspi_AddressLength_24Bit", "group__Qspi.html#gga2e4cc1705143fd6d5bae92550bcdd22aa09d710fc1c770f73eebcabad593cc7b2", null ],
      [ "Qspi_AddressLength_32Bit", "group__Qspi.html#gga2e4cc1705143fd6d5bae92550bcdd22aa0d8a8c84737c2c36566d3eca5387a0ec", null ]
    ] ],
    [ "Qspi_CommandType", "group__Qspi.html#ga77a6c3869475209624c3967b0a533ab2", [
      [ "Qspi_CommandType_Read", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2a6137598fe01991d918aee2ce5d318478", null ],
      [ "Qspi_CommandType_WriteEnable", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2a9da2c8cdd589a1e6a4d8044398aa84d2", null ],
      [ "Qspi_CommandType_SectorErase", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2a92d5f84a7efb75d33aee963cde344cab", null ],
      [ "Qspi_CommandType_Program", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2a1abf89251e460fd50c02c4769f802a19", null ],
      [ "Qspi_CommandType_State", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2a950e5705f9eea29e66b3161a94e46e74", null ],
      [ "Qspi_CommandType_Count", "group__Qspi.html#gga77a6c3869475209624c3967b0a533ab2aa1ad75b0851b3fe28c363455d39917ae", null ]
    ] ],
    [ "Qspi_CommandWidth", "group__Qspi.html#gabbc77090bc09c4db766ffa9bd98bc065", [
      [ "Qspi_CommandWidth_SingleBitSpi", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065ad7f17101836eaffc6f4158980892b60a", null ],
      [ "Qspi_CommandWidth_DualOutput", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065a24f6d047506f9278a723fe8d6373c49a", null ],
      [ "Qspi_CommandWidth_QuadOutput", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065a80f13c42e6995554e5396f550ae0c297", null ],
      [ "Qspi_CommandWidth_DualIo", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065ad529f5506ed9ee9991790ab38d029c0a", null ],
      [ "Qspi_CommandWidth_QuadIo", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065a1cf663d024b31c8af21ce3dd237901db", null ],
      [ "Qspi_CommandWidth_DualCmd", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065aa0bbea9d1380618cbbf0302c23099142", null ],
      [ "Qspi_CommandWidth_QuadCmd", "group__Qspi.html#ggabbc77090bc09c4db766ffa9bd98bc065a601eec9cbfe5adf1deb01d8fabb7b994", null ]
    ] ],
    [ "Qspi_Cpha", "group__Qspi.html#ga5ab1e3d8654f307c3f5ae960b3e761a6", [
      [ "Qspi_Cpha_0", "group__Qspi.html#gga5ab1e3d8654f307c3f5ae960b3e761a6a9043e60843c83194439ae2573c6d467e", null ],
      [ "Qspi_Cpha_1", "group__Qspi.html#gga5ab1e3d8654f307c3f5ae960b3e761a6a5a0c3ffec6efb2ac7bf96a43b0291db6", null ]
    ] ],
    [ "Qspi_Cpol", "group__Qspi.html#ga6c971b3c30f94cc3c85f08a988c9b23f", [
      [ "Qspi_Cpol_0", "group__Qspi.html#gga6c971b3c30f94cc3c85f08a988c9b23fa4173164332ca3ac0e8883fa3548c5e47", null ],
      [ "Qspi_Cpol_1", "group__Qspi.html#gga6c971b3c30f94cc3c85f08a988c9b23fa5e80ab0988a948b13b58912b3f2e673b", null ]
    ] ],
    [ "Qspi_ErrorCode", "group__Qspi.html#gabac840abb6013c053d6228a421554f4c", [
      [ "Qspi_ErrorCode_Busy", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca4d97b47cb91e7dad096c398a61a8680e", null ],
      [ "Qspi_ErrorCode_NotFlashAddress", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca363b95586c1f567fd64b86d9d44bbaeb", null ],
      [ "Qspi_ErrorCode_NotSectorStartAddress", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca55f048ee889e4467f194a5d883228ae8", null ],
      [ "Qspi_ErrorCode_InstructionTimeout", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca3f699b6db70b34f95b4954c51a23125f", null ],
      [ "Qspi_ErrorCode_DataAcrossPages", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca8a9d46c53e0c04af5b7fb8608a4b94f2", null ],
      [ "Qspi_ErrorCode_CommandNotSupported", "group__Qspi.html#ggabac840abb6013c053d6228a421554f4ca7b7a4ca547c286eaec8a217a000f7516", null ]
    ] ],
    [ "Qspi_OptionCodeLength", "group__Qspi.html#ga838000ce8e2479fe665a8a737ab1746c", [
      [ "Qspi_OptionCodeLength_1Bit", "group__Qspi.html#gga838000ce8e2479fe665a8a737ab1746ca89f1cfcb37ca339ebfc8d27ab5c1316b", null ],
      [ "Qspi_OptionCodeLength_2Bit", "group__Qspi.html#gga838000ce8e2479fe665a8a737ab1746ca717dfc3da8e65c19253c5bc4d65f0f85", null ],
      [ "Qspi_OptionCodeLength_4Bit", "group__Qspi.html#gga838000ce8e2479fe665a8a737ab1746ca466b5cc19b081d91d65fbbfb5b45721d", null ],
      [ "Qspi_OptionCodeLength_8Bit", "group__Qspi.html#gga838000ce8e2479fe665a8a737ab1746cac650d041abb4129a190ed5403a84eca6", null ]
    ] ],
    [ "Qspi_TransferType", "group__Qspi.html#ga34cb0e4d1e219798979099da9defc86e", [
      [ "Qspi_TransferType_Read", "group__Qspi.html#gga34cb0e4d1e219798979099da9defc86ea018c5ba8ffc199a4395c70637393d579", null ],
      [ "Qspi_TransferType_ReadMemory", "group__Qspi.html#gga34cb0e4d1e219798979099da9defc86ea988e8b1075019e0bc8d703673601f77f", null ],
      [ "Qspi_TransferType_Write", "group__Qspi.html#gga34cb0e4d1e219798979099da9defc86ea7933bbb4cc384a39b92d5ef8933864c9", null ],
      [ "Qspi_TransferType_WriteMemory", "group__Qspi.html#gga34cb0e4d1e219798979099da9defc86eaa931f76996a8ce5dbc4f40f766d7718c", null ]
    ] ],
    [ "Qspi_disable", "group__Qspi.html#gaa6b9563ec26cb2820365f92ccbcddb60", null ],
    [ "Qspi_enable", "group__Qspi.html#gadaddfde246212c1659dd712ff5fadc02", null ],
    [ "Qspi_eraseSector", "group__Qspi.html#gaba56959b79fed2b344a0e4f135f74377", null ],
    [ "Qspi_eraseSectorNonBlocking", "group__Qspi.html#ga5b5c20ff65da4d4cd7674f2d4e8d4ec1", null ],
    [ "Qspi_finishDmaWrite", "group__Qspi.html#ga7d344851f7e2ff49de9f914b3f83673e", null ],
    [ "Qspi_getConfig", "group__Qspi.html#gaf554ffd8f0009c92a860410667f6fe3a", null ],
    [ "Qspi_getDeviceRegisterStartAddress", "group__Qspi.html#ga39d8137dabd3b8b145ebd2415ad868f2", null ],
    [ "Qspi_getSectorSize", "group__Qspi.html#ga210c9d3f85d046420065fd57438435a6", null ],
    [ "Qspi_getSectorStartAddress", "group__Qspi.html#ga818499d7e646781083f813493439ec57", null ],
    [ "Qspi_getStatus", "group__Qspi.html#ga98175a73589b0b3c11ac2c7945d83c52", null ],
    [ "Qspi_handleBusyStateCheck", "group__Qspi.html#gadc9c72bc1e9cbef299e05b7db8e9e002", null ],
    [ "Qspi_init", "group__Qspi.html#ga12c23b6ce93fdf8dc9fed727e6031be0", null ],
    [ "Qspi_isFlashAddress", "group__Qspi.html#ga6ee8ac0f6dd7316b1e7e5e4168d9ce9c", null ],
    [ "Qspi_isFlashBusy", "group__Qspi.html#ga00e31ec5ae4d89f12726e64ec2677e4d", null ],
    [ "Qspi_isSectorStartAddress", "group__Qspi.html#ga44ddf7d5d21c344ba51e4c656a4dcb72", null ],
    [ "Qspi_overwriteSector", "group__Qspi.html#gafb889a473b50866a2abcd3388b264a31", null ],
    [ "Qspi_prepareDmaWrite", "group__Qspi.html#ga46bf6ac6c05a82ae0726b8553ac5e00b", null ],
    [ "Qspi_setConfig", "group__Qspi.html#ga23bcac5acbca27a1742c98726a3477a3", null ],
    [ "Qspi_setCurrentCommand", "group__Qspi.html#gab625717e11c342735a96a21dd4d469dc", null ],
    [ "Qspi_setLastTransfer", "group__Qspi.html#ga4a763106561c234a3e8b4cb0b25fcb30", null ],
    [ "Qspi_write", "group__Qspi.html#ga7dfcedf79cd1318b7456fcd80d5d7d6f", null ],
    [ "Qspi_writeNonBlocking", "group__Qspi.html#ga5c2efd94571451a2bd643fbe8cdd1622", null ]
];