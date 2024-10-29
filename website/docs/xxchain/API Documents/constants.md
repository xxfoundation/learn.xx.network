---
title: Constants
keywords: [xxchain, blockchain, chain, constants, xx network]
---

The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via `api.consts.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[assets](#assets)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[chainBridge](#chainbridge)**

- **[claims](#claims)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[multisig](#multisig)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[staking](#staking)**

- **[swap](#swap)**

- **[system](#system)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xXBetanetRewards](#xxbetanetrewards)**

- **[xXCustody](#xxcustody)**

- **[xXEconomics](#xxeconomics)**

- **[xXPublic](#xxpublic)**


___


## assets
 
### approvalDeposit: `u128`
- **interface**: `api.consts.assets.approvalDeposit`
- **summary**:    The amount of funds that must be reserved when creating a new approval. 
 
### assetDeposit: `u128`
- **interface**: `api.consts.assets.assetDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.assets.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your asset. 
 
### metadataDepositPerByte: `u128`
- **interface**: `api.consts.assets.metadataDepositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes you store in your  metadata. 
 
### stringLimit: `u32`
- **interface**: `api.consts.assets.stringLimit`
- **summary**:    The maximum length of a name or symbol stored on-chain. 

___


## authorship
 
### uncleGenerations: `u32`
- **interface**: `api.consts.authorship.uncleGenerations`
- **summary**:    The number of blocks back we should accept uncles.  This means that we will deal with uncle-parents that are  `UncleGenerations + 1` before `now`. 

___


## babe
 
### epochDuration: `u64`
- **interface**: `api.consts.babe.epochDuration`
- **summary**:    The amount of time, in slots, that each epoch should last.  NOTE: Currently it is not possible to change the epoch duration after  the chain has started. Attempting to do so will brick block production. 
 
### expectedBlockTime: `u64`
- **interface**: `api.consts.babe.expectedBlockTime`
- **summary**:    The expected average block time at which BABE should be creating  blocks. Since BABE is probabilistic it is not trivial to figure out  what the expected average block time should be based on the slot  duration and the security parameter `c` (where `1 - c` represents  the probability of a slot being empty). 
 
### maxAuthorities: `u32`
- **interface**: `api.consts.babe.maxAuthorities`
- **summary**:    Max number of authorities allowed 

___


## balances
 
### existentialDeposit: `u128`
- **interface**: `api.consts.balances.existentialDeposit`
- **summary**:    The minimum amount required to keep an account open. 
 
### maxLocks: `u32`
- **interface**: `api.consts.balances.maxLocks`
- **summary**:    The maximum number of locks that should exist on an account.  Not strictly enforced, but used for weight estimation. 
 
### maxReserves: `u32`
- **interface**: `api.consts.balances.maxReserves`
- **summary**:    The maximum number of named reserves that can exist on an account. 

___


## bounties
 
### bountyCuratorDeposit: `Permill`
- **interface**: `api.consts.bounties.bountyCuratorDeposit`
- **summary**:    Percentage of the curator fee that will be reserved upfront as deposit for bounty  curator. 
 
### bountyDepositBase: `u128`
- **interface**: `api.consts.bounties.bountyDepositBase`
- **summary**:    The amount held on deposit for placing a bounty proposal. 
 
### bountyDepositPayoutDelay: `u32`
- **interface**: `api.consts.bounties.bountyDepositPayoutDelay`
- **summary**:    The delay period for which a bounty beneficiary need to wait before claim the payout. 
 
### bountyUpdatePeriod: `u32`
- **interface**: `api.consts.bounties.bountyUpdatePeriod`
- **summary**:    Bounty duration in blocks. 
 
### bountyValueMinimum: `u128`
- **interface**: `api.consts.bounties.bountyValueMinimum`
- **summary**:    Minimum value for a bounty. 
 
### dataDepositPerByte: `u128`
- **interface**: `api.consts.bounties.dataDepositPerByte`
- **summary**:    The amount held on deposit per byte within the tip report reason or bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.bounties.maximumReasonLength`
- **summary**:    Maximum acceptable reason length. 

___


## chainBridge
 
