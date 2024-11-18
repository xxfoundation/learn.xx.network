---
sidebar_position: 1
title: xxChain Explorer
keywords: [xxchain, xx, chain, explorer, blockchain, xx network]
---

# xxChain Explorer

The Explorer is easy to use and best way to learn it is to explore it on your own: [https://explorer.xx.network](https://explorer.xx.network).

Sections below are only highlights that most users need.

## Transfers

Transfers - also known as "transactions" - are signed extrinsics that include payment transfers, staking reward payouts, and similar activities recorded on the xx Chain. 

You may find them [here](https://explorer.xx.network/transfers). 

## Staking 

[Staking-related area](https://explorer.xx.network/staking) helps validators review their metrics and nominators may use it as well to decide which nodes to nominate. 

A validator's tabs contain the following useful information:

- Governance - participation of a validator in XX Network governance activities. The higher it is, the more engaged the validator.
- Staking - staking rewards from validator's own Node and other staking. These may be export this in the CSV format for tax declaration purposes (most people will need a CPA or online service to fetch the prices and check for you)
- Validator - contains validator statistics including per-era commission information as well as (total) Node rewards
- Metrics
  - Address Creation - age of the address. "Veteran" validators are generally more reputable
  - Identity - on-chain identity (configurable in the XX Network Walllet) means more transparency
  - Slashes - any violations that the validator may have performed 
  - Nominators - number of nominators. This can range from 1 (self-staked validators) to dozens (which may indicate the validator is reputable and successful, or that Simple Staking tool picks this node with some regularity, or even that be a scam)
  - Commission - this is "average", so it won't tell you if it wasn't set to 90% the day before, but generally 20% is the upper limit of commonly seen range. A low average may be attractive, but it can also be a bait so other metrics need to be evaluated as well (for example, an old validator address, on-chain identity, and a history of validation longer than 100 eras would be good signs)
  - Fequency of Payouts - regular payouts indicate more engagement and free the nominators from having to do it themselves

