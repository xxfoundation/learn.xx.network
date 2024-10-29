---
sidebar_position: 1
title: Overview
keywords: [Substrate, BFT, NPoS, validators, governance, xxchain]
---

# Overview

The initial version of the xx Chain is built on Substrate, an open-source framework for efficiently and securely creating blockchain networks. For its consensus algorithm, xx Chain uses the most secure BFT approach offered by Substrate, which consists of BABE for block authoring and GRANDPA for block finality.

The xx Chain uses Nominated Proof of Stake (NPoS) to secure the network economically. Anyone wishing to become a validator must stake coins, with a network governed minimum, expected to start at 1000 coins. Users of the network that do not want to become validators can still contribute by staking their coins and nominating validators. Each era (a period currently defined as 24 hours) an election determines which validators get selected based on their staked amounts, the nominations they have received, and the size of the validator set. Once elected, every validator is equal, i.e., rewards are not proportional to the validator’s stake. Instead, a point-based system measures general blockchain performance: uptime, block production, and each validator get a percentage of the total reward based on their point total for each era. To find out more about these topics, please visit the xx Network Economics and Staking pages.

The xx Chain has decentralized governance that allows every coin holder to propose, second, and vote in referendums. There is also a Council with a limited number of seats that can propose motions and other essential decisions that users can vote on. In addition, any user can run and become a candidate to the Council, and all users of the network can vote on candidates, with a fixed number getting elected each week. Finally, a smaller Technical Committee, appointed by the Council, carries out technical decisions that are of significant importance to a smooth and secure operation of the network. To find out more about this topic, please visit the Governance page.