### chainIdentity: `u8`
- **interface**: `api.consts.chainBridge.chainIdentity`
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.chainBridge.palletId`
- **summary**:    The ChainBridge's module id, used for deriving account ID 
 
### proposalLifetime: `u32`
- **interface**: `api.consts.chainBridge.proposalLifetime`

___


## claims
 
### prefix: `Bytes`
- **interface**: `api.consts.claims.prefix`
- **summary**:    The Prefix that is used in signed Ethereum messages for this network 

___


## democracy
 
### cooloffPeriod: `u32`
- **interface**: `api.consts.democracy.cooloffPeriod`
- **summary**:    Period in blocks where an external proposal may not be re-submitted after being vetoed. 
 
### enactmentPeriod: `u32`
- **interface**: `api.consts.democracy.enactmentPeriod`
- **summary**:    The period between a proposal being approved and enacted. 

   It should generally be a little more than the unstake period to ensure that  voting stakers have an opportunity to remove themselves from the system in the case  where they are on the losing side of a vote. 
 
### fastTrackVotingPeriod: `u32`
- **interface**: `api.consts.democracy.fastTrackVotingPeriod`
- **summary**:    Minimum voting period allowed for a fast-track referendum. 
 
### instantAllowed: `bool`
- **interface**: `api.consts.democracy.instantAllowed`
- **summary**:    Indicator for whether an emergency origin is even allowed to happen. Some chains may  want to set this permanently to `false`, others may want to condition it on things such  as an upgrade having happened recently. 
 
### launchPeriod: `u32`
- **interface**: `api.consts.democracy.launchPeriod`
- **summary**:    How often (in blocks) new public referenda are launched. 
 
### maxProposals: `u32`
- **interface**: `api.consts.democracy.maxProposals`
- **summary**:    The maximum number of public proposals that can exist at any time. 
 
### maxVotes: `u32`
- **interface**: `api.consts.democracy.maxVotes`
- **summary**:    The maximum number of votes for an account. 

   Also used to compute weight, an overly big value can  lead to extrinsic with very big weight: see `delegate` for instance. 
 
### minimumDeposit: `u128`
- **interface**: `api.consts.democracy.minimumDeposit`
- **summary**:    The minimum amount to be used as a deposit for a public referendum proposal. 
 
### preimageByteDeposit: `u128`
- **interface**: `api.consts.democracy.preimageByteDeposit`
- **summary**:    The amount of balance that must be deposited per byte of preimage stored. 
 
### voteLockingPeriod: `u32`
- **interface**: `api.consts.democracy.voteLockingPeriod`
- **summary**:    The minimum period of vote locking. 

   It should be no shorter than enactment period to ensure that in the case of an approval,  those successful voters are locked into the consequences that their votes entail. 
 
### votingPeriod: `u32`
- **interface**: `api.consts.democracy.votingPeriod`
- **summary**:    How often (in blocks) to check for new votes. 

___


## electionProviderMultiPhase
 
### minerMaxLength: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxLength`
- **summary**:    Maximum length (bytes) that the mined solution should consume. 

   The miner will ensure that the total length of the unsigned solution will not exceed  this value. 
 
### minerMaxWeight: `u64`
- **interface**: `api.consts.electionProviderMultiPhase.minerMaxWeight`
- **summary**:    Maximum weight that the miner should consume. 

   The miner will ensure that the total weight of the unsigned solution will not exceed  this value, based on [`WeightInfo::submit_unsigned`]. 
 
### minerTxPriority: `u64`
- **interface**: `api.consts.electionProviderMultiPhase.minerTxPriority`
- **summary**:    The priority of the unsigned transaction submitted in the unsigned-phase 
 
### offchainRepeat: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.offchainRepeat`
- **summary**:    The repeat threshold of the offchain worker. 

   For example, if it is 5, that means that at least 5 blocks will elapse between attempts  to submit the worker's solution. 
 
### signedDepositBase: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositBase`
- **summary**:    Base deposit for a signed solution. 
 
### signedDepositByte: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositByte`
- **summary**:    Per-byte deposit for a signed solution. 
 
### signedDepositWeight: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedDepositWeight`
- **summary**:    Per-weight deposit for a signed solution. 
 
