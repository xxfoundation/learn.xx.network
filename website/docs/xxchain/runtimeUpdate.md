# Runtime Update Tutorial
This page describes how to perform a runtime update (code change)
in the xx Network blockchain.

## Versioning

xx Chain version follows the standard Semantic versioning of
`v[major].[minor].[patch]`

Runtime versioning stays inline with the xx Chain version, using a 6
digit string.

For example:

-   v0.2.0 -> runtime 00 02 00 = 200
-   v0.2.3 -> runtime 00 02 03 = 203
-   v1.0.0 -> runtime 01 00 00 = 10000
-   v1.1.0 -> runtime 01 01 00 = 10100

If a particular change in xx Chain is client side only (no runtime
changes), then the runtime version stays the same. These sort of changes
should always be patches.

## Runtime Compilation

Steps:

1.  Create a branch containing the desired changes to the runtime
    (example:
    [xxnetwork-runtime-203](https://github.com/xx-labs/xxchain/tree/xxnetwork-runtime-203))
    -   Naming should follow the standard:
        \[spec_name\]-runtime-\[spec_version\]
    -   Make sure the spec version is correctly increased for the
        runtime
        -   Example: current runtime spec version is 202, so the new version
            needs to be at least 203 for the upgrade to be performed
    -   Make sure Cargo.toml versions are also increased for the cli and
        runtime packages. Also, any packages that import the runtime
        should be updated to import the new version
2.  Commit changes to git, and create a tag following the Semantic
    versioning rules described above
3.  Compile the binary (which compiles the runtime)

Alternatively, if a release already exists, you can get the necessary
binary, runtime code and subwasm information from the release notes.

Example:
[v0.2.3](https://github.com/xx-labs/xxchain/releases/tag/v0.2.3)

## Democracy Proposal

Steps:

1.  In the wallet go to the
    [Democracy](https://wallet.xx.network/#/democracy)
2.  Click the “Submit proposal” button

![](@site/static/img/Screen_Shot_2022-04-26_at_2.06.27_PM.png)

3.  Fill in the preimage hash with the system.setCode hash from the
    previous steps![](@site/static/img/Screen_Shot_2022-04-26_at_2.07.48_PM.png)
4.  Click "Submit proposal" and then on the next screen sign and submit
    the transaction

Now that the proposal is up, go to the xx Network community channels
([discord](https://discord.com/invite/Y8pCkbK) and
[telegram](https://t.me/xxnetwork)) and inform other members of the
community about the proposed code change. It is important that
information about the code change is included (references to github
release), since the actual code won’t be put on chain until the
referendum passes.

Once the proposal becomes a referendum, anyone can vote for it. Voting
period is one week.

## Verifying Code Changes

While the referendum is ongoing, community members might wish to verify
that the proposer was truthful.

Steps:

1.  Checkout the branch with the new runtime
2.  Compile the binary (which compiles the runtime)
3.  Use subwasm to get the system.setCode hash for the new runtime in
    compact compressed format (see above for example)
4.  Verify that the proposal preimage hash that is on-chain matches the
    system.setCode hash output in the previous step

## Uploading Code

If the referendum passes, the enactment period is one week as well,
meaning the change is only performed one week after the referendum ends.
Before the end of this enactment period, the code changes must be
uploaded on chain, otherwise the enactment will fail.

This can be done by anyone, without needing to reserve coins, since the
preimage is imminent.

Steps:

1.  In the wallet go to the
    [Democracy/Dispatch](https://wallet.xx.network/#/democracy/dispatch)
2.  Click the “Image” button
3.  Select ”system” and “setCode” from the dropdown menus and click on
    the “file upload” toggle![](@site/static/img/Screen_Shot_2022-04-26_at_2.19.45_PM.png)
4.  Click on the code field (where it says “click to select …”) which
    opens your OS file explorer. Find the runtime file containing the
    new code and open it![](@site/static/img/Screen_Shot_2022-04-26_at_2.20.26_PM.png)
5.  If the code is correct, the preimage hash matches what was approved
    in the referendum (this was highlighted in red before the file was
    selected). This makes it impossible to change the code to upload
    after the referendum has been approved![](@site/static/img/Screen_Shot_2022-04-26_at_2.20.37_PM.png)
6.  Click the “Submit preimage” button
7.  Review the information
:::note
Since the code change is a large file, the transaction
        fees shown could be close to 100 xx. However, since this
        referendum is imminent, the fee is refunded at the end of the
        transaction processing. Still, the funds still need to be
        available in the account to be able to submit the transaction
:::

![](@site/static/img/Screen_Shot_2022-04-26_at_2.20.49_PM.png)
8.  Sign and submit the transaction
9.  When the transaction is in a block it’s possible to see the
    transaction fee being Withdraw and then Deposited back into the
    account![](@site/static/img/Screen_Shot_2022-04-26_at_2.21.51_PM.png)
10. In the democracy dispatch queue, now it’s possible to see the exact
    proposal data instead of only the preimage![](@site/static/img/Screen_Shot_2022-04-26_at_2.21.07_PM.png)
