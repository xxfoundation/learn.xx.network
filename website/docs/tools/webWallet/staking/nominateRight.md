To choose the right validators in the xx network, you will first need to
follow [How To Nominate](https://xxnetwork.wiki/How_to_Nominate) wiki
article.

Once you know all the steps to nominate, you can follow this article.

This article can help you to save a lot of XX coins. Some people
nominate "boot node" who not even run cmix and give almost no reward
with more than 1M xx coins staked. Boot nodes share less than 40xx
instead of about 250xx per era. Cumulative lost for these nominators
since November 2021 is more than 10k XX whatever their stake due to huge
team stake. And it's the same for bad validators who run always below
average every era you lost rewards and these validators hurt the
network.

## Select some validators

For select the right validators, you should first check the commission
percentage which is an important parameter. This percentage is the price
you pay to the validator for each era based on the number of XX
received. So sort from lowest to highest 2% (which is the minimum
percentage allowed) to 18% maximum percentage allowed by the team to use
the team multiplier (red bar). The 20% and above are hidden by default
with "no 20%+ comm". You shouldn't take validators above 18% because
there are already many good validators to choose from this range.

![](@site/static/img/BadPercentageP.png)
This is an example of validators with 20%+ that you shouldn't nominate.

To help you choose after this first sort, try to check the nominators
column without the red icons on the left (oversubscribed means there are
too many nominators due to the limit of 256 per validator / blocks
nominations icon means that this validator refuses to be nominated / the
slashed icon is for people who have more than one node or a
configuration error or not enough time before switching to another
gateway or cmix on another computer so check these validators carefully
before choosing them)

For the nominator column (in the middle of this graph): the first number
is for the current nominators selected for this era and the second
number is for all nominators that name this node.
![](@site/static/img/Nominator_columns.png)
You can easily filter out people who are above the "avg staked"; they
already have too many nominators, so they don't need you and it's not
really good for you.

Below I share four strategies: one for poorer nominators with low stakes
(less than 50k), one for richer nominators (100k or more), one for a
validator with a nominator stake, and the last one for nominate and
forget.

After that, you have the most important step. NEVER appoint a validator
that performs poorly and can harm the entire network, because it is your
responsibility to eject these poorly performing validators from the
network!
![](@site/static/img/StatsIcon.png)

## Low stake nominators strategy

To get the best validators for you, try to catch some people in the
waiting list with the highest "own stake". This means lowering the total
stake of the nominators so that you have fewer competitors on the side
of the nominators with the lowest possible commission percentage to keep
the best daily reward. People in the waiting list is a good strategy
because most of the time have a low number of nominators without enough
stake to get elected. Another strategy is to take a validator with only
one great nominator at the "avg staked" or below because the threshold
can be even a little lower than average. Never nominate too many
validators with this strategy but choose 1 or 2 running validators only
and every good validators in the waiting list.

## Richer nominators strategy

Your best strategy is to take the lowest possible own stake with the
lowest commission or try to add your nominator's stake + validator own
stake to reach the "avg staked". Phragmen will eliminate all other
nominators and split the rewards only between you and the validator. To
find out that, just look at the "avg staked" number in the Targets tab.
This strategy should be checked almost daily to see if your validator
has changed commission percentage and not have any problems, but forcing
your total stake on one or two validators with a low commission
percentage will increase your daily rewards. For limited risk, choose a
validator in the 9-18% range who probably won't move their commission
value too much.

## Validators strategy

If you have a TM, set 18% and choose only your own validator, lowering
your TM value as much as possible. You need a little less "avg staked"
than what you can find at the top of the "Targets" tab.

If you don't have a TM and enough coins, push the percentage as high as
possible and select your own node until you reach a little less than
"avg staked" and don't select any other nominators. If you are at "avg
staked" number on your validator with no other nominators than your
nominator. You need to create a second wallet for create a second
nominators and select the "low stake" or "richer" nominator strategy.

## Nominate and forget strategy

Nominate a maximum of 16 nodes, but check each validator (last step) and
retain only those validators that have performed at or above average for
more than 30 eras and whose commission is between 9% and 18% or whose
commission percentage has not changed in the last 60 eras.

## NEVER nominate bad validators

This is the most important step. Your job is to remove bad validators
from the network and replace them with good validators that do not cause
problems for the network. This action will allow you to earn more
rewards each time. Before nominate any validators, click on the icon in
the "stats" column to check the rewards received at every eras and the
validator is consistently performing at or above the average on the
rewards graph at the bottom left of the page.

![](@site/static/img/GoodAverageValidator.png) An example of an excellent validator with consistent results over time. On
this graph, the green line represents the actual result of the validator
which is really perfect and never touches the average line (red). Never
select validators that are always below this average line and watch out
for validators that fall below the average (red) line too often on this
graph but is grey on the page.

![](@site/static/img/BadValidator.png) This
is an example of a bad validator that is consistently below average and
that no one should nominate. This validator should be replaced with a
better validator that doesn't hurt the whole network every era and also
gives you more rewards.

![](@site/static/img/Good_validator_with_drops_from_elected_list.png)
This is an example of a good validator that performs above average when
elected but has frequent dropouts from elected list giving reward graph
frequent drops to zero marked with green squares. Notice that all reward
drops to zero marked green corresponds with "elected stake" graph also
dropping to zero, which means validator just did not get elected for
that specific era. The only validator performance related drop is marked
with red rectangle. This validator is a good to nominate.

The second thing to look at is the commission graph on the right. Some
validators attract nominators by setting a low percentage, but after
certain periods of time that percentage increases and can even exceed
80% for some validators, so be very careful with these validators and
it's best to not select them. The best validators are stable and the
line on the right is flat at 18% or less or move between 0% (not
elected) and back to their old flat percentage.

![](@site/static/img/ValidatorBadCommission.png)
validator who isn't performing well due to regularly below average
performance and double commission for no reason. Nominators should not
nominate him and choose another validator with less percentage and above
average results.

![](@site/static/img/Flip-flopper.png)Another
example of validator changing commission rate frequently from 18% to
100% in order to deceive nominators. Nominators should look for other
reliable validator.

So to take this last step:

\- look at these graphs all the time before nominate someone that's very
important and take only the validator that stays equal or above the
average rewards with minimal points below the average as possible (if
the reward point is at 0, this validator is not elected and it's not
important. You can see that the commission graph stays at 0% during
these times, but at 10% commission and low reward, then validator is
performing poorly in that era).

\- see that the commission is as flat as possible
