# Governance
The xx Network uses stake-based governance based upon the standard
governance within the Substrate Ecosystem.

The primary goal of governance is to allow the network to evolve over
time at the direction of the network's stakeholders. Fundamentally,
governance strives to balance the will of the coin holders with the
needs of a user-driven blockchain.

In general, there are three structures within the platform for decision
making:

1.  The Coin Holders
2.  The Council
3.  The Technical Committee

The general flow of the network is that the coin Holders elect the
Council, and the Council elects the Technical Committee. Thus, the coin
Holders are the root of all authority within the xx Network.

Coin Holders use their coins to nominate nodes, pass referenda, and
elect the Council. 

`Boxed values` are configurable and subject to change before release or by governance.

## Referenda

Referenda are changes to the network. Each referendum is a proposal to
alter anything from network parameters, code, or state all the way to
triggering a hard fork of the network.

In general, there are three types of referenda:

1.  **Public Referenda:** Referenda submitted and propagated by coin
    holders
2.  **Council Referenda:** Referenda submitted by the Council
3.  **Scheduled Referenda:** Referenda triggered as part of a previously
    passed referenda

Outside of fast-tracked referenda (see the section below), only one
referendum is active for voting at any given time. These referenda occur
in a fixed time window that will be, on network launch, `7 days`. All referenda
are binary, giving voters a choice between either “yay” or “nay.”

All referenda have an enactment delay, a period of time after the
referendum is accepted but before it is enacted. Outside of fast-tracked
referenda, the enactment period is `7 days`.

The network alternates between putting up a public referendum and a
council referendum for a vote every 7 days. If only one kind of proposal
is waiting to become a referendum, then it is selected regardless of the
kind of the previous one.

## Proposal Mechanism

### Public Referenda

Any coin holder can propose a public referendum. To do so, the proposer
deposits a number of coins of at least `100` xx coins. Then, any other coin holder
may second the proposal by depositing the same amount of coins on the
proposal.

The proposal with the highest deposit will be voted on during the next
public referenda period (as described above).

The public proposal queue has a maximum size of `100` proposals.

Proposals that become a referendum have a passing threshold that is
computed according to the standard *positive turnout biasing* within the
Substrate Ecosystem. In this type of voting, as the turnout increases,
the passing threshold for the referendum decreases.

### Council Referenda

Every other referendum period is dedicated to proposals put forward by
the Council. Council members vote internally on a motion and when it is
approved, it becomes a referendum. Depending on the support found within
the Council when passing the motion, the Council proposed referendum has
different voting requirements.

 * **Majority**
    > When a simple majority (>50%) of Council members approves the motion, the resulting referendum has the same passing threshold as for public referenda (described above).  
 * **Supermajority**
    > When a supermajority (>60.0%) of Council members approves the motion, the resulting referendum has a simple majority passing threshold. meaning that it requires \>50% of positive votes to pass.  
    
 * **Unanimity**
    > When all members of the Council support approve a motion, the resulting referendum has a passing threshold computed according to the standard *negative turnout biasing* within the Substrate Ecosystem. Negative turnout biasing is a voting system where the rejecting threshold for the referendum decreases as the turnout increases.  

Any member Technical Committee can veto a Council referendum. However,
the veto only applies once to any unique referendum, and for a cool-down
period of `7 days`. After this period, the same referendum can be resubmitted.

### Fast-Track Referenda

The Technical Committee has the power to fast-track Council referenda
that were passed with either supermajority or unanimity. In the
fast-track process, the Technical Committee selects the enactment
period.

If the Technical Committee has a two-thirds supermajority, the
referendum enters a fast-track voting period with a minimum of `3 hours`. If
unanimity is achieved, a voting period smaller than `3 hours` is possible.

### Proposal Cancellation

The Technical Committee can cancel any public proposal with an unanimous
vote before it becomes an active referendum. Doing so slashes the total
deposit associated with the proposal (proposer and seconders).

