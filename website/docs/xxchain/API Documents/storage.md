---
title: Storage
keywords: [xxchain, blockchain, chain, storage, pallet, xx network]
---

The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via `api.query.<module>.<method>`. 

(NOTE: These were generated from a static/snapshot view of a recent Substrate master node. Some items may not be available in older nodes, or in any customized implementations.)

- **[assets](#assets)**

- **[authorship](#authorship)**

- **[babe](#babe)**

- **[balances](#balances)**

- **[bounties](#bounties)**

- **[chainBridge](#chainbridge)**

- **[claims](#claims)**

- **[council](#council)**

- **[democracy](#democracy)**

- **[electionProviderMultiPhase](#electionprovidermultiphase)**

- **[elections](#elections)**

- **[grandpa](#grandpa)**

- **[identity](#identity)**

- **[imOnline](#imonline)**

- **[multisig](#multisig)**

- **[offences](#offences)**

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[substrate](#substrate)**

- **[swap](#swap)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[timestamp](#timestamp)**

- **[tips](#tips)**

- **[transactionPayment](#transactionpayment)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[vesting](#vesting)**

- **[xXBetanetRewards](#xxbetanetrewards)**

- **[xXCmix](#xxcmix)**

- **[xXCustody](#xxcustody)**

- **[xXEconomics](#xxeconomics)**

- **[xXPublic](#xxpublic)**


___


## assets
 
### account(`u32, AccountId32`): `PalletAssetsAssetBalance`
- **interface**: `api.query.assets.account`
- **summary**:    The number of units of assets held by any given account. 
 
### approvals(`u32, AccountId32, AccountId32`): `Option<PalletAssetsApproval>`
- **interface**: `api.query.assets.approvals`
- **summary**:    Approved balance transfers. First balance is the amount approved for transfer. Second  is the amount of `T::Currency` reserved for storing this.  First key is the asset ID, second key is the owner and third key is the delegate. 
 
### asset(`u32`): `Option<PalletAssetsAssetDetails>`
- **interface**: `api.query.assets.asset`
- **summary**:    Details of an asset. 
 
### metadata(`u32`): `PalletAssetsAssetMetadata`
- **interface**: `api.query.assets.metadata`
- **summary**:    Metadata of an asset. 

___


## authorship
 
### author(): `Option<AccountId32>`
- **interface**: `api.query.authorship.author`
- **summary**:    Author of current block. 
 
### didSetUncles(): `bool`
- **interface**: `api.query.authorship.didSetUncles`
- **summary**:    Whether uncles were already set in this block. 
 
### uncles(): `Vec<PalletAuthorshipUncleEntryItem>`
- **interface**: `api.query.authorship.uncles`
- **summary**:    Uncles 

___


## babe
 
### authorities(): `Vec<(SpConsensusBabeAppPublic,u64)>`
- **interface**: `api.query.babe.authorities`
- **summary**:    Current epoch authorities. 
 
### authorVrfRandomness(): `Option<[u8;32]>`
- **interface**: `api.query.babe.authorVrfRandomness`
- **summary**:    This field should always be populated during block processing unless  secondary plain slots are enabled (which don't contain a VRF output). 

   It is set in `on_initialize`, before it will contain the value from the last block. 
 
### currentSlot(): `u64`
- **interface**: `api.query.babe.currentSlot`
- **summary**:    Current slot number. 
 
### epochConfig(): `Option<SpConsensusBabeBabeEpochConfiguration>`
- **interface**: `api.query.babe.epochConfig`
- **summary**:    The configuration for the current epoch. Should never be `None` as it is initialized in  genesis. 
 
### epochIndex(): `u64`
- **interface**: `api.query.babe.epochIndex`
- **summary**:    Current epoch index. 
 
### epochStart(): `(u32,u32)`
- **interface**: `api.query.babe.epochStart`
- **summary**:    The block numbers when the last and current epoch have started, respectively `N-1` and  `N`.  NOTE: We track this is in order to annotate the block number when a given pool of  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in  slots, which may be skipped, the block numbers may not line up with the slot numbers. 
 
### genesisSlot(): `u64`
- **interface**: `api.query.babe.genesisSlot`
- **summary**:    The slot at which the first epoch actually started. This is 0  until the first block of the chain. 
 
### initialized(): `Option<Option<[u8;32]>>`
- **interface**: `api.query.babe.initialized`
- **summary**:    Temporary value (cleared at block finalization) which is `Some`  if per-block initialization has already been called for current block. 
 
### lateness(): `u32`
- **interface**: `api.query.babe.lateness`
- **summary**:    How late the current block is compared to its parent. 

   This entry is populated as part of block execution and is cleaned up  on block finalization. Querying this storage entry outside of block  execution context should always yield zero. 
 
### nextAuthorities(): `Vec<(SpConsensusBabeAppPublic,u64)>`
- **interface**: `api.query.babe.nextAuthorities`
- **summary**:    Next epoch authorities. 
 
### nextEpochConfig(): `Option<SpConsensusBabeBabeEpochConfiguration>`
- **interface**: `api.query.babe.nextEpochConfig`
- **summary**:    The configuration for the next epoch, `None` if the config will not change  (you can fallback to `EpochConfig` instead in that case). 
 
### nextRandomness(): `[u8;32]`
- **interface**: `api.query.babe.nextRandomness`
- **summary**:    Next epoch randomness. 
 
### pendingEpochConfigChange(): `Option<SpConsensusBabeDigestsNextConfigDescriptor>`
- **interface**: `api.query.babe.pendingEpochConfigChange`
- **summary**:    Pending epoch configuration change that will be applied when the next epoch is enacted. 
 
### randomness(): `[u8;32]`
- **interface**: `api.query.babe.randomness`
- **summary**:    The epoch randomness for the *current* epoch. 

   #### Security 

   This MUST NOT be used for gambling, as it can be influenced by a  malicious validator in the short term. It MAY be used in many  cryptographic protocols, however, so long as one remembers that this  (like everything else on-chain) it is public. For example, it can be  used where a number is needed that cannot have been chosen by an  adversary, for purposes such as public-coin zero-knowledge proofs. 
 
### segmentIndex(): `u32`
- **interface**: `api.query.babe.segmentIndex`
- **summary**:    Randomness under construction. 

   We make a trade-off between storage accesses and list length.  We store the under-construction randomness in segments of up to  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`. 

   Once a segment reaches this length, we begin the next one.  We reset all segments and return to `0` at the beginning of every  epoch. 
 
### underConstruction(`u32`): `Vec<[u8;32]>`
- **interface**: `api.query.babe.underConstruction`
- **summary**:    TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay. 

___


## balances
 
### account(`AccountId32`): `PalletBalancesAccountData`
- **interface**: `api.query.balances.account`
- **summary**:    The balance of an account. 

   NOTE: This is only used in the case that this pallet is used to store balances. 
 
### locks(`AccountId32`): `Vec<PalletBalancesBalanceLock>`
- **interface**: `api.query.balances.locks`
- **summary**:    Any liquidity locks on some account balances.  NOTE: Should only be accessed when setting, changing and freeing a lock. 
 
### reserves(`AccountId32`): `Vec<PalletBalancesReserveData>`
- **interface**: `api.query.balances.reserves`
- **summary**:    Named reserves on some account balances. 
 
### storageVersion(): `PalletBalancesReleases`
- **interface**: `api.query.balances.storageVersion`
- **summary**:    Storage version of the pallet. 

   This is set to v2.0.0 for new networks. 
 
### totalIssuance(): `u128`
- **interface**: `api.query.balances.totalIssuance`
- **summary**:    The total units issued in the system. 

___


## bounties
 
### bounties(`u32`): `Option<PalletBountiesBounty>`
- **interface**: `api.query.bounties.bounties`
- **summary**:    Bounties that have been made. 
 
### bountyApprovals(): `Vec<u32>`
- **interface**: `api.query.bounties.bountyApprovals`
- **summary**:    Bounty indices that have been approved but not yet funded. 
 
### bountyCount(): `u32`
- **interface**: `api.query.bounties.bountyCount`
- **summary**:    Number of bounty proposals that have been made. 
 
### bountyDescriptions(`u32`): `Option<Bytes>`
- **interface**: `api.query.bounties.bountyDescriptions`
- **summary**:    The description of each bounty. 

___


## chainBridge
 
### chainNonces(`u8`): `Option<u64>`
- **interface**: `api.query.chainBridge.chainNonces`
- **summary**:    All whitelisted chains and their respective transaction counts 
 
### relayerCount(): `u32`
- **interface**: `api.query.chainBridge.relayerCount`
- **summary**:    Number of relayers in set 
 
### relayers(`AccountId32`): `bool`
- **interface**: `api.query.chainBridge.relayers`
- **summary**:    Tracks current relayer set 
 
### relayerThreshold(): `u32`
- **interface**: `api.query.chainBridge.relayerThreshold`
- **summary**:    Number of votes required for a proposal to execute 
 
### resources(`[u8;32]`): `Option<Bytes>`
- **interface**: `api.query.chainBridge.resources`
- **summary**:    Utilized by the bridge software to map resource IDs to actual methods 
 
### votes(`u8, (u64,Call)`): `Option<ChainbridgeProposalVotes>`
- **interface**: `api.query.chainBridge.votes`
- **summary**:    All known proposals.  The key is the hash of the call and the deposit ID, to ensure it's unique. 

___


## claims
 
### claims(`ClaimsEthereumAddress`): `Option<u128>`
- **interface**: `api.query.claims.claims`
 
### preclaims(`AccountId32`): `Option<ClaimsEthereumAddress>`
- **interface**: `api.query.claims.preclaims`
- **summary**:    Pre-claimed Ethereum accounts, by the Account ID that they are claimed to. 
 
### rewards(`ClaimsEthereumAddress`): `Option<u128>`
- **interface**: `api.query.claims.rewards`
- **summary**:    Proposed amount of BetaNet staking rewards 
 
### signing(`ClaimsEthereumAddress`): `Option<ClaimsStatementKind>`
- **interface**: `api.query.claims.signing`
- **summary**:    The statement kind that must be signed, if any. 
 
### total(): `u128`
- **interface**: `api.query.claims.total`
 
### vesting(`ClaimsEthereumAddress`): `Option<Vec<(u128,u128,u32)>>`
- **interface**: `api.query.claims.vesting`
- **summary**:    Vesting schedules for a claim.  NOTE: It is the responsibility of the caller to not set more genesis  config vesting schedules than supported by the Vesting pallet.  Any schedules specified above that limit will be ignored. 

   First balance is the total amount that should be held for vesting.  Second balance is how much should be unlocked per block.  The block number is when the vesting should start. 

___


## council
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.council.members`
- **summary**:    The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.council.prime`
- **summary**:    The prime member that helps determine the default vote behavior in case of absentations. 
 
### proposalCount(): `u32`
- **interface**: `api.query.council.proposalCount`
- **summary**:    Proposals so far. 
 
### proposalOf(`H256`): `Option<Call>`
- **interface**: `api.query.council.proposalOf`
- **summary**:    Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<H256>`
- **interface**: `api.query.council.proposals`
- **summary**:    The hashes of the active proposals. 
 
### voting(`H256`): `Option<PalletCollectiveVotes>`
- **interface**: `api.query.council.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 

___


## democracy
 
### blacklist(`H256`): `Option<(u32,Vec<AccountId32>)>`
- **interface**: `api.query.democracy.blacklist`
- **summary**:    A record of who vetoed what. Maps proposal hash to a possible existent block number  (until when it may not be resubmitted) and who vetoed it. 
 
### cancellations(`H256`): `bool`
- **interface**: `api.query.democracy.cancellations`
- **summary**:    Record of all proposals that have been subject to emergency cancellation. 
 
### depositOf(`u32`): `Option<(Vec<AccountId32>,u128)>`
- **interface**: `api.query.democracy.depositOf`
- **summary**:    Those who have locked a deposit. 

   TWOX-NOTE: Safe, as increasing integer keys are safe. 
 
### lastTabledWasExternal(): `bool`
- **interface**: `api.query.democracy.lastTabledWasExternal`
- **summary**:    True if the last referendum tabled was submitted externally. False if it was a public  proposal. 
 
### locks(`AccountId32`): `Option<u32>`
- **interface**: `api.query.democracy.locks`
- **summary**:    Accounts for which there are locks in action which may be removed at some point in the  future. The value is the block number at which the lock expires and may be removed. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### lowestUnbaked(): `u32`
- **interface**: `api.query.democracy.lowestUnbaked`
- **summary**:    The lowest referendum index representing an unbaked referendum. Equal to  `ReferendumCount` if there isn't a unbaked referendum. 
 
### nextExternal(): `Option<(H256,PalletDemocracyVoteThreshold)>`
- **interface**: `api.query.democracy.nextExternal`
- **summary**:    The referendum to be tabled whenever it would be valid to table an external proposal.  This happens when a referendum needs to be tabled and one of two conditions are met: 

  - `LastTabledWasExternal` is `false`; or

  - `PublicProps` is empty.
 
### preimages(`H256`): `Option<PalletDemocracyPreimageStatus>`
- **interface**: `api.query.democracy.preimages`
- **summary**:    Map of hashes to the proposal preimage, along with who registered it and their deposit.  The block number is the block at which it was deposited. 
 
### publicPropCount(): `u32`
- **interface**: `api.query.democracy.publicPropCount`
- **summary**:    The number of (public) proposals that have been made so far. 
 
### publicProps(): `Vec<(u32,H256,AccountId32)>`
- **interface**: `api.query.democracy.publicProps`
- **summary**:    The public proposals. Unsorted. The second item is the proposal's hash. 
 
### referendumCount(): `u32`
- **interface**: `api.query.democracy.referendumCount`
- **summary**:    The next free referendum index, aka the number of referenda started so far. 
 
### referendumInfoOf(`u32`): `Option<PalletDemocracyReferendumInfo>`
- **interface**: `api.query.democracy.referendumInfoOf`
- **summary**:    Information concerning any given referendum. 

   TWOX-NOTE: SAFE as indexes are not under an attacker’s control. 
 
### storageVersion(): `Option<PalletDemocracyReleases>`
- **interface**: `api.query.democracy.storageVersion`
- **summary**:    Storage version of the pallet. 

   New networks start with last version. 
 
### votingOf(`AccountId32`): `PalletDemocracyVoteVoting`
- **interface**: `api.query.democracy.votingOf`
- **summary**:    All votes for a particular voter. We store the balance for the number of votes that we  have recorded. The second item is the total amount of delegations, that will be added. 

   TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway. 

___


## electionProviderMultiPhase
 
### currentPhase(): `PalletElectionProviderMultiPhasePhase`
- **interface**: `api.query.electionProviderMultiPhase.currentPhase`
- **summary**:    Current phase. 
 
### desiredTargets(): `Option<u32>`
- **interface**: `api.query.electionProviderMultiPhase.desiredTargets`
- **summary**:    Desired number of targets to elect for this round. 

   Only exists when [`Snapshot`] is present. 
 
### minimumUntrustedScore(): `Option<[u128;3]>`
- **interface**: `api.query.electionProviderMultiPhase.minimumUntrustedScore`
- **summary**:    The minimum score that each 'untrusted' solution must attain in order to be considered  feasible. 

   Can be set via `set_minimum_untrusted_score`. 
 
### queuedSolution(): `Option<PalletElectionProviderMultiPhaseReadySolution>`
- **interface**: `api.query.electionProviderMultiPhase.queuedSolution`
- **summary**:    Current best solution, signed or unsigned, queued to be returned upon `elect`. 
 
### round(): `u32`
- **interface**: `api.query.electionProviderMultiPhase.round`
- **summary**:    Internal counter for the number of rounds. 

   This is useful for de-duplication of transactions submitted to the pool, and general  diagnostics of the pallet. 

   This is merely incremented once per every time that an upstream `elect` is called. 
 
### signedSubmissionIndices(): `BTreeMap<[u128;3], u32>`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionIndices`
- **summary**:    A sorted, bounded set of `(score, index)`, where each `index` points to a value in  `SignedSubmissions`. 

   We never need to process more than a single signed submission at a time. Signed submissions  can be quite large, so we're willing to pay the cost of multiple database accesses to access  them one at a time instead of reading and decoding all of them at once. 
 
### signedSubmissionNextIndex(): `u32`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionNextIndex`
- **summary**:    The next index to be assigned to an incoming signed submission. 

   Every accepted submission is assigned a unique index; that index is bound to that particular  submission for the duration of the election. On election finalization, the next index is  reset to 0. 

   We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its  capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,  because iteration is slow. Instead, we store the value here. 
 
### signedSubmissionsMap(`u32`): `PalletElectionProviderMultiPhaseSignedSignedSubmission`
- **interface**: `api.query.electionProviderMultiPhase.signedSubmissionsMap`
- **summary**:    Unchecked, signed solutions. 

   Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while  allowing us to keep only a single one in memory at a time. 

   Twox note: the key of the map is an auto-incrementing index which users cannot inspect or  affect; we shouldn't need a cryptographically secure hasher. 
 
### snapshot(): `Option<PalletElectionProviderMultiPhaseRoundSnapshot>`
- **interface**: `api.query.electionProviderMultiPhase.snapshot`
- **summary**:    Snapshot data of the round. 

   This is created at the beginning of the signed phase and cleared upon calling `elect`. 
 
### snapshotMetadata(): `Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>`
- **interface**: `api.query.electionProviderMultiPhase.snapshotMetadata`
- **summary**:    The metadata of the [`RoundSnapshot`] 

   Only exists when [`Snapshot`] is present. 

___


## elections
 
### candidates(): `Vec<(AccountId32,u128)>`
- **interface**: `api.query.elections.candidates`
- **summary**:    The present candidate list. A current member or runner-up can never enter this vector  and is always implicitly assumed to be a candidate. 

   Second element is the deposit. 

   Invariant: Always sorted based on account id. 
 
### electionRounds(): `u32`
- **interface**: `api.query.elections.electionRounds`
- **summary**:    The total number of vote rounds that have happened, excluding the upcoming one. 
 
### members(): `Vec<PalletElectionsPhragmenSeatHolder>`
- **interface**: `api.query.elections.members`
- **summary**:    The current elected members. 

   Invariant: Always sorted based on account id. 
 
### runnersUp(): `Vec<PalletElectionsPhragmenSeatHolder>`
- **interface**: `api.query.elections.runnersUp`
- **summary**:    The current reserved runners-up. 

   Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the  last (i.e. _best_) runner-up will be replaced. 
 
### voting(`AccountId32`): `PalletElectionsPhragmenVoter`
- **interface**: `api.query.elections.voting`
- **summary**:    Votes and locked stake of a particular voter. 

   TWOX-NOTE: SAFE as `AccountId` is a crypto hash. 

___


## grandpa
 
### currentSetId(): `u64`
- **interface**: `api.query.grandpa.currentSetId`
- **summary**:    The number of changes (both in terms of keys and underlying economic responsibilities)  in the "set" of Grandpa validators from genesis. 
 
### nextForced(): `Option<u32>`
- **interface**: `api.query.grandpa.nextForced`
- **summary**:    next block number where we can force a change. 
 
### pendingChange(): `Option<PalletGrandpaStoredPendingChange>`
- **interface**: `api.query.grandpa.pendingChange`
- **summary**:    Pending change: (signaled at, scheduled change). 
 
### setIdSession(`u64`): `Option<u32>`
- **interface**: `api.query.grandpa.setIdSession`
- **summary**:    A mapping from grandpa set ID to the index of the *most recent* session for which its  members were responsible. 

   TWOX-NOTE: `SetId` is not under user control. 
 
### stalled(): `Option<(u32,u32)>`
- **interface**: `api.query.grandpa.stalled`
- **summary**:    `true` if we are currently stalled. 
 
### state(): `PalletGrandpaStoredState`
- **interface**: `api.query.grandpa.state`
- **summary**:    State of the current authority set. 

___


## identity
 
### identityOf(`AccountId32`): `Option<PalletIdentityRegistration>`
- **interface**: `api.query.identity.identityOf`
- **summary**:    Information that is pertinent to identify the entity behind an account. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### registrars(): `Vec<Option<PalletIdentityRegistrarInfo>>`
- **interface**: `api.query.identity.registrars`
- **summary**:    The set of registrars. Not expected to get very big as can only be added through a  special origin (likely a council motion). 

   The index into this can be cast to `RegistrarIndex` to get a valid value. 
 
### subsOf(`AccountId32`): `(u128,Vec<AccountId32>)`
- **interface**: `api.query.identity.subsOf`
- **summary**:    Alternative "sub" identities of this account. 

   The first item is the deposit, the second is a vector of the accounts. 

   TWOX-NOTE: OK ― `AccountId` is a secure hash. 
 
### superOf(`AccountId32`): `Option<(AccountId32,Data)>`
- **interface**: `api.query.identity.superOf`
- **summary**:    The super-identity of an alternative "sub" identity together with its name, within that  context. If the account is not some other account's sub-identity, then just `None`. 

___


## imOnline
 
### authoredBlocks(`u32, AccountId32`): `u32`
- **interface**: `api.query.imOnline.authoredBlocks`
- **summary**:    For each session index, we keep a mapping of `ValidatorId<T>` to the  number of blocks authored by the given authority. 
 
### heartbeatAfter(): `u32`
- **interface**: `api.query.imOnline.heartbeatAfter`
- **summary**:    The block number after which it's ok to send heartbeats in the current  session. 

   At the beginning of each session we set this to a value that should fall  roughly in the middle of the session duration. The idea is to first wait for  the validators to produce a block in the current session, so that the  heartbeat later on will not be necessary. 

   This value will only be used as a fallback if we fail to get a proper session  progress estimate from `NextSessionRotation`, as those estimates should be  more accurate then the value we calculate for `HeartbeatAfter`. 
 
### keys(): `Vec<PalletImOnlineSr25519AppSr25519Public>`
- **interface**: `api.query.imOnline.keys`
- **summary**:    The current set of keys that may issue a heartbeat. 
 
### receivedHeartbeats(`u32, u32`): `Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>`
- **interface**: `api.query.imOnline.receivedHeartbeats`
- **summary**:    For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to  `WrapperOpaque<BoundedOpaqueNetworkState>`. 

___


## multisig
 
### calls(`[u8;32]`): `Option<(WrapperKeepOpaque<Call>,AccountId32,u128)>`
- **interface**: `api.query.multisig.calls`
 
### multisigs(`AccountId32, [u8;32]`): `Option<PalletMultisigMultisig>`
- **interface**: `api.query.multisig.multisigs`
- **summary**:    The set of open multisig operations. 

___


## offences
 
### concurrentReportsIndex(`[u8;16], Bytes`): `Vec<H256>`
- **interface**: `api.query.offences.concurrentReportsIndex`
- **summary**:    A vector of reports of the same kind that happened at the same time slot. 
 
### reports(`H256`): `Option<SpStakingOffenceOffenceDetails>`
- **interface**: `api.query.offences.reports`
- **summary**:    The primary structure that holds all offence records keyed by report identifiers. 
 
### reportsByKindIndex(`[u8;16]`): `Bytes`
- **interface**: `api.query.offences.reportsByKindIndex`
- **summary**:    Enumerates all reports of a kind along with the time they happened. 

   All reports are sorted by the time of offence. 

   Note that the actual type of this mapping is `Vec<u8>`, this is because values of  different types are not supported at the moment so we are doing the manual serialization. 

___


## proxy
 
### announcements(`AccountId32`): `(Vec<PalletProxyAnnouncement>,u128)`
- **interface**: `api.query.proxy.announcements`
- **summary**:    The announcements made by the proxy (key). 
 
### proxies(`AccountId32`): `(Vec<PalletProxyProxyDefinition>,u128)`
- **interface**: `api.query.proxy.proxies`
- **summary**:    The set of account proxies. Maps the account which has delegated to the accounts  which are being delegated to, together with the amount held on deposit. 

___


## recovery
 
### activeRecoveries(`AccountId32, AccountId32`): `Option<PalletRecoveryActiveRecovery>`
- **interface**: `api.query.recovery.activeRecoveries`
- **summary**:    Active recovery attempts. 

   First account is the account to be recovered, and the second account  is the user trying to recover the account. 
 
### proxy(`AccountId32`): `Option<AccountId32>`
- **interface**: `api.query.recovery.proxy`
- **summary**:    The list of allowed proxy accounts. 

   Map from the user who can access it to the recovered account. 
 
### recoverable(`AccountId32`): `Option<PalletRecoveryRecoveryConfig>`
- **interface**: `api.query.recovery.recoverable`
- **summary**:    The set of recoverable accounts and their recovery configuration. 

___


## scheduler
 
### agenda(`u32`): `Vec<Option<PalletSchedulerScheduledV2>>`
- **interface**: `api.query.scheduler.agenda`
- **summary**:    Items to be executed, indexed by the block number that they should be executed on. 
 
### lookup(`Bytes`): `Option<(u32,u32)>`
- **interface**: `api.query.scheduler.lookup`
- **summary**:    Lookup from identity to the block number and index of the task. 
 
### storageVersion(): `PalletSchedulerReleases`
- **interface**: `api.query.scheduler.storageVersion`
- **summary**:    Storage version of the pallet. 

   New networks start with last version. 

___


## session
 
### currentIndex(): `u32`
- **interface**: `api.query.session.currentIndex`
- **summary**:    Current index of the session. 
 
### disabledValidators(): `Vec<u32>`
- **interface**: `api.query.session.disabledValidators`
- **summary**:    Indices of disabled validators. 

   The vec is always kept sorted so that we can find whether a given validator is  disabled using binary search. It gets cleared when `on_session_ending` returns  a new set of identities. 
 
### keyOwner(`(SpCoreCryptoKeyTypeId,Bytes)`): `Option<AccountId32>`
- **interface**: `api.query.session.keyOwner`
- **summary**:    The owner of a key. The key is the `KeyTypeId` + the encoded key. 
 
### nextKeys(`AccountId32`): `Option<XxnetworkRuntimeSessionKeys>`
- **interface**: `api.query.session.nextKeys`
- **summary**:    The next session keys for a validator. 
 
### queuedChanged(): `bool`
- **interface**: `api.query.session.queuedChanged`
- **summary**:    True if the underlying economic identities or weighting behind the validators  has changed in the queued validator set. 
 
### queuedKeys(): `Vec<(AccountId32,XxnetworkRuntimeSessionKeys)>`
- **interface**: `api.query.session.queuedKeys`
- **summary**:    The queued keys for the next session. When the next session begins, these keys  will be used to determine the validator's session keys. 
 
### validators(): `Vec<AccountId32>`
- **interface**: `api.query.session.validators`
- **summary**:    The current set of validators. 

___


## staking
 
### activeEra(): `Option<PalletStakingActiveEraInfo>`
- **interface**: `api.query.staking.activeEra`
- **summary**:    The active era information, it holds index and start. 

   The active era is the era being currently rewarded. Validator set of this era must be  equal to [`SessionInterface::validators`]. 
 
### bonded(`AccountId32`): `Option<AccountId32>`
- **interface**: `api.query.staking.bonded`
- **summary**:    Map from all locked "stash" accounts to the controller account. 
 
### bondedEras(): `Vec<(u32,u32)>`
- **interface**: `api.query.staking.bondedEras`
- **summary**:    A mapping from still-bonded eras to the first session index of that era. 

   Must contains information for eras for the range:  `[active_era - bounding_duration; active_era]` 
 
### canceledSlashPayout(): `u128`
- **interface**: `api.query.staking.canceledSlashPayout`
- **summary**:    The amount of currency given to reporters of a slash event which was  canceled by extraordinary circumstances (e.g. governance). 
 
### chillThreshold(): `Option<Percent>`
- **interface**: `api.query.staking.chillThreshold`
- **summary**:    The threshold for when users can start calling `chill_other` for other validators /  nominators. The threshold is compared to the actual number of validators / nominators  (`CountFor*`) in the system compared to the configured max (`Max*Count`). 
 
### cmixIds(`H256`): `Null`
- **interface**: `api.query.staking.cmixIds`
- **summary**:    The map tracking cmix ids for all (wannabe) validators. 
 
### counterForNominators(): `u32`
- **interface**: `api.query.staking.counterForNominators`
- **summary**:    A tracker to keep count of the number of items in the `Nominators` map. 
 
### counterForValidators(): `u32`
- **interface**: `api.query.staking.counterForValidators`
- **summary**:    A tracker to keep count of the number of items in the `Validators` map. 
 
### currentEra(): `Option<u32>`
- **interface**: `api.query.staking.currentEra`
- **summary**:    The current era index. 

   This is the latest planned era, depending on how the Session pallet queues the validator  set, it might be active or not. 
 
### currentPlannedSession(): `u32`
- **interface**: `api.query.staking.currentPlannedSession`
- **summary**:    The last planned session scheduled by the session pallet. 

   This is basically in sync with the call to [`pallet_session::SessionManager::new_session`]. 
 
### earliestUnappliedSlash(): `Option<u32>`
- **interface**: `api.query.staking.earliestUnappliedSlash`
- **summary**:    The earliest era for which we have a pending, unapplied slash. 
 
### electionActive(): `bool`
- **interface**: `api.query.staking.electionActive`
- **summary**:    True if election is off-chain active, i.e., snapshot was taken  Election is active. 
 
### erasRewardPoints(`u32`): `PalletStakingEraRewardPoints`
- **interface**: `api.query.staking.erasRewardPoints`
- **summary**:    Rewards for the last `HISTORY_DEPTH` eras.  If reward hasn't been set or has been removed then 0 reward is returned. 
 
### erasStakers(`u32, AccountId32`): `PalletStakingExposure`
- **interface**: `api.query.staking.erasStakers`
- **summary**:    Exposure of validator at era. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStakersClipped(`u32, AccountId32`): `PalletStakingExposure`
- **interface**: `api.query.staking.erasStakersClipped`
- **summary**:    Clipped Exposure of validator at era. 

   This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the  `T::MaxNominatorRewardedPerValidator` biggest stakers.  (Note: the field `total` and `own` of the exposure remains unchanged).  This is used to limit the i/o cost for the nominator payout. 

   This is keyed fist by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras.  If stakers hasn't been set or has been removed then empty exposure is returned. 
 
### erasStartSessionIndex(`u32`): `Option<u32>`
- **interface**: `api.query.staking.erasStartSessionIndex`
- **summary**:    The session index at which the era start for the last `HISTORY_DEPTH` eras. 

   Note: This tracks the starting session (i.e. session index when era start being active)  for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`. 
 
### erasTotalStake(`u32`): `u128`
- **interface**: `api.query.staking.erasTotalStake`
- **summary**:    The total amount staked for the last `HISTORY_DEPTH` eras.  If total hasn't been set or has been removed then 0 stake is returned. 
 
### erasValidatorPrefs(`u32, AccountId32`): `PalletStakingValidatorPrefs`
- **interface**: `api.query.staking.erasValidatorPrefs`
- **summary**:    Similar to `ErasStakers`, this holds the preferences of validators. 

   This is keyed first by the era index to allow bulk deletion and then the stash account. 

   Is it removed after `HISTORY_DEPTH` eras. 
 
### erasValidatorReward(`u32`): `Option<u128>`
- **interface**: `api.query.staking.erasValidatorReward`
- **summary**:    The total validator era payout for the last `HISTORY_DEPTH` eras. 

   Eras that haven't finished yet or has been removed doesn't have reward. 
 
### forceEra(): `PalletStakingForcing`
- **interface**: `api.query.staking.forceEra`
- **summary**:    Mode of era forcing. 
 
### historyDepth(): `u32`
- **interface**: `api.query.staking.historyDepth`
- **summary**:    Number of eras to keep in history. 

   Information is kept for eras in `[current_era - history_depth; current_era]`. 

   Must be more than the number of eras delayed by session otherwise. I.e. active era must  always be in history. I.e. `active_era > current_era - history_depth` must be  guaranteed. 
 
### invulnerables(): `Vec<AccountId32>`
- **interface**: `api.query.staking.invulnerables`
- **summary**:    Any validators that may never be slashed or forcibly kicked. It's a Vec since they're  easy to initialize and the performance hit is minimal (we expect no more than four  invulnerables) and restricted to testnets. 
 
### ledger(`AccountId32`): `Option<PalletStakingStakingLedger>`
- **interface**: `api.query.staking.ledger`
- **summary**:    Map from all (unlocked) "controller" accounts to the info regarding the staking. 
 
### maxNominatorsCount(): `Option<u32>`
- **interface**: `api.query.staking.maxNominatorsCount`
- **summary**:    The maximum nominator count before we stop allowing new validators to join. 

   When this value is not set, no limits are enforced. 
 
### maxValidatorsCount(): `Option<u32>`
- **interface**: `api.query.staking.maxValidatorsCount`
- **summary**:    The maximum validator count before we stop allowing new validators to join. 

   When this value is not set, no limits are enforced. 
 
### minimumValidatorCount(): `u32`
- **interface**: `api.query.staking.minimumValidatorCount`
- **summary**:    Minimum number of staking participants before emergency conditions are imposed. 
 
### minNominatorBond(): `u128`
- **interface**: `api.query.staking.minNominatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a nominator. 
 
### minValidatorBond(): `u128`
- **interface**: `api.query.staking.minValidatorBond`
- **summary**:    The minimum active bond to become and maintain the role of a validator. 
 
### minValidatorCommission(): `Perbill`
- **interface**: `api.query.staking.minValidatorCommission`
- **summary**:    The minimum commission that a validator can have. 
 
### nominators(`AccountId32`): `Option<PalletStakingNominations>`
- **interface**: `api.query.staking.nominators`
- **summary**:    The map from nominator stash key to the set of stash keys of all validators to nominate. 

   When updating this storage item, you must also update the `CounterForNominators`. 
 
### nominatorSlashInEra(`u32, AccountId32`): `Option<u128>`
- **interface**: `api.query.staking.nominatorSlashInEra`
- **summary**:    All slashing events on nominators, mapped by era to the highest slash value of the era. 
 
### offendingValidators(): `Vec<(u32,bool)>`
- **interface**: `api.query.staking.offendingValidators`
- **summary**:    Indices of validators that have offended in the active era and whether they are currently  disabled. 

   This value should be a superset of disabled validators since not all offences lead to the  validator being disabled (if there was no slash). This is needed to track the percentage of  validators that have offended in the current era, ensuring a new era is forced if  `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find  whether a given validator has previously offended using binary search. It gets cleared when  the era ends. 
 
### slashingSpans(`AccountId32`): `Option<PalletStakingSlashingSlashingSpans>`
- **interface**: `api.query.staking.slashingSpans`
- **summary**:    Slashing spans for stash accounts. 
 
### slashRewardFraction(): `Perbill`
- **interface**: `api.query.staking.slashRewardFraction`
- **summary**:    The percentage of the slash that is distributed to reporters. 

   The rest of the slashed value is handled by the `Slash`. 
 
### spanSlash(`(AccountId32,u32)`): `PalletStakingSlashingSpanRecord`
- **interface**: `api.query.staking.spanSlash`
- **summary**:    Records information about the maximum slash of a stash within a slashing span,  as well as how much reward has been paid out. 
 
### storageVersion(): `PalletStakingReleases`
- **interface**: `api.query.staking.storageVersion`
- **summary**:    True if network has been upgraded to this version.  Storage version of the pallet. 

   This is set to v7.5.0 for new networks. 
 
### unappliedSlashes(`u32`): `Vec<PalletStakingUnappliedSlash>`
- **interface**: `api.query.staking.unappliedSlashes`
- **summary**:    All unapplied slashes that are queued for later. 
 
### validatorCount(): `u32`
- **interface**: `api.query.staking.validatorCount`
- **summary**:    The ideal number of staking participants. 
 
### validators(`AccountId32`): `PalletStakingValidatorPrefs`
- **interface**: `api.query.staking.validators`
- **summary**:    The map from (wannabe) validator stash key to the preferences of that validator. 

   When updating this storage item, you must also update the `CounterForValidators`. 
 
### validatorSlashInEra(`u32, AccountId32`): `Option<(Perbill,u128)>`
- **interface**: `api.query.staking.validatorSlashInEra`
- **summary**:    All slashing events on validators, mapped by era to the highest slash proportion  and slash value of the era. 

___


## substrate

_These are well-known keys that are always available to the runtime implementation of any Substrate-based network._
 
### changesTrieConfig(): `u32`
- **interface**: `api.query.substrate.changesTrieConfig`
- **summary**:    Changes trie configuration is stored under this key. 
 
### childStorageKeyPrefix(): `u32`
- **interface**: `api.query.substrate.childStorageKeyPrefix`
- **summary**:    Prefix of child storage keys. 
 
### code(): `Bytes`
- **interface**: `api.query.substrate.code`
- **summary**:    Wasm code of the runtime. 
 
### extrinsicIndex(): `u32`
- **interface**: `api.query.substrate.extrinsicIndex`
- **summary**:    Current extrinsic index (u32) is stored under this key. 
 
### heapPages(): `u64`
- **interface**: `api.query.substrate.heapPages`
- **summary**:    Number of wasm linear memory pages required for execution of the runtime. 

___


## swap
 
### feeDestination(): `AccountId32`
- **interface**: `api.query.swap.feeDestination`
- **summary**:    Account to which the fee is paid to 
 
### swapFee(): `u128`
- **interface**: `api.query.swap.swapFee`
- **summary**:    Swap service fee charged when moving native tokens out of the chain 

___


## system
 
### account(`AccountId32`): `FrameSystemAccountInfo`
- **interface**: `api.query.system.account`
- **summary**:    The full account information for a particular account ID. 
 
### allExtrinsicsLen(): `Option<u32>`
- **interface**: `api.query.system.allExtrinsicsLen`
- **summary**:    Total length (in bytes) for all extrinsics put together, for the current block. 
 
### blockHash(`u32`): `H256`
- **interface**: `api.query.system.blockHash`
- **summary**:    Map of block numbers to block hashes. 
 
### blockWeight(): `FrameSupportWeightsPerDispatchClassU64`
- **interface**: `api.query.system.blockWeight`
- **summary**:    The current weight for the block. 
 
### digest(): `SpRuntimeDigest`
- **interface**: `api.query.system.digest`
- **summary**:    Digest of the current block, also part of the block header. 
 
### eventCount(): `u32`
- **interface**: `api.query.system.eventCount`
- **summary**:    The number of events in the `Events<T>` list. 
 
### events(): `Vec<FrameSystemEventRecord>`
- **interface**: `api.query.system.events`
- **summary**:    Events deposited for the current block. 

   NOTE: This storage item is explicitly unbounded since it is never intended to be read  from within the runtime. 
 
### eventTopics(`H256`): `Vec<(u32,u32)>`
- **interface**: `api.query.system.eventTopics`
- **summary**:    Mapping between a topic (represented by T::Hash) and a vector of indexes  of events in the `<Events<T>>` list. 

   All topic vectors have deterministic storage locations depending on the topic. This  allows light-clients to leverage the changes trie storage tracking mechanism and  in case of changes fetch the list of events of interest. 

   The value has the type `(T::BlockNumber, EventIndex)` because if we used only just  the `EventIndex` then in case if the topic has the same contents on the next block  no notification will be triggered thus the event might be lost. 
 
### executionPhase(): `Option<FrameSystemPhase>`
- **interface**: `api.query.system.executionPhase`
- **summary**:    The execution phase of the block. 
 
### extrinsicCount(): `Option<u32>`
- **interface**: `api.query.system.extrinsicCount`
- **summary**:    Total extrinsics count for the current block. 
 
### extrinsicData(`u32`): `Bytes`
- **interface**: `api.query.system.extrinsicData`
- **summary**:    Extrinsics data for the current block (maps an extrinsic's index to its data). 
 
### lastRuntimeUpgrade(): `Option<FrameSystemLastRuntimeUpgradeInfo>`
- **interface**: `api.query.system.lastRuntimeUpgrade`
- **summary**:    Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened. 
 
### number(): `u32`
- **interface**: `api.query.system.number`
- **summary**:    The current block number being processed. Set by `execute_block`. 
 
### parentHash(): `H256`
- **interface**: `api.query.system.parentHash`
- **summary**:    Hash of the previous block. 
 
### upgradedToTripleRefCount(): `bool`
- **interface**: `api.query.system.upgradedToTripleRefCount`
- **summary**:    True if we have upgraded so that AccountInfo contains three types of `RefCount`. False  (default) if not. 
 
### upgradedToU32RefCount(): `bool`
- **interface**: `api.query.system.upgradedToU32RefCount`
- **summary**:    True if we have upgraded so that `type RefCount` is `u32`. False (default) if not. 

___


## technicalCommittee
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.technicalCommittee.members`
- **summary**:    The current members of the collective. This is stored sorted (just by value). 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.technicalCommittee.prime`
- **summary**:    The prime member that helps determine the default vote behavior in case of absentations. 
 
### proposalCount(): `u32`
- **interface**: `api.query.technicalCommittee.proposalCount`
- **summary**:    Proposals so far. 
 
### proposalOf(`H256`): `Option<Call>`
- **interface**: `api.query.technicalCommittee.proposalOf`
- **summary**:    Actual proposal for a given hash, if it's current. 
 
### proposals(): `Vec<H256>`
- **interface**: `api.query.technicalCommittee.proposals`
- **summary**:    The hashes of the active proposals. 
 
### voting(`H256`): `Option<PalletCollectiveVotes>`
- **interface**: `api.query.technicalCommittee.voting`
- **summary**:    Votes on a given proposal, if it is ongoing. 

___


## technicalMembership
 
### members(): `Vec<AccountId32>`
- **interface**: `api.query.technicalMembership.members`
- **summary**:    The current membership, stored as an ordered Vec. 
 
### prime(): `Option<AccountId32>`
- **interface**: `api.query.technicalMembership.prime`
- **summary**:    The current prime member, if one exists. 

___


## timestamp
 
### didUpdate(): `bool`
- **interface**: `api.query.timestamp.didUpdate`
- **summary**:    Did the timestamp get updated in this block? 
 
### now(): `u64`
- **interface**: `api.query.timestamp.now`
- **summary**:    Current time for the current block. 

___


## tips
 
### reasons(`H256`): `Option<Bytes>`
- **interface**: `api.query.tips.reasons`
- **summary**:    Simple preimage lookup from the reason's hash to the original data. Again, has an  insecure enumerable hash since the key is guaranteed to be the result of a secure hash. 
 
### tips(`H256`): `Option<PalletTipsOpenTip>`
- **interface**: `api.query.tips.tips`
- **summary**:    TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.  This has the insecure enumerable hash function since the key itself is already  guaranteed to be a secure hash. 

___


## transactionPayment
 
### nextFeeMultiplier(): `u128`
- **interface**: `api.query.transactionPayment.nextFeeMultiplier`
 
### storageVersion(): `PalletTransactionPaymentReleases`
- **interface**: `api.query.transactionPayment.storageVersion`

___


## treasury
 
### approvals(): `Vec<u32>`
- **interface**: `api.query.treasury.approvals`
- **summary**:    Proposal indices that have been approved but not yet awarded. 
 
### proposalCount(): `u32`
- **interface**: `api.query.treasury.proposalCount`
- **summary**:    Number of proposals that have been made. 
 
### proposals(`u32`): `Option<PalletTreasuryProposal>`
- **interface**: `api.query.treasury.proposals`
- **summary**:    Proposals that have been made. 

___


## uniques
 
### account(`AccountId32, u32, u32`): `Option<Null>`
- **interface**: `api.query.uniques.account`
- **summary**:    The assets held by any given account; set out this way so that assets owned by a single  account can be enumerated. 
 
### asset(`u32, u32`): `Option<PalletUniquesInstanceDetails>`
- **interface**: `api.query.uniques.asset`
- **summary**:    The assets in existence and their ownership details. 
 
### attribute(`u32, Option<u32>, Bytes`): `Option<(Bytes,u128)>`
- **interface**: `api.query.uniques.attribute`
- **summary**:    Metadata of an asset class. 
 
### class(`u32`): `Option<PalletUniquesClassDetails>`
- **interface**: `api.query.uniques.class`
- **summary**:    Details of an asset class. 
 
### classMetadataOf(`u32`): `Option<PalletUniquesClassMetadata>`
- **interface**: `api.query.uniques.classMetadataOf`
- **summary**:    Metadata of an asset class. 
 
### instanceMetadataOf(`u32, u32`): `Option<PalletUniquesInstanceMetadata>`
- **interface**: `api.query.uniques.instanceMetadataOf`
- **summary**:    Metadata of an asset instance. 

___


## vesting
 
### storageVersion(): `PalletVestingReleases`
- **interface**: `api.query.vesting.storageVersion`
- **summary**:    Storage version of the pallet. 

   New networks start with latest version, as determined by the genesis build. 
 
### vesting(`AccountId32`): `Option<Vec<PalletVestingVestingInfo>>`
- **interface**: `api.query.vesting.vesting`
- **summary**:    Information regarding the vesting of a given account. 

___


## xXBetanetRewards
 
### accounts(`AccountId32`): `XxBetanetRewardsUserInfo`
- **interface**: `api.query.xXBetanetRewards.accounts`
- **summary**:    Store user info 
 
### approved(): `bool`
- **interface**: `api.query.xXBetanetRewards.approved`
- **summary**:    Store if the rewards program is approved 

___


## xXCmix
 
### adminPermission(): `u32`
- **interface**: `api.query.xXCmix.adminPermission`
- **summary**:    Highest block number that AdminOrigin is allowed to change cmix hashes 
 
### cmixAddressSpace(): `u8`
- **interface**: `api.query.xXCmix.cmixAddressSpace`
- **summary**:    Cmix user ephemeral reception IDs address space size in bits 
 
### cmixHashes(): `XxCmixCmixSoftwareHashes`
- **interface**: `api.query.xXCmix.cmixHashes`
- **summary**:    Cmix software hashes 
 
### cmixVariables(): `XxCmixCmixVariables`
- **interface**: `api.query.xXCmix.cmixVariables`
- **summary**:    Current cmix variables 
 
### nextCmixVariables(): `Option<XxCmixCmixVariables>`
- **interface**: `api.query.xXCmix.nextCmixVariables`
- **summary**:    Next cmix variables 
 
### schedulingAccount(): `AccountId32`
- **interface**: `api.query.xXCmix.schedulingAccount`
- **summary**:    Scheduling server account 

___


## xXCustody
 
### custodians(`AccountId32`): `Null`
- **interface**: `api.query.xXCustody.custodians`
- **summary**:    Keep track of custodians 
 
### custodyAccounts(`AccountId32`): `Null`
- **interface**: `api.query.xXCustody.custodyAccounts`
- **summary**:    Keep track of custody accounts 
 
### teamAccounts(`AccountId32`): `XxTeamCustodyCustodyCustodyInfo`
- **interface**: `api.query.xXCustody.teamAccounts`
- **summary**:    Keep track of team members'accounts custody info 
 
### totalCustody(): `u128`
- **interface**: `api.query.xXCustody.totalCustody`
- **summary**:    Total amount under custody 

___


## xXEconomics
 
### idealLiquidityStake(): `u128`
- **interface**: `api.query.xXEconomics.idealLiquidityStake`
- **summary**:    Ideal liquidity rewards staked amount 
 
### inflationParams(): `XxEconomicsInflationInflationFixedParams`
- **interface**: `api.query.xXEconomics.inflationParams`
- **summary**:    Inflation fixed parameters: minimum inflation, ideal stake and curve falloff 
 
### interestPoints(): `Vec<XxEconomicsInflationIdealInterestPoint>`
- **interface**: `api.query.xXEconomics.interestPoints`
- **summary**:    List of ideal interest points, defined as a tuple of block number and idea interest 
 
### liquidityRewards(): `u128`
- **interface**: `api.query.xXEconomics.liquidityRewards`
- **summary**:    Liquidity rewards balance 

___


## xXPublic
 
### saleManager(): `AccountId32`
- **interface**: `api.query.xXPublic.saleManager`
- **summary**:    Sale Manager account 
 
### testnetManager(): `AccountId32`
- **interface**: `api.query.xXPublic.testnetManager`
- **summary**:    Testnet Manager account 
