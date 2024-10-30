---
sidebar_position: 3
title: Sleeve Wallet Generation Tool
keywords: [quantum-ready wallet, cryptocurrency, quantum-secure, sleeve, wallet, xx Network, key generation]
---

# Sleeve Wallet Generation Tool
The [Sleeve Wallet Generation Tool](https://sleeve.xx.network/) walks you through the process of creating a quantum-ready wallet for use in the xx Network. It is important that you keep the wallet you generate private and secure, as you would any other cryptocurrency wallet.
![](@site/static/img/sleeve-welcome.png)
After clicking "Next" you will notice the green icon indicating the browser is connected to the internet. It is recommended you disconnect the browser from the internet while generating a wallet.
![](@site/static/img/sleeve-online.png)

## Disconnect and Acknowledge
Once disconnected, check the two acknowledgments and the "Generate New Wallet" function will be available. Click "Generate New Wallet"
![](@site/static/img/sleeve-offline.png)

## Save Mnemonics
On this page you will be presented with two sets of mnemonics, the "Quantum Mnemonic"[^1] and "Standard Mnemonic"[^2]. Write these two down somewhere safe as they will be required to complete the wallet generation process and to add the account to wallet apps.
![](@site/static/img/sleeve-gen-mnemonics.png)

## Confirm Quantum Mnemonics
In this step you must input five randomly selected words from the Quantum Mnemonic. As an example you can see "Word #18" is one of the five required to be entered. Word 18 was decline. After typing in the 5 words correctly, press Next.
![](@site/static/img/sleeve-ver-quant.png)

## Confirm Standard Mnemonics
In this step you must input five randomly selected words from the Standard Mnemonic. As an example you can see "Word #6" is one of the five required to be entered. Word 6 was mercy. After typing in the 5 words correctly, press Next.
![](@site/static/img/sleeve-ver-stan.png)

## Finish Wallet Setup
On this page you will see the public address of the generated wallet. At this step you can ["Add Wallet to Accounts"](webWallet/accounts/addAccount.md) of the Web Wallet using the "Standard Mnemonic" or export a JSON file which can be used to import the account into the Web Wallet.
![](@site/static/img/sleeve-finish.png)

## Export JSON Account File
To export the JSON file, enter stong password and press "EXPORT JSON ACCOUNT FILE" button. This file will be saved to local storage of the computer. The password you set here will be asked for if you import the account into the Web Wallet.
![](@site/static/img/sleeve-export-json.png)

[^1]: Quantum Mnemonic: derives the quantum-secure wallet, which is not currently used, but will be necessary in the future in order to rollover existing non quantum secure wallets into quantum secure wallets.

[^2]: Standard Mnemonic: currently used to generate standard non quantum secure Wallets. This phrase can be generated from the quantum secure phrase, so keeping the first one safe will always be of utmost importance.