### signedMaxSubmissions: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.signedMaxSubmissions`
- **summary**:    Maximum number of signed submissions that can be queued. 

   It is best to avoid adjusting this during an election, as it impacts downstream data  structures. In particular, `SignedSubmissionIndices<T>` is bounded on this value. If you  update this value during an election, you _must_ ensure that  `SignedSubmissionIndices.len()` is less than or equal to the new value. Otherwise,  attempts to submit new solutions may cause a runtime panic. 
 
### signedMaxWeight: `u64`
- **interface**: `api.consts.electionProviderMultiPhase.signedMaxWeight`
- **summary**:    Maximum weight of a signed solution. 

   This should probably be similar to [`Config::MinerMaxWeight`]. 
 
### signedPhase: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.signedPhase`
- **summary**:    Duration of the signed phase. 
 
### signedRewardBase: `u128`
- **interface**: `api.consts.electionProviderMultiPhase.signedRewardBase`
- **summary**:    Base reward for a signed solution 
 
### solutionImprovementThreshold: `Perbill`
- **interface**: `api.consts.electionProviderMultiPhase.solutionImprovementThreshold`
- **summary**:    The minimum amount of improvement to the solution score that defines a solution as  "better" (in any phase). 
 
### unsignedPhase: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.unsignedPhase`
- **summary**:    Duration of the unsigned phase. 
 
### voterSnapshotPerBlock: `u32`
- **interface**: `api.consts.electionProviderMultiPhase.voterSnapshotPerBlock`
- **summary**:    The maximum number of voters to put in the snapshot. At the moment, snapshots are only  over a single block, but once multi-block elections are introduced they will take place  over multiple blocks. 

   Also, note the data type: If the voters are represented by a `u32` in `type  CompactSolution`, the same `u32` is used here to ensure bounds are respected. 

___


## elections
 
### candidacyBond: `u128`
- **interface**: `api.consts.elections.candidacyBond`
- **summary**:    How much should be locked up in order to submit one's candidacy. 
 
### desiredMembers: `u32`
- **interface**: `api.consts.elections.desiredMembers`
- **summary**:    Number of members to elect. 
 
### desiredRunnersUp: `u32`
- **interface**: `api.consts.elections.desiredRunnersUp`
- **summary**:    Number of runners_up to keep. 
 
### palletId: `[u8;8]`
- **interface**: `api.consts.elections.palletId`
- **summary**:    Identifier for the elections-phragmen pallet's lock 
 
### termDuration: `u32`
- **interface**: `api.consts.elections.termDuration`
- **summary**:    How long each seat is kept. This defines the next block number at which an election  round will happen. If set to zero, no elections are ever triggered and the module will  be in passive mode. 
 
### votingBondBase: `u128`
- **interface**: `api.consts.elections.votingBondBase`
- **summary**:    Base deposit associated with voting. 

   This should be sensibly high to economically ensure the pallet cannot be attacked by  creating a gigantic number of votes. 
 
### votingBondFactor: `u128`
- **interface**: `api.consts.elections.votingBondFactor`
- **summary**:    The amount of bond that need to be locked for each vote (32 bytes). 

___


## grandpa
 
### maxAuthorities: `u32`
- **interface**: `api.consts.grandpa.maxAuthorities`
- **summary**:    Max Authorities in use 

___


## identity
 
### basicDeposit: `u128`
- **interface**: `api.consts.identity.basicDeposit`
- **summary**:    The amount held on deposit for a registered identity 
 
### fieldDeposit: `u128`
- **interface**: `api.consts.identity.fieldDeposit`
- **summary**:    The amount held on deposit per additional field for a registered identity. 
 
### maxAdditionalFields: `u32`
- **interface**: `api.consts.identity.maxAdditionalFields`
- **summary**:    Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O  required to access an identity, but can be pretty high. 
 
### maxRegistrars: `u32`
- **interface**: `api.consts.identity.maxRegistrars`
- **summary**:    Maxmimum number of registrars allowed in the system. Needed to bound the complexity  of, e.g., updating judgements. 
 
### maxSubAccounts: `u32`
- **interface**: `api.consts.identity.maxSubAccounts`
- **summary**:    The maximum number of sub-accounts allowed per identified account. 
 
### subAccountDeposit: `u128`
- **interface**: `api.consts.identity.subAccountDeposit`
- **summary**:    The amount held on deposit for a registered subaccount. This should account for the fact  that one storage item's value will increase by the size of an account ID, and there will  be another trie item whose value is the size of an account ID plus 32 bytes. 

