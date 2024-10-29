---
sidebar_position: 4
title: Simple Staking
keywords: [xx network, staking, Simple Staking, validators, connect wallet, unstake, redeem, mnemonic]
---
# Simple Staking

## Overview
[xx network's Simple Staking](https://staking.xx.network) simplifies staking for nominators. Nominators can manually [nominate validators](webWallet/staking/nominate) via the [Web Wallet - Targets Tab](https://wallet.xx.network/#/staking/targets) but since not everyone wants to invest that much time and effort, we created Simple Staking. With Simple Staking, a few minutes, and only a handful of clicks, nominators can bond and unbond coins, select and change validators, and redeem rewards, while ensuring control and custody of your coins at all times.

:::danger Simple Staking is not 100% set and forget!
The participants of the xx network are ever changing. Validators come and go over time. We strongly suggest nominators invest the few minutes it takes to [Change Validators](#change-validators) at least once a month but weekly may also be justified.
:::
***
## Connect Wallet

To use Simple Staking, you must add an account.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/landing-no-wallet.png)

There are three ways to add accounts:
 * [Generate a new account](#generate-wallet)
 * [Add an account with a recovery phrase](#recovery-phrase)
 * [Add an account with a .json file](#import-keyfile-json)

:::info Accounts and browser sessions
When you add accounts, the account data is stored encrypted in the browser session data. Accounts are available across visits as long as you do not clear the session data. If you use multiple computers or browsers, accounts must be added to each.
:::
***
### Generate Wallet

If you do not have a native xxChain account, click the `GENERATE WALLET` button and follow the prompts. If you need help, see the documentation for the [Sleeve Wallet Generation Tool](sleeve), the process is similar. 
:::info Fund the account
Once the newly generated account is added you will need to fund it.
:::
***
### Recovery Phrase

You can add an existing account by clicking the `RECOVERY PHRASE` button. You will be presented with a form in which you must enter a standard mnemonic phrase, set a password, and click `DONE`

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-recovery-phrase.png)
***
### Import KeyFile (json)

If you have exported an account from another wallet, such as the [Web Wallet](https://wallet.xx.network/#/accounts), you can import the account via a `.json` file by clicking the `IMPORT KEYFILE (JSON)` button.

First click the `UPLOAD FILE` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-import.png)
***
Next, you will be presented with a file selection window of your OS. Browse to the directory the `.json` file is located and select it.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-import-select-json.png)
***
You will see a notification it has found an account. Enter the password that was set when the account was exported and click `IMPORT`.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-import-found.png)
***
## Add More Wallets

You can manage the staking preferences of multiple accounts, just click the `ADD MORE WALLETS` link and select how to add additional accounts.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-add-more-wallets.png)
***

## Wallet Connected

Once your wallet or wallets are found, click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-wallet-found.png)
***

## Select Wallet

Select the wallet you want to manage.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/select.png)
***

## Staking Options

 * [Stake](#stake) - Bond coins, select validators and stake.
 * [Change Validators](#change-validators) - Quickly select new validators.
 * [Unstake](#unstake) - Unbond and stop staking some or all of your coins. 
 * [Redeem](#redeem) - 28 days after unstaking, unbonded coins can be unlocked and made transferable.
***
### Stake

Select the `STAKE` radio button and click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/staking-options-stake.png)
***
Input the amount of xx coins you wish to bond and stake and click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/input-amount.png)
***
Wait a few seconds while the app selects validators for you.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-selecting.png)
***
Once validators are selected, you can review the list by clicking the `SHOW VALIDATORS` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-show.png)
***
Enter the password of the account and click the `CONFIRM PASSWORD` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-confirm-password.png)
***
Click the `SUBMIT` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-submit.png)
***
Wait while the transaction is signed and submitted to the blockchain.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/sign.png)
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/waiting.png)
***
Once successfully completed you will see a summary of your staking preferences.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/finish.png)

:::warning come back regularly
We strongly suggest nominators [Change Validators](#change-validators) at least once a month but weekly may also be justified.
:::

### Change Validators

Select the `CHANGE VALIDATORS` radio button and click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/staking-options-change-01.png)
***
Click the `NEXT` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/staking-options-change-02.png)
***
Wait a few seconds while the app selects validators for you.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-selecting.png)
***
Once validators are selected, you can review the list by clicking the `SHOW VALIDATORS` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-show.png)
***
Enter the password of the account and click the `CONFIRM PASSWORD` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-confirm-password.png)
***
Click the `SUBMIT` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/nominate-submit.png)
***
Wait while the transaction is signed and submitted to the blockchain.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/sign.png)
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/waiting.png)
***
Once successfully completed you will see a summary of your staking preferences.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/finish.png)

:::warning come back regularly
We strongly suggest nominators [Change Validators](#change-validators) at least once a month but weekly may also be justified.
:::

### Unstake

Select the `UNSTAKE` radio button and click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/staking-options-unstake.png)
***
Input the amount of xx coins you wish to unstake and begin unbonding, and then click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/input-amount-unstake.png)
***
Enter the password of the account and click the `CONFIRM PASSWORD` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/unstake-amount-confirm.png)
***
Click the `SUBMIT` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/unstake-submit.png)
***
Wait while the transaction is signed and submitted to the blockchain.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/sign.png)
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/waiting.png)
***
Once successfully completed you will see a summary of your staking preferences.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/unstake-finish.png)

### Redeem

:::info About redeeming
Every 24 hours an era ends. At which time the earned rewards are paid out and begin to unbond. Unbonding takes 28 days. If rewards were paid out on Jan. 01, one would be able to redeem them on Jan. 29.
:::

To check on the status of coins available to be redeemed one must [connect an account](#connect-wallet).
Once your wallet or wallets are found, click the `NEXT` button.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-wallet-found.png)
***
Select the wallet you want to manage and click the `NEXT` button.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/select.png)
***

If funds are available to be redeemed the `REDEEM` radio button will be enabled to select and the amount of coins available to be redeemed will be stated.

If funds are not available to be redeemed view the `UNSTAKED FUNDS` section. You will see the `AMOUNT` currently unstaked and the number of days the funds will be `AVAILABLE TO REDEEM IN`.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/staking-options-change-01.png)

## Forget Wallet

If you would like to remove an account from the app, click the `Forget?` link.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-forget.png)
***
You will be asked to confirm you wish to delete the account.
![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/simple-staking/connect-forget-confirm.png)

:::info
You can [connect the account](#connect-wallet) again at any time.
:::