---
title: Errors
keywords: [xxchain, blockchain, chain, errors, xx network]
---

This page lists the errors that can be encountered in the different modules. 

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

- **[proxy](#proxy)**

- **[recovery](#recovery)**

- **[scheduler](#scheduler)**

- **[session](#session)**

- **[staking](#staking)**

- **[system](#system)**

- **[technicalCommittee](#technicalcommittee)**

- **[technicalMembership](#technicalmembership)**

- **[tips](#tips)**

- **[treasury](#treasury)**

- **[uniques](#uniques)**

- **[utility](#utility)**

- **[vesting](#vesting)**

- **[xXBetanetRewards](#xxbetanetrewards)**

- **[xXCmix](#xxcmix)**

- **[xXCustody](#xxcustody)**


___


## assets
 
### BadMetadata
- **interface**: `api.errors.assets.BadMetadata.is`
- **summary**:    Invalid metadata given. 
 
### BadWitness
- **interface**: `api.errors.assets.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### BalanceLow
- **interface**: `api.errors.assets.BalanceLow.is`
- **summary**:    Account balance must be greater than or equal to the transfer amount. 
 
### BalanceZero
- **interface**: `api.errors.assets.BalanceZero.is`
- **summary**:    Balance should be non-zero. 
 
### Frozen
- **interface**: `api.errors.assets.Frozen.is`
- **summary**:    The origin account is frozen. 
 
### InUse
- **interface**: `api.errors.assets.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### MinBalanceZero
- **interface**: `api.errors.assets.MinBalanceZero.is`
- **summary**:    Minimum balance should be non-zero. 
 
### NoPermission
- **interface**: `api.errors.assets.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### NoProvider
- **interface**: `api.errors.assets.NoProvider.is`
- **summary**:    No provider reference exists to allow a non-zero balance of a non-self-sufficient  asset. 
 
### Unapproved
- **interface**: `api.errors.assets.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### Unknown
- **interface**: `api.errors.assets.Unknown.is`
- **summary**:    The given asset ID is unknown. 
 
### WouldDie
- **interface**: `api.errors.assets.WouldDie.is`
- **summary**:    The source account would not survive the transfer and it needs to stay alive. 

___


## authorship
 
### GenesisUncle
- **interface**: `api.errors.authorship.GenesisUncle.is`
- **summary**:    The uncle is genesis. 
 
### InvalidUncleParent
- **interface**: `api.errors.authorship.InvalidUncleParent.is`
- **summary**:    The uncle parent not in the chain. 
 
### OldUncle
- **interface**: `api.errors.authorship.OldUncle.is`
- **summary**:    The uncle isn't recent enough to be included. 
 
### TooHighUncle
- **interface**: `api.errors.authorship.TooHighUncle.is`
- **summary**:    The uncle is too high in chain. 
 
### TooManyUncles
- **interface**: `api.errors.authorship.TooManyUncles.is`
- **summary**:    Too many uncles. 
 
### UncleAlreadyIncluded
- **interface**: `api.errors.authorship.UncleAlreadyIncluded.is`
- **summary**:    The uncle is already included. 
 
### UnclesAlreadySet
- **interface**: `api.errors.authorship.UnclesAlreadySet.is`
- **summary**:    Uncles already set in the block. 

___


## babe
 
### DuplicateOffenceReport
- **interface**: `api.errors.babe.DuplicateOffenceReport.is`
- **summary**:    A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.babe.InvalidEquivocationProof.is`
- **summary**:    An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.babe.InvalidKeyOwnershipProof.is`
- **summary**:    A key ownership proof provided as part of an equivocation report is invalid. 

___


## balances
 
### DeadAccount
- **interface**: `api.errors.balances.DeadAccount.is`
- **summary**:    Beneficiary account must pre-exist 
 
### ExistentialDeposit
- **interface**: `api.errors.balances.ExistentialDeposit.is`
- **summary**:    Value too low to create account due to existential deposit 
 
### ExistingVestingSchedule
- **interface**: `api.errors.balances.ExistingVestingSchedule.is`
- **summary**:    A vesting schedule already exists for this account 
 
### InsufficientBalance
- **interface**: `api.errors.balances.InsufficientBalance.is`
- **summary**:    Balance too low to send value 
 
### KeepAlive
- **interface**: `api.errors.balances.KeepAlive.is`
- **summary**:    Transfer/payment would kill account 
 
### LiquidityRestrictions
- **interface**: `api.errors.balances.LiquidityRestrictions.is`
- **summary**:    Account liquidity restrictions prevent withdrawal 
 
### TooManyReserves
- **interface**: `api.errors.balances.TooManyReserves.is`
- **summary**:    Number of named reserves exceed MaxReserves 
 
### VestingBalance
- **interface**: `api.errors.balances.VestingBalance.is`
- **summary**:    Vesting balance too high to send value 

___


## bounties
 
### InsufficientProposersBalance
- **interface**: `api.errors.bounties.InsufficientProposersBalance.is`
- **summary**:    Proposer's balance is too low. 
 
### InvalidFee
- **interface**: `api.errors.bounties.InvalidFee.is`
- **summary**:    Invalid bounty fee. 
 
### InvalidIndex
- **interface**: `api.errors.bounties.InvalidIndex.is`
- **summary**:    No proposal or bounty at that index. 
 
### InvalidValue
- **interface**: `api.errors.bounties.InvalidValue.is`
- **summary**:    Invalid bounty value. 
 
### PendingPayout
- **interface**: `api.errors.bounties.PendingPayout.is`
- **summary**:    A bounty payout is pending.  To cancel the bounty, you must unassign and slash the curator. 
 
### Premature
- **interface**: `api.errors.bounties.Premature.is`
- **summary**:    The bounties cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.bounties.ReasonTooBig.is`
- **summary**:    The reason given is just too big. 
 
### RequireCurator
- **interface**: `api.errors.bounties.RequireCurator.is`
- **summary**:    Require bounty curator. 
 
### UnexpectedStatus
- **interface**: `api.errors.bounties.UnexpectedStatus.is`
- **summary**:    The bounty status is unexpected. 

___


## chainBridge
 
### ChainAlreadyWhitelisted
- **interface**: `api.errors.chainBridge.ChainAlreadyWhitelisted.is`
- **summary**:    Chain has already been enabled 
 
### ChainNotWhitelisted
- **interface**: `api.errors.chainBridge.ChainNotWhitelisted.is`
- **summary**:    Interactions with this chain is not permitted 
 
### InvalidChainId
- **interface**: `api.errors.chainBridge.InvalidChainId.is`
- **summary**:    Provided chain Id is not valid 
 
### InvalidThreshold
- **interface**: `api.errors.chainBridge.InvalidThreshold.is`
- **summary**:    Relayer threshold cannot be 0 
 
### MustBeRelayer
- **interface**: `api.errors.chainBridge.MustBeRelayer.is`
- **summary**:    Protected operation, must be performed by relayer 
 
### ProposalAlreadyComplete
- **interface**: `api.errors.chainBridge.ProposalAlreadyComplete.is`
- **summary**:    Proposal has either failed or succeeded 
 
### ProposalAlreadyExists
- **interface**: `api.errors.chainBridge.ProposalAlreadyExists.is`
- **summary**:    A proposal with these parameters has already been submitted 
 
### ProposalDoesNotExist
- **interface**: `api.errors.chainBridge.ProposalDoesNotExist.is`
- **summary**:    No proposal with the ID was found 
 
### ProposalExpired
- **interface**: `api.errors.chainBridge.ProposalExpired.is`
- **summary**:    Lifetime of proposal has been exceeded 
 
### ProposalNotComplete
- **interface**: `api.errors.chainBridge.ProposalNotComplete.is`
- **summary**:    Cannot complete proposal, needs more votes 
 
### RelayerAlreadyExists
- **interface**: `api.errors.chainBridge.RelayerAlreadyExists.is`
- **summary**:    Relayer already in set 
 
### RelayerAlreadyVoted
- **interface**: `api.errors.chainBridge.RelayerAlreadyVoted.is`
- **summary**:    Relayer has already submitted some vote for this proposal 
 
### RelayerInvalid
- **interface**: `api.errors.chainBridge.RelayerInvalid.is`
- **summary**:    Provided accountId is not a relayer 
 
### ResourceDoesNotExist
- **interface**: `api.errors.chainBridge.ResourceDoesNotExist.is`
- **summary**:    Resource ID provided isn't mapped to anything 
 
### ThresholdNotSet
- **interface**: `api.errors.chainBridge.ThresholdNotSet.is`
- **summary**:    Relayer threshold not set 

___


## claims
 
### InvalidEthereumSignature
- **interface**: `api.errors.claims.InvalidEthereumSignature.is`
- **summary**:    Invalid Ethereum signature. 
 
### InvalidStatement
- **interface**: `api.errors.claims.InvalidStatement.is`
- **summary**:    A needed statement was not included. 
 
### PotUnderflow
- **interface**: `api.errors.claims.PotUnderflow.is`
- **summary**:    There's not enough in the pot to pay out some unvested amount. Generally implies a logic  error. 
 
### SenderHasNoClaim
- **interface**: `api.errors.claims.SenderHasNoClaim.is`
- **summary**:    Account ID sending tx has no claim. 
 
### SignerHasNoClaim
- **interface**: `api.errors.claims.SignerHasNoClaim.is`
- **summary**:    Ethereum address has no claim. 
 
### VestedBalanceExists
- **interface**: `api.errors.claims.VestedBalanceExists.is`
- **summary**:    The account already has a vested balance. 

___


## council
 
### AlreadyInitialized
- **interface**: `api.errors.council.AlreadyInitialized.is`
- **summary**:    Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.council.DuplicateProposal.is`
- **summary**:    Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.council.DuplicateVote.is`
- **summary**:    Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.council.NotMember.is`
- **summary**:    Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.council.ProposalMissing.is`
- **summary**:    Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.council.TooEarly.is`
- **summary**:    The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.council.TooManyProposals.is`
- **summary**:    There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.council.WrongIndex.is`
- **summary**:    Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.council.WrongProposalLength.is`
- **summary**:    The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.council.WrongProposalWeight.is`
- **summary**:    The given weight bound for the proposal was too low. 

___


## democracy
 
### AlreadyCanceled
- **interface**: `api.errors.democracy.AlreadyCanceled.is`
- **summary**:    Cannot cancel the same proposal twice 
 
### AlreadyDelegating
- **interface**: `api.errors.democracy.AlreadyDelegating.is`
- **summary**:    The account is already delegating. 
 
### AlreadyVetoed
- **interface**: `api.errors.democracy.AlreadyVetoed.is`
- **summary**:    Identity may not veto a proposal twice 
 
### DuplicatePreimage
- **interface**: `api.errors.democracy.DuplicatePreimage.is`
- **summary**:    Preimage already noted 
 
### DuplicateProposal
- **interface**: `api.errors.democracy.DuplicateProposal.is`
- **summary**:    Proposal already made 
 
### Imminent
- **interface**: `api.errors.democracy.Imminent.is`
- **summary**:    Imminent 
 
### InstantNotAllowed
- **interface**: `api.errors.democracy.InstantNotAllowed.is`
- **summary**:    The instant referendum origin is currently disallowed. 
 
### InsufficientFunds
- **interface**: `api.errors.democracy.InsufficientFunds.is`
- **summary**:    Too high a balance was provided that the account cannot afford. 
 
### InvalidHash
- **interface**: `api.errors.democracy.InvalidHash.is`
- **summary**:    Invalid hash 
 
### MaxVotesReached
- **interface**: `api.errors.democracy.MaxVotesReached.is`
- **summary**:    Maximum number of votes reached. 
 
### NoneWaiting
- **interface**: `api.errors.democracy.NoneWaiting.is`
- **summary**:    No proposals waiting 
 
### Nonsense
- **interface**: `api.errors.democracy.Nonsense.is`
- **summary**:    Delegation to oneself makes no sense. 
 
### NoPermission
- **interface**: `api.errors.democracy.NoPermission.is`
- **summary**:    The actor has no permission to conduct the action. 
 
### NoProposal
- **interface**: `api.errors.democracy.NoProposal.is`
- **summary**:    No external proposal 
 
### NotDelegating
- **interface**: `api.errors.democracy.NotDelegating.is`
- **summary**:    The account is not currently delegating. 
 
### NotImminent
- **interface**: `api.errors.democracy.NotImminent.is`
- **summary**:    Not imminent 
 
### NotSimpleMajority
- **interface**: `api.errors.democracy.NotSimpleMajority.is`
- **summary**:    Next external proposal not simple majority 
 
### NotVoter
- **interface**: `api.errors.democracy.NotVoter.is`
- **summary**:    The given account did not vote on the referendum. 
 
### PreimageInvalid
- **interface**: `api.errors.democracy.PreimageInvalid.is`
- **summary**:    Invalid preimage 
 
### PreimageMissing
- **interface**: `api.errors.democracy.PreimageMissing.is`
- **summary**:    Preimage not found 
 
### ProposalBlacklisted
- **interface**: `api.errors.democracy.ProposalBlacklisted.is`
- **summary**:    Proposal still blacklisted 
 
### ProposalMissing
- **interface**: `api.errors.democracy.ProposalMissing.is`
- **summary**:    Proposal does not exist 
 
### ReferendumInvalid
- **interface**: `api.errors.democracy.ReferendumInvalid.is`
- **summary**:    Vote given for invalid referendum 
 
### TooEarly
- **interface**: `api.errors.democracy.TooEarly.is`
- **summary**:    Too early 
 
### TooManyProposals
- **interface**: `api.errors.democracy.TooManyProposals.is`
- **summary**:    Maximum number of proposals reached. 
 
### ValueLow
- **interface**: `api.errors.democracy.ValueLow.is`
- **summary**:    Value too low 
 
### VotesExist
- **interface**: `api.errors.democracy.VotesExist.is`
- **summary**:    The account currently has votes attached to it and the operation cannot succeed until  these are removed, either through `unvote` or `reap_vote`. 
 
### WrongUpperBound
- **interface**: `api.errors.democracy.WrongUpperBound.is`
- **summary**:    Invalid upper bound. 

___


## electionProviderMultiPhase
 
### CallNotAllowed
- **interface**: `api.errors.electionProviderMultiPhase.CallNotAllowed.is`
- **summary**:    The call is not allowed at this point. 
 
### InvalidSubmissionIndex
- **interface**: `api.errors.electionProviderMultiPhase.InvalidSubmissionIndex.is`
- **summary**:    `Self::insert_submission` returned an invalid index. 
 
### MissingSnapshotMetadata
- **interface**: `api.errors.electionProviderMultiPhase.MissingSnapshotMetadata.is`
- **summary**:    Snapshot metadata should exist but didn't. 
 
### OcwCallWrongEra
- **interface**: `api.errors.electionProviderMultiPhase.OcwCallWrongEra.is`
- **summary**:    OCW submitted solution for wrong round 
 
### PreDispatchEarlySubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchEarlySubmission.is`
- **summary**:    Submission was too early. 
 
### PreDispatchWeakSubmission
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWeakSubmission.is`
- **summary**:    Submission was too weak, score-wise. 
 
### PreDispatchWrongWinnerCount
- **interface**: `api.errors.electionProviderMultiPhase.PreDispatchWrongWinnerCount.is`
- **summary**:    Wrong number of winners presented. 
 
### SignedCannotPayDeposit
- **interface**: `api.errors.electionProviderMultiPhase.SignedCannotPayDeposit.is`
- **summary**:    The origin failed to pay the deposit. 
 
### SignedInvalidWitness
- **interface**: `api.errors.electionProviderMultiPhase.SignedInvalidWitness.is`
- **summary**:    Witness data to dispatchable is invalid. 
 
### SignedQueueFull
- **interface**: `api.errors.electionProviderMultiPhase.SignedQueueFull.is`
- **summary**:    The queue was full, and the solution was not better than any of the existing ones. 
 
### SignedTooMuchWeight
- **interface**: `api.errors.electionProviderMultiPhase.SignedTooMuchWeight.is`
- **summary**:    The signed submission consumes too much weight 

___


## elections
 
### DuplicatedCandidate
- **interface**: `api.errors.elections.DuplicatedCandidate.is`
- **summary**:    Duplicated candidate submission. 
 
### InsufficientCandidateFunds
- **interface**: `api.errors.elections.InsufficientCandidateFunds.is`
- **summary**:    Candidate does not have enough funds. 
 
### InvalidRenouncing
- **interface**: `api.errors.elections.InvalidRenouncing.is`
- **summary**:    The renouncing origin presented a wrong `Renouncing` parameter. 
 
### InvalidReplacement
- **interface**: `api.errors.elections.InvalidReplacement.is`
- **summary**:    Prediction regarding replacement after member removal is wrong. 
 
### InvalidVoteCount
- **interface**: `api.errors.elections.InvalidVoteCount.is`
- **summary**:    The provided count of number of votes is incorrect. 
 
### InvalidWitnessData
- **interface**: `api.errors.elections.InvalidWitnessData.is`
- **summary**:    The provided count of number of candidates is incorrect. 
 
### LowBalance
- **interface**: `api.errors.elections.LowBalance.is`
- **summary**:    Cannot vote with stake less than minimum balance. 
 
### MaximumVotesExceeded
- **interface**: `api.errors.elections.MaximumVotesExceeded.is`
- **summary**:    Cannot vote more than maximum allowed. 
 
### MemberSubmit
- **interface**: `api.errors.elections.MemberSubmit.is`
- **summary**:    Member cannot re-submit candidacy. 
 
### MustBeVoter
- **interface**: `api.errors.elections.MustBeVoter.is`
- **summary**:    Must be a voter. 
 
### NotMember
- **interface**: `api.errors.elections.NotMember.is`
- **summary**:    Not a member. 
 
### NoVotes
- **interface**: `api.errors.elections.NoVotes.is`
- **summary**:    Must vote for at least one candidate. 
 
### ReportSelf
- **interface**: `api.errors.elections.ReportSelf.is`
- **summary**:    Cannot report self. 
 
### RunnerUpSubmit
- **interface**: `api.errors.elections.RunnerUpSubmit.is`
- **summary**:    Runner cannot re-submit candidacy. 
 
### TooManyVotes
- **interface**: `api.errors.elections.TooManyVotes.is`
- **summary**:    Cannot vote more than candidates. 
 
### UnableToPayBond
- **interface**: `api.errors.elections.UnableToPayBond.is`
- **summary**:    Voter can not pay voting bond. 
 
### UnableToVote
- **interface**: `api.errors.elections.UnableToVote.is`
- **summary**:    Cannot vote when no candidates or members exist. 

___


## grandpa
 
### ChangePending
- **interface**: `api.errors.grandpa.ChangePending.is`
- **summary**:    Attempt to signal GRANDPA change with one already pending. 
 
### DuplicateOffenceReport
- **interface**: `api.errors.grandpa.DuplicateOffenceReport.is`
- **summary**:    A given equivocation report is valid but already previously reported. 
 
### InvalidEquivocationProof
- **interface**: `api.errors.grandpa.InvalidEquivocationProof.is`
- **summary**:    An equivocation proof provided as part of an equivocation report is invalid. 
 
### InvalidKeyOwnershipProof
- **interface**: `api.errors.grandpa.InvalidKeyOwnershipProof.is`
- **summary**:    A key ownership proof provided as part of an equivocation report is invalid. 
 
### PauseFailed
- **interface**: `api.errors.grandpa.PauseFailed.is`
- **summary**:    Attempt to signal GRANDPA pause when the authority set isn't live  (either paused or already pending pause). 
 
### ResumeFailed
- **interface**: `api.errors.grandpa.ResumeFailed.is`
- **summary**:    Attempt to signal GRANDPA resume when the authority set isn't paused  (either live or already pending resume). 
 
### TooSoon
- **interface**: `api.errors.grandpa.TooSoon.is`
- **summary**:    Cannot signal forced change so soon after last. 

___


## identity
 
### AlreadyClaimed
- **interface**: `api.errors.identity.AlreadyClaimed.is`
- **summary**:    Account ID is already named. 
 
### EmptyIndex
- **interface**: `api.errors.identity.EmptyIndex.is`
- **summary**:    Empty index. 
 
### FeeChanged
- **interface**: `api.errors.identity.FeeChanged.is`
- **summary**:    Fee is changed. 
 
### InvalidIndex
- **interface**: `api.errors.identity.InvalidIndex.is`
- **summary**:    The index is invalid. 
 
### InvalidJudgement
- **interface**: `api.errors.identity.InvalidJudgement.is`
- **summary**:    Invalid judgement. 
 
### InvalidTarget
- **interface**: `api.errors.identity.InvalidTarget.is`
- **summary**:    The target is invalid. 
 
### JudgementGiven
- **interface**: `api.errors.identity.JudgementGiven.is`
- **summary**:    Judgement given. 
 
### NoIdentity
- **interface**: `api.errors.identity.NoIdentity.is`
- **summary**:    No identity found. 
 
### NotFound
- **interface**: `api.errors.identity.NotFound.is`
- **summary**:    Account isn't found. 
 
### NotNamed
- **interface**: `api.errors.identity.NotNamed.is`
- **summary**:    Account isn't named. 
 
### NotOwned
- **interface**: `api.errors.identity.NotOwned.is`
- **summary**:    Sub-account isn't owned by sender. 
 
### NotSub
- **interface**: `api.errors.identity.NotSub.is`
- **summary**:    Sender is not a sub-account. 
 
### StickyJudgement
- **interface**: `api.errors.identity.StickyJudgement.is`
- **summary**:    Sticky judgement. 
 
### TooManyFields
- **interface**: `api.errors.identity.TooManyFields.is`
- **summary**:    Too many additional fields. 
 
### TooManyRegistrars
- **interface**: `api.errors.identity.TooManyRegistrars.is`
- **summary**:    Maximum amount of registrars reached. Cannot add any more. 
 
### TooManySubAccounts
- **interface**: `api.errors.identity.TooManySubAccounts.is`
- **summary**:    Too many subs-accounts. 

___


## imOnline
 
### DuplicatedHeartbeat
- **interface**: `api.errors.imOnline.DuplicatedHeartbeat.is`
- **summary**:    Duplicated heartbeat. 
 
### InvalidKey
- **interface**: `api.errors.imOnline.InvalidKey.is`
- **summary**:    Non existent public key. 

___


## multisig
 
### AlreadyApproved
- **interface**: `api.errors.multisig.AlreadyApproved.is`
- **summary**:    Call is already approved by this signatory. 
 
### AlreadyStored
- **interface**: `api.errors.multisig.AlreadyStored.is`
- **summary**:    The data to be stored is already stored. 
 
### MaxWeightTooLow
- **interface**: `api.errors.multisig.MaxWeightTooLow.is`
- **summary**:    The maximum weight information provided was too low. 
 
### MinimumThreshold
- **interface**: `api.errors.multisig.MinimumThreshold.is`
- **summary**:    Threshold must be 2 or greater. 
 
### NoApprovalsNeeded
- **interface**: `api.errors.multisig.NoApprovalsNeeded.is`
- **summary**:    Call doesn't need any (more) approvals. 
 
### NotFound
- **interface**: `api.errors.multisig.NotFound.is`
- **summary**:    Multisig operation not found when attempting to cancel. 
 
### NoTimepoint
- **interface**: `api.errors.multisig.NoTimepoint.is`
- **summary**:    No timepoint was given, yet the multisig operation is already underway. 
 
### NotOwner
- **interface**: `api.errors.multisig.NotOwner.is`
- **summary**:    Only the account that originally created the multisig is able to cancel it. 
 
### SenderInSignatories
- **interface**: `api.errors.multisig.SenderInSignatories.is`
- **summary**:    The sender was contained in the other signatories; it shouldn't be. 
 
### SignatoriesOutOfOrder
- **interface**: `api.errors.multisig.SignatoriesOutOfOrder.is`
- **summary**:    The signatories were provided out of order; they should be ordered. 
 
### TooFewSignatories
- **interface**: `api.errors.multisig.TooFewSignatories.is`
- **summary**:    There are too few signatories in the list. 
 
### TooManySignatories
- **interface**: `api.errors.multisig.TooManySignatories.is`
- **summary**:    There are too many signatories in the list. 
 
### UnexpectedTimepoint
- **interface**: `api.errors.multisig.UnexpectedTimepoint.is`
- **summary**:    A timepoint was given, yet no multisig operation is underway. 
 
### WrongTimepoint
- **interface**: `api.errors.multisig.WrongTimepoint.is`
- **summary**:    A different timepoint was given to the multisig operation that is underway. 

___


## proxy
 
### Duplicate
- **interface**: `api.errors.proxy.Duplicate.is`
- **summary**:    Account is already a proxy. 
 
### NoPermission
- **interface**: `api.errors.proxy.NoPermission.is`
- **summary**:    Call may not be made by proxy because it may escalate its privileges. 
 
### NoSelfProxy
- **interface**: `api.errors.proxy.NoSelfProxy.is`
- **summary**:    Cannot add self as proxy. 
 
### NotFound
- **interface**: `api.errors.proxy.NotFound.is`
- **summary**:    Proxy registration not found. 
 
### NotProxy
- **interface**: `api.errors.proxy.NotProxy.is`
- **summary**:    Sender is not a proxy of the account to be proxied. 
 
### TooMany
- **interface**: `api.errors.proxy.TooMany.is`
- **summary**:    There are too many proxies registered or too many announcements pending. 
 
### Unannounced
- **interface**: `api.errors.proxy.Unannounced.is`
- **summary**:    Announcement, if made at all, was made too recently. 
 
### Unproxyable
- **interface**: `api.errors.proxy.Unproxyable.is`
- **summary**:    A call which is incompatible with the proxy type's filter was attempted. 

___


## recovery
 
### AlreadyProxy
- **interface**: `api.errors.recovery.AlreadyProxy.is`
- **summary**:    This account is already set up for recovery 
 
### AlreadyRecoverable
- **interface**: `api.errors.recovery.AlreadyRecoverable.is`
- **summary**:    This account is already set up for recovery 
 
### AlreadyStarted
- **interface**: `api.errors.recovery.AlreadyStarted.is`
- **summary**:    A recovery process has already started for this account 
 
### AlreadyVouched
- **interface**: `api.errors.recovery.AlreadyVouched.is`
- **summary**:    This user has already vouched for this recovery 
 
### BadState
- **interface**: `api.errors.recovery.BadState.is`
- **summary**:    Some internal state is broken. 
 
### DelayPeriod
- **interface**: `api.errors.recovery.DelayPeriod.is`
- **summary**:    The friend must wait until the delay period to vouch for this recovery 
 
### MaxFriends
- **interface**: `api.errors.recovery.MaxFriends.is`
- **summary**:    Friends list must be less than max friends 
 
### NotAllowed
- **interface**: `api.errors.recovery.NotAllowed.is`
- **summary**:    User is not allowed to make a call on behalf of this account 
 
### NotEnoughFriends
- **interface**: `api.errors.recovery.NotEnoughFriends.is`
- **summary**:    Friends list must be greater than zero and threshold 
 
### NotFriend
- **interface**: `api.errors.recovery.NotFriend.is`
- **summary**:    This account is not a friend who can vouch 
 
### NotRecoverable
- **interface**: `api.errors.recovery.NotRecoverable.is`
- **summary**:    This account is not set up for recovery 
 
### NotSorted
- **interface**: `api.errors.recovery.NotSorted.is`
- **summary**:    Friends list must be sorted and free of duplicates 
 
### NotStarted
- **interface**: `api.errors.recovery.NotStarted.is`
- **summary**:    A recovery process has not started for this rescuer 
 
### StillActive
- **interface**: `api.errors.recovery.StillActive.is`
- **summary**:    There are still active recovery attempts that need to be closed 
 
### Threshold
- **interface**: `api.errors.recovery.Threshold.is`
- **summary**:    The threshold for recovering this account has not been met 
 
### ZeroThreshold
- **interface**: `api.errors.recovery.ZeroThreshold.is`
- **summary**:    Threshold must be greater than zero 

___


## scheduler
 
### FailedToSchedule
- **interface**: `api.errors.scheduler.FailedToSchedule.is`
- **summary**:    Failed to schedule a call 
 
### NotFound
- **interface**: `api.errors.scheduler.NotFound.is`
- **summary**:    Cannot find the scheduled call. 
 
### RescheduleNoChange
- **interface**: `api.errors.scheduler.RescheduleNoChange.is`
- **summary**:    Reschedule failed because it does not change scheduled time. 
 
### TargetBlockNumberInPast
- **interface**: `api.errors.scheduler.TargetBlockNumberInPast.is`
- **summary**:    Given target block number is in the past. 

___


## session
 
### DuplicatedKey
- **interface**: `api.errors.session.DuplicatedKey.is`
- **summary**:    Registered duplicate key. 
 
### InvalidProof
- **interface**: `api.errors.session.InvalidProof.is`
- **summary**:    Invalid ownership proof. 
 
### NoAccount
- **interface**: `api.errors.session.NoAccount.is`
- **summary**:    Key setting account is not live, so it's impossible to associate keys. 
 
### NoAssociatedValidatorId
- **interface**: `api.errors.session.NoAssociatedValidatorId.is`
- **summary**:    No associated validator ID for account. 
 
### NoKeys
- **interface**: `api.errors.session.NoKeys.is`
- **summary**:    No keys are associated with this account. 

___


## staking
 
### AlreadyBonded
- **interface**: `api.errors.staking.AlreadyBonded.is`
- **summary**:    Stash is already bonded. 
 
### AlreadyClaimed
- **interface**: `api.errors.staking.AlreadyClaimed.is`
- **summary**:    Rewards for this era have already been claimed for this validator. 
 
### AlreadyPaired
- **interface**: `api.errors.staking.AlreadyPaired.is`
- **summary**:    Controller is already paired. 
 
### BadState
- **interface**: `api.errors.staking.BadState.is`
- **summary**:    Internal state has become somehow corrupted and the operation cannot continue. 
 
### BadTarget
- **interface**: `api.errors.staking.BadTarget.is`
- **summary**:    A nomination target was supplied that was blocked or otherwise not a validator. 
 
### CannotChillOther
- **interface**: `api.errors.staking.CannotChillOther.is`
- **summary**:    The user has enough bond and thus cannot be chilled forcefully by an external person. 
 
### DuplicateIndex
- **interface**: `api.errors.staking.DuplicateIndex.is`
- **summary**:    Duplicate index. 
 
### ElectionOngoing
- **interface**: `api.errors.staking.ElectionOngoing.is`
- **summary**:    Election ongoing, can't transfer CMIX ID 
 
### EmptyTargets
- **interface**: `api.errors.staking.EmptyTargets.is`
- **summary**:    Targets cannot be empty. 
 
### FundedTarget
- **interface**: `api.errors.staking.FundedTarget.is`
- **summary**:    Attempting to target a stash that still has funds. 
 
### IncorrectHistoryDepth
- **interface**: `api.errors.staking.IncorrectHistoryDepth.is`
- **summary**:    Incorrect previous history depth input provided. 
 
### IncorrectSlashingSpans
- **interface**: `api.errors.staking.IncorrectSlashingSpans.is`
- **summary**:    Incorrect number of slashing spans provided. 
 
### InsufficientBond
- **interface**: `api.errors.staking.InsufficientBond.is`
- **summary**:    Can not bond with value less than minimum required. 
 
### InvalidEraToReward
- **interface**: `api.errors.staking.InvalidEraToReward.is`
- **summary**:    Invalid era to reward. 
 
### InvalidNumberOfNominations
- **interface**: `api.errors.staking.InvalidNumberOfNominations.is`
- **summary**:    Invalid number of nominations. 
 
### InvalidSlashIndex
- **interface**: `api.errors.staking.InvalidSlashIndex.is`
- **summary**:    Slash record index out of bounds. 
 
### NoMoreChunks
- **interface**: `api.errors.staking.NoMoreChunks.is`
- **summary**:    Can not schedule more unlock chunks. 
 
### NotController
- **interface**: `api.errors.staking.NotController.is`
- **summary**:    Not a controller account. 
 
### NotSortedAndUnique
- **interface**: `api.errors.staking.NotSortedAndUnique.is`
- **summary**:    Items are not sorted and unique. 
 
### NotStash
- **interface**: `api.errors.staking.NotStash.is`
- **summary**:    Not a stash account. 
 
### NoUnlockChunk
- **interface**: `api.errors.staking.NoUnlockChunk.is`
- **summary**:    Can not rebond without unlocking chunks. 
 
### StashActiveValidator
- **interface**: `api.errors.staking.StashActiveValidator.is`
- **summary**:    Stash is active validator 
 
### StashAlreadyHasCmixId
- **interface**: `api.errors.staking.StashAlreadyHasCmixId.is`
- **summary**:    Stash account already has a CMIX ID 
 
### StashElectedValidator
- **interface**: `api.errors.staking.StashElectedValidator.is`
- **summary**:    Stash is elected validator for next era 
 
### StashNoCmixId
- **interface**: `api.errors.staking.StashNoCmixId.is`
- **summary**:    Stash account doesn't have a CMIX ID 
 
### StashValidating
- **interface**: `api.errors.staking.StashValidating.is`
- **summary**:    Stash is validating 
 
### TooManyNominators
- **interface**: `api.errors.staking.TooManyNominators.is`
- **summary**:    There are too many nominators in the system. Governance needs to adjust the staking  settings to keep things safe for the runtime. 
 
### TooManyTargets
- **interface**: `api.errors.staking.TooManyTargets.is`
- **summary**:    Too many nomination targets supplied. 
 
### TooManyValidators
- **interface**: `api.errors.staking.TooManyValidators.is`
- **summary**:    There are too many validators in the system. Governance needs to adjust the staking  settings to keep things safe for the runtime. 
 
### ValidatorCmixIdNotUnique
- **interface**: `api.errors.staking.ValidatorCmixIdNotUnique.is`
- **summary**:    CMIX ID already exists 
 
### ValidatorCommissionTooLow
- **interface**: `api.errors.staking.ValidatorCommissionTooLow.is`
- **summary**:    Validator commission is too low 
 
### ValidatorMustHaveCmixId
- **interface**: `api.errors.staking.ValidatorMustHaveCmixId.is`
- **summary**:    Validator must have a CMIX ID 

___


## system
 
### CallFiltered
- **interface**: `api.errors.system.CallFiltered.is`
- **summary**:    The origin filter prevent the call to be dispatched. 
 
### FailedToExtractRuntimeVersion
- **interface**: `api.errors.system.FailedToExtractRuntimeVersion.is`
- **summary**:    Failed to extract the runtime version from the new runtime. 

   Either calling `Core_version` or decoding `RuntimeVersion` failed. 
 
### InvalidSpecName
- **interface**: `api.errors.system.InvalidSpecName.is`
- **summary**:    The name of specification does not match between the current runtime  and the new runtime. 
 
### NonDefaultComposite
- **interface**: `api.errors.system.NonDefaultComposite.is`
- **summary**:    Suicide called when the account has non-default composite data. 
 
### NonZeroRefCount
- **interface**: `api.errors.system.NonZeroRefCount.is`
- **summary**:    There is a non-zero reference count preventing the account from being purged. 
 
### SpecVersionNeedsToIncrease
- **interface**: `api.errors.system.SpecVersionNeedsToIncrease.is`
- **summary**:    The specification version is not allowed to decrease between the current runtime  and the new runtime. 

___


## technicalCommittee
 
### AlreadyInitialized
- **interface**: `api.errors.technicalCommittee.AlreadyInitialized.is`
- **summary**:    Members are already initialized! 
 
### DuplicateProposal
- **interface**: `api.errors.technicalCommittee.DuplicateProposal.is`
- **summary**:    Duplicate proposals not allowed 
 
### DuplicateVote
- **interface**: `api.errors.technicalCommittee.DuplicateVote.is`
- **summary**:    Duplicate vote ignored 
 
### NotMember
- **interface**: `api.errors.technicalCommittee.NotMember.is`
- **summary**:    Account is not a member 
 
### ProposalMissing
- **interface**: `api.errors.technicalCommittee.ProposalMissing.is`
- **summary**:    Proposal must exist 
 
### TooEarly
- **interface**: `api.errors.technicalCommittee.TooEarly.is`
- **summary**:    The close call was made too early, before the end of the voting. 
 
### TooManyProposals
- **interface**: `api.errors.technicalCommittee.TooManyProposals.is`
- **summary**:    There can only be a maximum of `MaxProposals` active proposals. 
 
### WrongIndex
- **interface**: `api.errors.technicalCommittee.WrongIndex.is`
- **summary**:    Mismatched index 
 
### WrongProposalLength
- **interface**: `api.errors.technicalCommittee.WrongProposalLength.is`
- **summary**:    The given length bound for the proposal was too low. 
 
### WrongProposalWeight
- **interface**: `api.errors.technicalCommittee.WrongProposalWeight.is`
- **summary**:    The given weight bound for the proposal was too low. 

___


## technicalMembership
 
### AlreadyMember
- **interface**: `api.errors.technicalMembership.AlreadyMember.is`
- **summary**:    Already a member. 
 
### NotMember
- **interface**: `api.errors.technicalMembership.NotMember.is`
- **summary**:    Not a member. 

___


## tips
 
### AlreadyKnown
- **interface**: `api.errors.tips.AlreadyKnown.is`
- **summary**:    The tip was already found/started. 
 
### NotFinder
- **interface**: `api.errors.tips.NotFinder.is`
- **summary**:    The account attempting to retract the tip is not the finder of the tip. 
 
### Premature
- **interface**: `api.errors.tips.Premature.is`
- **summary**:    The tip cannot be claimed/closed because it's still in the countdown period. 
 
### ReasonTooBig
- **interface**: `api.errors.tips.ReasonTooBig.is`
- **summary**:    The reason given is just too big. 
 
### StillOpen
- **interface**: `api.errors.tips.StillOpen.is`
- **summary**:    The tip cannot be claimed/closed because there are not enough tippers yet. 
 
### UnknownTip
- **interface**: `api.errors.tips.UnknownTip.is`
- **summary**:    The tip hash is unknown. 

___


## treasury
 
### InsufficientProposersBalance
- **interface**: `api.errors.treasury.InsufficientProposersBalance.is`
- **summary**:    Proposer's balance is too low. 
 
### InvalidIndex
- **interface**: `api.errors.treasury.InvalidIndex.is`
- **summary**:    No proposal or bounty at that index. 
 
### TooManyApprovals
- **interface**: `api.errors.treasury.TooManyApprovals.is`
- **summary**:    Too many approvals in the queue. 

___


## uniques
 
### AlreadyExists
- **interface**: `api.errors.uniques.AlreadyExists.is`
- **summary**:    The asset instance ID has already been used for an asset. 
 
### BadWitness
- **interface**: `api.errors.uniques.BadWitness.is`
- **summary**:    Invalid witness data given. 
 
### Frozen
- **interface**: `api.errors.uniques.Frozen.is`
- **summary**:    The asset instance or class is frozen. 
 
### InUse
- **interface**: `api.errors.uniques.InUse.is`
- **summary**:    The asset ID is already taken. 
 
### NoDelegate
- **interface**: `api.errors.uniques.NoDelegate.is`
- **summary**:    There is no delegate approved. 
 
### NoPermission
- **interface**: `api.errors.uniques.NoPermission.is`
- **summary**:    The signing account has no permission to do the operation. 
 
### Unapproved
- **interface**: `api.errors.uniques.Unapproved.is`
- **summary**:    No approval exists that would allow the transfer. 
 
### Unknown
- **interface**: `api.errors.uniques.Unknown.is`
- **summary**:    The given asset ID is unknown. 
 
### WrongDelegate
- **interface**: `api.errors.uniques.WrongDelegate.is`
- **summary**:    The delegate turned out to be different to what was expected. 
 
### WrongOwner
- **interface**: `api.errors.uniques.WrongOwner.is`
- **summary**:    The owner turned out to be different to what was expected. 

___


## utility
 
### TooManyCalls
- **interface**: `api.errors.utility.TooManyCalls.is`
- **summary**:    Too many calls batched. 

___


## vesting
 
### AmountLow
- **interface**: `api.errors.vesting.AmountLow.is`
- **summary**:    Amount being transferred is too low to create a vesting schedule. 
 
### AtMaxVestingSchedules
- **interface**: `api.errors.vesting.AtMaxVestingSchedules.is`
- **summary**:    The account already has `MaxVestingSchedules` count of schedules and thus  cannot add another one. Consider merging existing schedules in order to add another. 
 
### InvalidScheduleParams
- **interface**: `api.errors.vesting.InvalidScheduleParams.is`
- **summary**:    Failed to create a new schedule because some parameter was invalid. 
 
### NotVesting
- **interface**: `api.errors.vesting.NotVesting.is`
- **summary**:    The account given is not vesting. 
 
### ScheduleIndexOutOfBounds
- **interface**: `api.errors.vesting.ScheduleIndexOutOfBounds.is`
- **summary**:    An index was out of bounds of the vesting schedules. 

___


## xXBetanetRewards
 
### EnactmentBlockHasPassed
- **interface**: `api.errors.xxBetanetRewards.EnactmentBlockHasPassed.is`
- **summary**:    Enactment block has passed 
 
### NoRewards
- **interface**: `api.errors.xxBetanetRewards.NoRewards.is`
- **summary**:    Account doesn't have rewards 

___


## xXCmix
 
### AdminPermissionExpired
- **interface**: `api.errors.xxCmix.AdminPermissionExpired.is`
- **summary**:    AdminOrigin is not allowed to modify cmix hashes 
 
### MustBeScheduling
- **interface**: `api.errors.xxCmix.MustBeScheduling.is`
- **summary**:    Must be scheduling server account to call this function 

___


## xXCustody
 
### CustodyPeriodEnded
- **interface**: `api.errors.xxCustody.CustodyPeriodEnded.is`
- **summary**:    Custody period ended, custodian can't call this function anymore 
 
### GovernanceCustodyActive
- **interface**: `api.errors.xxCustody.GovernanceCustodyActive.is`
- **summary**:    Governance custody ongoing, team member can't call this function yet 
 
### GovernanceCustodyPeriodEnded
- **interface**: `api.errors.xxCustody.GovernanceCustodyPeriodEnded.is`
- **summary**:    Governance custody period ended, custodian can't call this function anymore 
 
### InvalidCustodyAccount
- **interface**: `api.errors.xxCustody.InvalidCustodyAccount.is`
- **summary**:    Invalid custody account 
 
### InvalidTeamMember
- **interface**: `api.errors.xxCustody.InvalidTeamMember.is`
- **summary**:    Invalid team member account 
 
### MustBeCustodian
- **interface**: `api.errors.xxCustody.MustBeCustodian.is`
- **summary**:    Must be custodian to call this function 
 
### PayoutFailedInsufficientFunds
- **interface**: `api.errors.xxCustody.PayoutFailedInsufficientFunds.is`
- **summary**:    Payout failed due to insufficient custody + reserve funds 
 
### PayoutNotAvailable
- **interface**: `api.errors.xxCustody.PayoutNotAvailable.is`
- **summary**:    Payout not available yet 
 
### TeamMemberExists
- **interface**: `api.errors.xxCustody.TeamMemberExists.is`
- **summary**:    This team member account already exists 
