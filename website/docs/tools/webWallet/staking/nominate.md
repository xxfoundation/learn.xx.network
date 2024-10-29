---
title: Nominating Validators
keywords: [nominate, nomination, staking, xx network, xx chain, validators]
---

# Nominating Validators

To nominate a Node in the xx network, you will be required to first bond
the coins you wish to stake. While bonded, these coins will not be
transferable but may be used for staking and governance. Staking and
governance are considered separate actions and both may be done
simultaneously with the same locked coins. For example, suppose you have
1,000 xx coins staked and nominating several nodes. In that case, you
may use those same xx coins to vote on referenda, elect council members,
and propose treasury spending without unstaking the nodes.

When a user wishes to unbond all or some of their coins to transfer
them, there is a 28-day cooldown period until the coins may be used. The
coins will not earn interest during this period and will not be counted
towards your active stake. A user may rebond the coins at any time
during this period and begin using them for staking again. This period
ensures that the coins are available for slashing if a prior offense is
caught within the 28-day unbonding period.

**Overview of Steps to Nominate Nodes**

1.  Create and fund a controller wallet
2.  Bond the coins you wish to stake
3.  Choose up to 16 nodes to nominate (with each bonded account)
4.  Wait for the next election for your nomination to be applied
5.  Claim rewards (rewards will automatically be staked so that they
    earn interest)

## Before Starting

