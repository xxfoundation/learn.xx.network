---
title: Large Democracy Proposal
keywords: [democracy, proposal, governance, referendum, xx network]
---

# Large Democracy Proposal

This wiki page describes how to submit a Democracy Proposal for a pallet
call that expects a large amount of data, which is very cumbersome to do
via the Wallet directly.

As an example, this page describes a proposal that changes the cMix
geographic multipliers to be all 1.

## Generate the preimage

The preimage of the proposal can be generated programmatically using for
example python or js.

An example script for setting all geographic multipliers to 1 is
available here, [set_cmix_variables.py](https://github.com/xx-labs/scripts-py/blob/main/set_cmix_variables.py)

Running this script when connected to a MainNet node will result in the
following output. 
```
$ python set_cmix_variables.py
0x0d0e750d1e02e0930400000000000a0000001400000082000000e5034249074d4e09544f0b50570b4d5403435a0345520650460b415100464b01494d02424a06534807434c01564901495205554d00414d055053054852044c4b0a54460b435501424c014e4c0251410550470b434b0b5647014553024145055559014c43015447064e4f034a5009415a054547064748064d5206504b0a544a0a4e460b4149015645015054024d480b425201545a074b5009544d0a4e520b5349034158044c42054854014d500b534e064c520643580b535a074244094754014359045452054e5a0b424d01474d065a5707504d01414f075353074c5307464a0b5553004d51014d4b0457460b4b520941550b534a03494c05445a064652025a41075547074749025641035253044e47074b470a425a01474c015a4d074b48094b490b494f0a424f01534b035541045354074543015359054349064746014d5507484b09544c0b49530242410459450545450456550b4c55024954034d5909464d0b50520141440242590441470149510541460a4741074b5a0a555a0a4d560a43430b4c54044c56044d4106504c03434e094d4f095059015358014154034c41095257075954075347094d5707444f01464f024e45064751075344065041014945024c59064b59015643014e50094b4d074744014a4502534d03434607504501424704534c0653420b4b4e01434407564e09474504435606444a06475901484e014753014251014d45045454014d53014b5705455406425607434100415201435701524507525508535201424e0b444503414c045341054d4c065457094253014e49014d4601504e0b494e0a484d0b4157014257075343074e430b41530b474e064d4d09475001444b034a4f054a4d014d430250480b4752044248054d470742540957530b444d01424502524f0454430149440b544b0b4c4903544406454806485503544e06434d074d5a074242014352015356014246064742024348034f4d054e550b47550b475706534f074e4107434f014747024b45074d58004347075448095345034649044d440454560b3000e80301e80302e80303e80304e80305e80306e80307e80308e80309e8030ae8030be8033075000000000000983a000000000000b80b00000000000005e80300005000000000000000e0930400e8030000005c260500000000
```
The large hex string is the encoded
democracy.notePreimage call with a nested xxCmix.setNextCmixVariables
call containing the new cmix variables as argument.

## Submit the preimage

Now that the preimage call is created, it can be submitted to the
network in the Wallet.

Steps:

1.  Go to the [Web Wallet](https://wallet.xx.network)
2.  Go to the Developer/Extrinsics tab (only shows up if an account is
    added)![](@site/static/img/Screen_Shot_2022-05-17_at_9.44.48_AM.png)
3.  Select the Decode
    tab![](@site/static/img/Screen_Shot_2022-05-17_at_9.44.56_AM.png)
4.  Paste the hex string from the previous step in the hex-encoded call
    field![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.09_AM.png)
5.  Submit the transaction

## Create the Democracy Proposal

Now that the preimage is on-chain, the Democracy proposal can be created
using the Wallet.

Steps:

1.  After submitting the transaction in the previous step, go back to
    the Network/Explorer tab
2.  Find the democracy.PreimageNoted event and click the arrow icon to
    expand
    it![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.23_AM.png)
3.  Click the clipboard icon to copy the preimage hash (the actual value
    might be different than shown in the
    image![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.28_AM.png)
4.  Go to the Democracy tab and click the Submit proposal
    button![](@site/static/img/Screen_Shot_2022-05-17_at_1.08.30_PM.png)
5.  Paste the preimage hash and submit the transaction
    ![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.42_AM.png)


## Verify a Democracy Proposal

In the Democracy page in the Wallet, the arrow icon can be used to
expand an existing proposal in order to see the arguments to the
specified call.
![](@site/static/img/Screen_Shot_2022-05-17_at_1.10.51_PM.png)
However, in the case of this example, the call argument is large, which
makes it very hard to verify visually.
![](@site/static/img/Screen_Shot_2022-05-17_at_1.10.59_PM.png)

This way, it's better to programmatically verify the proposal, and what
it actually changes.

An example script for verifying the cmix variables proposal is available
here, [check_cmix_variables_proposal.py](https://github.com/xx-labs/scripts-py/blob/main/check_cmix_variables_proposal.py)

Running this script when connected to a MainNet node and configured with
the preimage hash that is available on-chain will result in the
following output.
```
$ python check_cmix_variables_proposal.py
...
Multiplier for `North America` changing from 1.023 to 1.0
Multiplier for `South and Central America` changing from 1.267 to 1.0
Multiplier for `Western Europe` changing from 0.873 to 1.0
Multiplier for `Central Europe` changing from 0.962 to 1.0
Multiplier for `Eastern Europe` changing from 0.905 to 1.0
Multiplier for `Middle East` changing from 0.899 to 1.0
Multiplier for `Northern Africa` changing from 1.381 to 1.0
Multiplier for `Southern Africa` changing from 1.381 to 1.0
Multiplier for `Russia` changing from 0.944 to 1.0
Multiplier for `Eastern Asia` changing from 1.402 to 1.0
Multiplier for `Western Asia` changing from 1.211 to 1.0
Multiplier for `Oceania` changing from 1.457 to 1.0
```
