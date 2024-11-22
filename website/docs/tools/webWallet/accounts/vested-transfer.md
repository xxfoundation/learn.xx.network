---
title: Vested Transfers
keywords: [vested, send, coins, wallet, xx coin, xx network, wallet]
---

# Vested Transfers

xx Coins can be transferred between accounts on a release schedule that unlocks a constant number of tokens at each block. This is known as a Vested Transfer. 

Vesting transfers are often preferred over regular [balance transfers](sendCoins.md) for transferring funds for bounties, sales, etc. When using a vested transfer, the recipient receives xx coins that cannot be transferred but can be used in other parts of the protocol such as voting in governance or being staked as a validator or nominator.

This page explains how to perform Vested Transfers on the [xx network Blockchain](https://explorer.xx.network) using the [xx network Web Wallet](https://wallet.xx.network).

## Procedure
1. In the xx network Web Wallet, navigate to Developer > Extrinsics or click this [direct link to Extrinsics](https://wallet.xx.network/#/extrinsics)

### Select Sending Account ID
2. In the field labeled `using the selected account`, select the sending account ID.

### Select Extrinsic Type
![](@site/static/img/vesting-devExt-default.png)

3. In the field labeled `submit the following extrinsic`, select "vesting".

![](@site/static/img/vesting-select-vesting.png)

4. Next select `vestedTransfer(target, schedule)`.

![](@site/static/img/vesting-select-vestedTransfer.png)

### Select Receiving Account ID

5. In the field labeled `Id: AccountId`, select the receiving account ID.

![](@site/static/img/vesting-schedule.png)

### Input Schedule and Vesting Info

6. In the filed labeled `locked: u128`, enter the total amount of xx to be transferred. See [Formulas](#how-to-calculate-locked-amount)
7. In the field labeled `perBlock: u128`, enter the amount of xx to be transferred per block. See [Formulas](#how-to-calculate-per-block-amount)
8. In the field labeled `startingBlock: u32`, enter the block at which the transfers will start. See [Formulas](#how-to-calculate-starting-block)

### Submit and Authorize Transaction
9. Click the "Submit Transaction" button.
10. Authorize the transaction by entering the sending account password and clicking "Sign and Submit"

## Formulas

:::info The following formulas calculate the fields of `schedule: PalletVestingVestingInfo`.
### Calculate `locked`
- Formula: `Amount of XX * (10^9)`
- Example:
  - To vest 100 XX
  - Calculate: 100 * 1,000,000,000
  - Enter: 100,000,000,000

### Calculate `perBlock`
1. First, determine your vesting period:
   - 1 month ≈ 438,000 blocks
   - 6 months ≈ 2,628,000 blocks
   - 1 year ≈ 5,256,000 blocks

2. Calculate per block amount:
   - Formula: `(Locked Amount) / (Number of Blocks)`
   - Example for 100 XX over 1 year:
     - 100,000,000,000 / 5,256,000
     - Enter: 19,025

### Calculate `startingBlock`
⚠️ Do NOT use `0` (zero) as starting block as this causes immediate vesting.

1. First, determine the current block:
   - The current block is displayed in the upper left of the Web Wallet interface.
   - See the previous image. It has been highlighted in a RED box.
2. Calculate starting block:
   - Formula: `current block + desired delay` in blocks
   - Example delays:
      - 1 hour delay = current block + 600
      - 1 day delay = current block + 14,400
      - 1 week delay = current block + 100,800
:::

## Example Vesting Schedules

:::tip Here are some pre-calculated values for common vesting scenarios (using 100 XX as example):
### 6-Month Vesting
- Locked: 100,000,000,000
- Per Block: 38,050
- Starting Block: [current block + desired delay]

### 1-Year Vesting
- Locked: 100,000,000,000
- Per Block: 19,025
- Starting Block: [current block + desired delay]

### 2-Year Vesting
- Locked: 100,000,000,000
- Per Block: 9,512
- Starting Block: [current block + desired delay]
:::

## Tips
- Always double-check your calculations
- Test with a small amount first
- Recipient cannot transfer vested tokens until they are unlocked

## Support
If you need assistance, you can:
- Ask for help in the [xx network Discord Server](http://discord.xx.network) or the [xx network Forum](https://forum.xx.network)
- Check the [xx network Documentation](https://learn.xx.network)