___


## imOnline
 
### unsignedPriority: `u64`
- **interface**: `api.consts.imOnline.unsignedPriority`
- **summary**:    A configuration for base priority of unsigned transactions. 

   This is exposed so that it can be tuned for particular runtime, when  multiple pallets send unsigned transactions. 

___


## multisig
 
### depositBase: `u128`
- **interface**: `api.consts.multisig.depositBase`
- **summary**:    The base amount of currency needed to reserve for creating a multisig execution or to  store a dispatch call for later. 

   This is held for an additional storage item whose value size is  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is  `32 + sizeof(AccountId)` bytes. 
 
### depositFactor: `u128`
- **interface**: `api.consts.multisig.depositFactor`
- **summary**:    The amount of currency needed per unit threshold when creating a multisig execution. 

   This is held for adding 32 bytes more into a pre-existing storage value. 
 
### maxSignatories: `u16`
- **interface**: `api.consts.multisig.maxSignatories`
- **summary**:    The maximum amount of signatories allowed in the multisig. 

___


## proxy
 
### announcementDepositBase: `u128`
- **interface**: `api.consts.proxy.announcementDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating an announcement. 

   This is held when a new storage item holding a `Balance` is created (typically 16  bytes). 
 
### announcementDepositFactor: `u128`
- **interface**: `api.consts.proxy.announcementDepositFactor`
- **summary**:    The amount of currency needed per announcement made. 

   This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)  into a pre-existing storage value. 
 
### maxPending: `u32`
- **interface**: `api.consts.proxy.maxPending`
- **summary**:    The maximum amount of time-delayed announcements that are allowed to be pending. 
 
### maxProxies: `u32`
- **interface**: `api.consts.proxy.maxProxies`
- **summary**:    The maximum amount of proxies allowed for a single account. 
 
### proxyDepositBase: `u128`
- **interface**: `api.consts.proxy.proxyDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating a proxy. 

   This is held for an additional storage item whose value size is  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes. 
 
### proxyDepositFactor: `u128`
- **interface**: `api.consts.proxy.proxyDepositFactor`
- **summary**:    The amount of currency needed per proxy added. 

   This is held for adding 32 bytes plus an instance of `ProxyType` more into a  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take  into account `32 + proxy_type.encode().len()` bytes of data. 

___


## recovery
 
### configDepositBase: `u128`
- **interface**: `api.consts.recovery.configDepositBase`
- **summary**:    The base amount of currency needed to reserve for creating a recovery configuration. 

   This is held for an additional storage item whose value size is  `2 + sizeof(BlockNumber, Balance)` bytes. 
 
### friendDepositFactor: `u128`
- **interface**: `api.consts.recovery.friendDepositFactor`
- **summary**:    The amount of currency needed per additional user when creating a recovery  configuration. 

   This is held for adding `sizeof(AccountId)` bytes more into a pre-existing storage  value. 
 
### maxFriends: `u16`
- **interface**: `api.consts.recovery.maxFriends`
- **summary**:    The maximum amount of friends allowed in a recovery configuration. 
 
### recoveryDeposit: `u128`
- **interface**: `api.consts.recovery.recoveryDeposit`
- **summary**:    The base amount of currency needed to reserve for starting a recovery. 

   This is primarily held for deterring malicious recovery attempts, and should  have a value large enough that a bad actor would choose not to place this  deposit. It also acts to fund additional storage item whose value size is  `sizeof(BlockNumber, Balance + T * AccountId)` bytes. Where T is a configurable  threshold. 

___


## scheduler
 
### maximumWeight: `u64`
- **interface**: `api.consts.scheduler.maximumWeight`
- **summary**:    The maximum weight that may be scheduled per block for any dispatchables of less  priority than `schedule::HARD_DEADLINE`. 
 
### maxScheduledPerBlock: `u32`
- **interface**: `api.consts.scheduler.maxScheduledPerBlock`
- **summary**:    The maximum number of scheduled calls in the queue for a single block.  Not strictly enforced, but used for weight estimation. 

___


## staking
 
### bondingDuration: `u32`
- **interface**: `api.consts.staking.bondingDuration`
- **summary**:    Number of eras that staked funds must remain bonded for. 
 
