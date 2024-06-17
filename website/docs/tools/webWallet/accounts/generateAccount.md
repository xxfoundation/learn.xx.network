---
sidebar_position: 4
---
# Generate Account
The MainNet wallet generator app walks you through the process of creating a quantum-ready wallet for use in the xx Network. It is important that you keep the wallet you generate private and secure, as you would any other cryptocurrency wallet.

When you first load the page you will notice the green icon indicating the browser is connected to the internet. It is recommended you disconnect the browser from the internet while generating a wallet.
![](@site/static/img/ww-gen-online.png)
## Disconnect and Acknowledge
Once disconnected, check the two acknowledgments and the "Generate New Wallet" function will be available. Click "Generate New Wallet"
![](@site/static/img/ww-gen-offline.png)
## Save Mnemonics
On this page you will be presented with two sets of mnemonics, the "Quantum Mnemonic"[^1] and "Standard Mnemonic"[^2]. Write these two down somewhere safe as they will be required to complete the wallet generation process and to add the account to wallet apps.
![](@site/static/img/ww-gen-mnemonics.png)
## Confirm Quantum Mnemonics
In this step you must input five randomly selected words from the Quantum Mnemonic. As an example you can see "Word #15" is one of the five required to be entered. Word 15 was artist. After typing in the 5 words correctly, press Next.
![](@site/static/img/ww-gen-ver-quant.png)
## Confirm Standard Mnemonics
In this step you must input five randomly selected words from the Standard Mnemonic. As an example you can see "Word #13" is one of the five required to be entered. Word 13 was treat. After typing in the 5 words correctly, press Next.
![](@site/static/img/ww-gen-ver-stan.png)
## Mnemonics Confirmed Successfully
You will see a confirmation message that the Quantum and Standard Mnemonics were inputted correctly. Press Go to Last Step
![](@site/static/img/ww-gen-mnemonics-confirmed.png)
## Public Address
On this page you will see the public address of the generated wallet. At this step you can ["Add Wallet to Accounts"](./addAccount.md) of the Web Wallet or "Finish Setup".
![](@site/static/img/ww-gen-finished.png)

[^1]: Quantum Mnemonic: derives the quantum-secure wallet, which is not currently used, but will be necessary in the future in order to rollover existing non quantum secure wallets into quantum secure wallets.

[^2]: Standard Mnemonic: currently used to generate standard non quantum secure Wallets. This phrase can be generated from the quantum secure phrase, so keeping the first one safe will always be of utmost importance.