Before you can bond and nominate, log in to the [xx wallet](https://wallet.xx.network/) with your account. If you have not
created a wallet or account, refer to [Using the Wallet Generator](../accounts/generateAccount.md) to get started with a
new wallet and [Add an Account to the xx wallet](../accounts/addAccount.md) to log in.

## Bond the Coins to be Staked

Once you have your wallet with coins set up, you need to bond the coins
into the network.

1.  In the navigation menu, go to *Network* and in the drop-down menu,
    click on *Staking*. Or navigate to
    https://wallet.xx.network/#/staking.
    ![](@site/static/img/Explorer_-_Staking_Nav.png)
2.  The Staking Overview page will open.
    1.  Click on *Account actions* in the submenu.
    2.  Then click the *stash* button
        ![](@site/static/img/Explorer_Stash_button.svg).

    ![](@site/static/img/Explorer_-_Account_Actions,_Add_Stash.png)
3.  The *bonding preferences* window will open.
    1.  Select the account to use. It should be the same account for
        stash and controller accounts.
    2.  Enter the amount you wish to bond
    3.  Once you have confirmed everything, click the *Bond* button.

    ![](@site/static/img/Explorer_-_Add_Stash,_Bonding_Preferences.png)
4.  On the next page, authorize your transaction by entering your
    password and clicking the *Sign and Submit* button
    ![](@site/static/img/Explorer_Sign_and_Submit_button.svg).
    ![](@site/static/img/Explorer_-_Authorize_Transaction_(Bond_Tokens_for_Stash).png)

![](@site/static/img/Stashing_xx_coins.gif)

## Selecting Nodes to Nominate

Once your stash is bonded, you are ready to stake nodes. This section
will cover nominating other people’s nodes.

Keep in mind that each account can nominate up to 16 different nodes. If
you want to nominate more than 16 nodes, then you will need to create
another account and split your coins between the accounts.

### Reviewing Nodes

First, you will likely need to research the available nodes to select
the right nodes to nominate.

1.  In the navigation menu, go to *Network* and in the drop-down menu,
    click on *Staking*. Or navigate to
    https://wallet.xx.network/#/staking.
    ![](@site/static/img/Explorer_-_Staking_Nav.png)
2.  The Staking Overview page will open. Click on *Targets* in the
    submenu.
    ![](@site/static/img/Explorer_-_Targets_Submenu_Nav.png)

From here, you can see all the available nodes you can nominate. A
detailed walkthrough of choosing the best nodes to stake is outside the
scope of the wiki, but there are some things to consider when selecting
the nodes that you want to nominate.

1.  **Determine the node’s commission.**
    
    The commission percentage is the amount of the rewards pool that the
    node takes off the top as compensation for running the node. The
    rest of the rewards are then split amongst the stakers of the node.
    A node with a 100% commission rate will take all of its rewards in
    an era, leaving no rewards for anyone who has nominated it.
    Likewise, a node with 0% commission will not take any additional
    compensation for running the node and all of its earnings will be
    split amongst its stakers.

    ![](@site/static/img/Commission_column.png)
2.  **Verify how many people are already nominating a node.**
    
    The rewards that a node earns are split evenly based on stake (after
    the commission is taken out). The more stake that a node has, the
    more people you will share your rewards with. Check the *total
    stake* column for this info and take this into consideration.
    Furthermore, the rewards from a node will only be paid to the top
    256 nominators. This means if you nominate on a node, but 256 people
    are nominating more than you, then you will not receive any rewards
    from that node until you stake enough to be in the top 256. Check
    the *nominators* column and take this into consideration when
    choosing nodes. A red icon labeled *Oversubscribed*
    ![](@site/static/img/Explorer_-_Oversubscribed_Icon.svg)
    will appear next to all nodes that have more than 256 nominators.

    ![](@site/static/img/Nominator_Info.png)

3.  **Check the node’s prior performance.**
    
    If a node goes offline or misbehaves, it (and everyone staked on it)
    will earn fewer coins and, in rare cases, may lose coins. Follow
    these instructions to check the performance of the node.

    1.  Click on the *cmix id* for a node to open its page on the [xx
        network dashboard](https://dashboard.xx.network/) in a new
        tab/window.
        ![](@site/static/img/Explorer_-_Targets,_cmix_id_link.png)
    2.  Look at the *Uptime* and *Round Success Rate* graphs and confirm
        that they are acceptable.
        ![](@site/static/img/Dashboard_-_Uptime_and_Round_Success_Rate_Graphs.png)
    3.  Return to the explorer tab/window and click on the *stats* icon
        ![](@site/static/img/Explorer_-_Stats_Icon.svg) next to the node.
        ![](@site/static/img/Explorer_-_Targets,_Stats_icon_link.png)
    4.  On this page, you can see how consistent the node has been.
        ![](@site/static/img/Explorer_-_Validator_stats.png)

    ![](@site/static/img/Node_performance_gif.gif)


## Selecting Nodes

1.  Click on *Targets* in the submenu to return to the list of nodes.

![](@site/static/img/Explorer_-_Targets_Submenu_Nav.png)

To select a node, use the toggle box on the far right. You can toggle
the ones you like (up to 16).

![](@site/static/img/Explorer_-_Targets,_Nominate_Checkbox.png)

Once you have selected all the nodes you want to nominate, click on the
*Nominate selected* button
![](@site/static/img/Explorer_Nominate_selected_button.svg) on the top
right.

![](@site/static/img/Explorer_-_Targets,_Nominate_selected.png)

The *nominate validators* window will open.

1.  Make sure that you select the correct account to nominate with.
2.  The validators you selected to nominate.
3.  Once you are ready to nominate, click the *Nominate* button
    ![](@site/static/img/Explorer_Nominate_button.svg).

![](@site/static/img/Explorer_-_Nominate_validators_windows.png)

On the next page, authorize your transaction by entering your password
and clicking the *Sign and Submit* button
![](@site/static/img/Explorer_Sign_and_Submit_button.svg).

![](@site/static/img/Explorer_-_Authorize_Transaction_(Nominating).png)

![](@site/static/img/Nominate_from_targets_gif.gif)

## Wait For Next Election for Your Nomination to be Applied

When you nominate a node, your nomination does not become active
immediately. Instead, it will be applied in the next node election,
which occurs at the end of every era.

1.  In the navigation menu, go to *Network* and in the drop-down menu,
    click on *Staking*. Or navigate to
    https://wallet.xx.network/#/staking.

![](@site/static/img/Explorer_-_Staking_Nav.png)

The Staking Overview page will open. Click on *Account actions* in the
submenu.

![](@site/static/img/Explorer_-_Account_Actions_Nav.png)

On the *Account actions* page, you can see all your bonded wallets along
with information on whether there are *active* or *waiting* nominations
on them.

To see when the next era begins:

1.  In the navigation menu, go to *Network* and in the drop-down menu,
    click on *Staking*. Or navigate to
    https://wallet.xx.network/#/staking.
    ![](@site/static/img/Explorer_-_Staking_Nav.png)
2.  The length of each era and the time until the next era are viewable
    in the top right.
    ![](@site/static/img/Era_Timer.png)