### maxNominations: `u32`
- **interface**: `api.consts.staking.maxNominations`
 
### maxNominatorRewardedPerValidator: `u32`
- **interface**: `api.consts.staking.maxNominatorRewardedPerValidator`
- **summary**:    The maximum number of nominators rewarded for each validator. 

   For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can  claim their reward. This used to limit the i/o cost for the nominator payout. 
 
### sessionsPerEra: `u32`
- **interface**: `api.consts.staking.sessionsPerEra`
- **summary**:    Number of sessions per era. 
 
### slashDeferDuration: `u32`
- **interface**: `api.consts.staking.slashDeferDuration`
- **summary**:    Number of eras that slashes are deferred by, after computation. 

   This should be less than the bonding duration. Set to 0 if slashes  should be applied immediately, without opportunity for intervention. 

___


## swap
 
### nativeTokenId: `[u8;32]`
- **interface**: `api.consts.swap.nativeTokenId`

___


## system
 
### blockHashCount: `u32`
- **interface**: `api.consts.system.blockHashCount`
- **summary**:    Maximum number of block number to block hash mappings to keep (oldest pruned first). 
 
### blockLength: `FrameSystemLimitsBlockLength`
- **interface**: `api.consts.system.blockLength`
- **summary**:    The maximum length of a block (in bytes). 
 
### blockWeights: `FrameSystemLimitsBlockWeights`
- **interface**: `api.consts.system.blockWeights`
- **summary**:    Block & extrinsics weights: base values and limits. 
 
### dbWeight: `FrameSupportWeightsRuntimeDbWeight`
- **interface**: `api.consts.system.dbWeight`
- **summary**:    The weight of runtime database operations the runtime can invoke. 
 
### ss58Prefix: `u16`
- **interface**: `api.consts.system.ss58Prefix`
- **summary**:    The designated SS85 prefix of this chain. 

   This replaces the "ss58Format" property declared in the chain spec. Reason is  that the runtime should know about the prefix in order to make use of it as  an identifier of the chain. 
 
### version: `SpVersionRuntimeVersion`
- **interface**: `api.consts.system.version`
- **summary**:    Get the chain's current version. 

___


## timestamp
 
### minimumPeriod: `u64`
- **interface**: `api.consts.timestamp.minimumPeriod`
- **summary**:    The minimum period between blocks. Beware that this is different to the *expected*  period that the block production apparatus provides. Your chosen consensus system will  generally work with this to determine a sensible block time. e.g. For Aura, it will be  double this period on default settings. 

___


## tips
 
### dataDepositPerByte: `u128`
- **interface**: `api.consts.tips.dataDepositPerByte`
- **summary**:    The amount held on deposit per byte within the tip report reason or bounty description. 
 
### maximumReasonLength: `u32`
- **interface**: `api.consts.tips.maximumReasonLength`
- **summary**:    Maximum acceptable reason length. 
 
### tipCountdown: `u32`
- **interface**: `api.consts.tips.tipCountdown`
- **summary**:    The period for which a tip remains open after is has achieved threshold tippers. 
 
### tipFindersFee: `Percent`
- **interface**: `api.consts.tips.tipFindersFee`
- **summary**:    The percent of the final tip which goes to the original reporter of the tip. 
 
### tipReportDepositBase: `u128`
- **interface**: `api.consts.tips.tipReportDepositBase`
- **summary**:    The amount held on deposit for placing a tip report. 

___


## transactionPayment
 