### Referendum Cancellation

A supermajority, 2/3<sup>rd</sup> of the Council, can cancel any active referendum. This is
designed to be used as a last resort if a malicious referendum is ever
brought up to voting.

## Council

The Council is an on-chain representative body designed to represent
passive stakeholders within the xx Network. At launch, the Council will
have `13` members.

All Council members are selected via the Phragmén election process
standard within the Substrate Ecosystem. All coin holders can vote on
Council members in each period. These terms will last `7 days`. The election
selects the `13` Council members and the `10` runners-up, which keep their votes in the
election.

The Council has the power to propose referenda (See [Council
Referenda](#council-referenda)), control the treasury, cancel
Active Referenda, and elect the Technical Committee. Individual members
have limited veto power over proposals presented to the Council, but an
individual member cannot veto the same proposal more than once.

### Treasury

The treasury consists of funds collected through transaction fees,
slashing, staking, and inefficiency (i.e., the network missing the ideal
staking ratio). Any coin holder may make proposals to the Council to
access funds by staking a minimum of `5`% of the request, or 100 coins,
whichever is higher. The stake is slashed if the proposal is rejected
and returned if it is accepted.

To accept a proposal, at least 3/5<sup>th</sup> of the Council must support it. The
threshold to reject a proposal is a simple majority.

If there are unspent funds at the end of a `24` day treasury period, a portion
will be burned. At network launch, this burn rate will be set at `1`%.

Along with the proposal system, any coin holder can suggest a tip. Any
Council member can back the tip by recommending an amount the recipient
of the tip can receive. Once more than half the Council backs a tip, it
enters a closing phase where Council members can still submit their
backing, but the tip has already passed. Once closed, the amount awarded
is equal to the median suggested tip amount.

When tips are started by the public, they must be accompanied by a
deposit, and the suggester receives `20`% of the total tip award.

### Electing the Technical Committee

A motion with 50% support by Council members can add or remove members
from the technical committee. Any referendum can do so as well.

### Others

The Council can perform the following on-chain decisions, requiring
different levels of acceptance of its members:

-   2/3 of the Council can set the on-chain CmixVariables. This
    includes, for example, points assigned to blocks produced, cMixx
    rounds completed and penalty for realtime failures; and the
    geographic multipliers.
-   3/4 of the Council can cancel a Slash on a validator.
-   2/3 of the Council can set a Phragmen election solution for the
    validator set selection, in case of failure of the on-chain election
    algorithm.
-   Half of the Council can set an identity pallet registrar.

## Technical Committee

The technical committee, as described above, is elected by the Council
by a simple majority vote. The technical committee’s primary
responsibilities are to manage a series of on-chain values to ensure the
proper functioning of the xx Network, veto power of council proposals
(as described in [Council Referenda](#council-referenda), and the ability to fast-track
and expedite council proposals (as described above). Any of these
on-chain values can also be changed via a referendum.

### Cmix Hashes

The Technical Committee has, with democracy’s permission, the ability to
change the on-chain version hashes of the cMixx software and its
services. It requires 2/3 approval to enact a change.

At launch, this ability expires after 6 months, and it must be renewed
via a referendum.

### Economics

Technical committee unanimity is required to make any changes to the
chain's economic parameters: inflation parameters, interest points and
liquidity rewards.

### Custody

Technical committee unanimity is required to make any changes to the
custody pallet, which includes altering a team member's account and
adding/removing custodian accounts.

### Staking

Technical committee unanimity is required to make any changes to Staking
parameters, which includes setting the desired validator set size,
minimum validator and nominator bonds, minimum commission, etc.

### Claims

Two thirds of the Technical committee is required to move a claim from
one ETH address to another.

### Bridge

At MainNet launch a bridge pallet is included but not active yet. Once
active, two thirds of the Technical committee is required to make any
changes to the bridge parameters, which includes adding/removing
resources and relayers.
