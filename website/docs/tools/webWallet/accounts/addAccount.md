---
sidebar_position: 5
---
# Adding Accounts to the Web Wallet

## Adding a Basic Account

To add your account to the [Web Wallet](https://wallet.xx.network/), follow the instructions below.

1.  In the navigation menu, go to *Accounts* and in the drop-down menu,
    click on *Accounts*.
    ![](@site/static/img/Explorer_-_Top_Menu_Accounts_-_Accounts.png)
2.  On the right side of the *My accounts* page, click *Add account*.
    ![](@site/static/img/Xx_network_Explorer-_Account_Page.png)
3.  The first page of the *add an account via seed* window will show up.
    ![](@site/static/img/Add_an_Account_Via_Seed.png)
    a.  Enter the *standard phrase*, also known as the *non-quantum
        mnemonic phrase*. Each word in the phrase must be separated by a single space. 
        Remove all line breaks and double and trailing spaces.

    b.  Then check the *I have saved my mnemonic seed safely* checkbox.

    c.  Click the *Next* button.

4.  Next, you will enter the account details.
    ![](@site/static/img/Add_an_Account_Via_Seed_-_Account_details.png)
    a.  Create the name for your account.

    b.  Create a strong and secure password.

    c.  Click the *Next* button.

5.  On the next page, An encrypted backup file will be created once you have pressed the "Save" button. 
    :::tip 
    This file can be used to import your account on any other machine. Save this backup file in a secure location. Additionally, the password associated with this account is needed together with this backup file in order to restore your account.
    :::
    ![](@site/static/img/Add_an_Account_Via_Seed_-_Save.png)

## Derivation Paths

Within the xx network wallet, it is possible to create a child account
using a *derivation path*. A derivation path can be any text used to
mutate the account's seed (generally a mnemonic) to create a separate
wallet. Note that both the parent account and its seed must be known to
recover the child account.
:::danger
A derived account cannot be regenerated from the parent account without 
the derivation path. Therefore, make sure you do not lose the derivation path.
:::

### Hard and Soft Derivation

When creating a derivation path, the path generally starts with either a `/`
or a `//`, the former signifying a *soft derivation* and the latter a *hard
derivation*.

With a Hard Derivation, it is not possible from the account information
to link the child account to the parent account (excluding metadata
analysis). At the same time, it is possible to connect the two with a
soft derivation.

For example, a hard derivation could look like `//banana`, while a soft derivation
would look like `/orange`.

### Multi-Derived accounts

It is possible to derive accounts from derived accounts by chaining
derivation paths. For example, in `//banana/broccoli`, the hard derived wallet *banana* has a
soft derived wallet *broccoli*.

### Deriving a wallet

1.  In the navigation menu, go to *Accounts* and in the drop-down menu,
    click on *Accounts*.
    ![](@site/static/img/Explorer_-_Top_Menu_Accounts_-_Accounts.png)
2.  Find the account you would like to derive from and click on the
    three dot menu to the right and select *Derive account via
    derivation path*.
    ![](@site/static/img/Explorer_-_My_accounts_three_dot_menu_derive_account_via_derivation_path.png)
3.  A window will appear asking to unlock your account. Enter your
    password and press the *Unlock* button.
    ![](@site/static/img/Explorer_-_Unlock_account_to_derive_account_from_pair.png)
4.  On the next page, you can enter your derivation path and create the
    derived account.
    :::danger
    Do not leave the derivation path empty. If you do, it will overwrite the root account.
    :::
    :::tip
    Keep your derivation path in a safe, secure, and private location. You may want to keep this with your wallet mnemonics.
    :::
    ![](@site/static/img/Explorer_-_Derive_Account_from_Pair.png)
    a.  Enter your derivation path. You must supply a path. Precede hard
        keys with `//` and soft keys with `/`. You can optionally include a
        password for this account using `///`.
          
    b.  Select a name to appear in the wallet.

    c.  Select a password to access this account in the wallet.

    d.  Press the *Next* button to continue.

5.  On the next page, click the *Save* button.
    ![](@site/static/img/Explorer_-_Save_derived_account.png)