### operationalFeeMultiplier: `u8`
- **interface**: `api.consts.transactionPayment.operationalFeeMultiplier`
- **summary**:    A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their  `priority` 

   This value is multipled by the `final_fee` to obtain a "virtual tip" that is later  added to a tip component in regular `priority` calculations.  It means that a `Normal` transaction can front-run a similarly-sized `Operational`  extrinsic (with no tip), by including a tip value greater than the virtual tip. 

   ```rust,ignore  // For `Normal`  let priority = priority_calc(tip); 

   // For `Operational`  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;  let priority = priority_calc(tip + virtual_tip);  ``` 

   Note that since we use `final_fee` the multiplier applies also to the regular `tip`  sent with the transaction. So, not only does the transaction get a priority bump based  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`  transactions. 
 
### transactionByteFee: `u128`
- **interface**: `api.consts.transactionPayment.transactionByteFee`
- **summary**:    The fee to be paid for making a transaction; the per-byte portion. 
 
### weightToFee: `Vec<FrameSupportWeightsWeightToFeeCoefficient>`
- **interface**: `api.consts.transactionPayment.weightToFee`
- **summary**:    The polynomial that is applied in order to derive fee from weight. 

___


## treasury
 
### burn: `Permill`
- **interface**: `api.consts.treasury.burn`
- **summary**:    Percentage of spare funds (if any) that are burnt per spend period. 
 
### maxApprovals: `u32`
- **interface**: `api.consts.treasury.maxApprovals`
- **summary**:    The maximum number of approvals that can wait in the spending queue. 
 
### palletId: `FrameSupportPalletId`
- **interface**: `api.consts.treasury.palletId`
- **summary**:    The treasury's pallet id, used for deriving its sovereign account ID. 
 
### proposalBond: `Permill`
- **interface**: `api.consts.treasury.proposalBond`
- **summary**:    Fraction of a proposal's value that should be bonded in order to place the proposal.  An accepted proposal gets these back. A rejected proposal does not. 
 
### proposalBondMinimum: `u128`
- **interface**: `api.consts.treasury.proposalBondMinimum`
- **summary**:    Minimum amount of funds that should be placed in a deposit for making a proposal. 
 
### spendPeriod: `u32`
- **interface**: `api.consts.treasury.spendPeriod`
- **summary**:    Period between successive spends. 

___


## uniques
 
### attributeDepositBase: `u128`
- **interface**: `api.consts.uniques.attributeDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding an attribute to an asset. 
 
### classDeposit: `u128`
- **interface**: `api.consts.uniques.classDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset class. 
 
### depositPerByte: `u128`
- **interface**: `api.consts.uniques.depositPerByte`
- **summary**:    The additional funds that must be reserved for the number of bytes store in metadata,  either "normal" metadata or attribute metadata. 
 
### instanceDeposit: `u128`
- **interface**: `api.consts.uniques.instanceDeposit`
- **summary**:    The basic amount of funds that must be reserved for an asset instance. 
 
### keyLimit: `u32`
- **interface**: `api.consts.uniques.keyLimit`
- **summary**:    The maximum length of an attribute key. 
 
### metadataDepositBase: `u128`
- **interface**: `api.consts.uniques.metadataDepositBase`
- **summary**:    The basic amount of funds that must be reserved when adding metadata to your asset. 
 
### stringLimit: `u32`
- **interface**: `api.consts.uniques.stringLimit`
- **summary**:    The maximum length of data stored on-chain. 
 
### valueLimit: `u32`
- **interface**: `api.consts.uniques.valueLimit`
- **summary**:    The maximum length of an attribute value. 

___


## utility
 
### batchedCallsLimit: `u32`
- **interface**: `api.consts.utility.batchedCallsLimit`
- **summary**:    The limit on the number of batched calls. 

___


## vesting
 
### maxVestingSchedules: `u32`
- **interface**: `api.consts.vesting.maxVestingSchedules`
 
### minVestedTransfer: `u128`
- **interface**: `api.consts.vesting.minVestedTransfer`
- **summary**:    The minimum amount transferred to call `vested_transfer`. 

___


## xXBetanetRewards
 
### enactmentBlock: `u32`
- **interface**: `api.consts.xXBetanetRewards.enactmentBlock`

___


## xXCustody
 
### custodyDuration: `u32`
- **interface**: `api.consts.xXCustody.custodyDuration`
 
### governanceCustodyDuration: `u32`
- **interface**: `api.consts.xXCustody.governanceCustodyDuration`
 
### payoutFrequency: `u32`
- **interface**: `api.consts.xXCustody.payoutFrequency`

___


## xXEconomics
 
### rewardsPoolAccount: `AccountId32`
- **interface**: `api.consts.xXEconomics.rewardsPoolAccount`
 
### rewardsPoolId: `FrameSupportPalletId`
- **interface**: `api.consts.xXEconomics.rewardsPoolId`

___


## xXPublic
 
### saleAccount: `AccountId32`
- **interface**: `api.consts.xXPublic.saleAccount`
 
### testnetAccount: `AccountId32`
- **interface**: `api.consts.xXPublic.testnetAccount`
