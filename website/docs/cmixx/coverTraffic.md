---
title: Cover Traffic
keywords: [cover traffic, dummy traffic, decoy traffic, sender unobservability, receiver unobservability, xx Messenger, privacy, anonymity]
---


# Cover Traffic

Cover traffic, also known as dummy traffic or decoy traffic, is used by the xx Messenger application to essentially give us two additional privacy properties known as “sender unobservability” and “receiver unobservability” (see the privacy notions paper https://arxiv.org/abs/1812.05638 ). If cover traffic is enabled, the xx Messenger client will, at random time intervals, send cover messages which are indistinguishable from ordinary messages. Any adversary watching your network traffic will not know when you are sending or receiving an ordinary message or a cover message.

Our cover traffic design is aided somewhat by our intentional recipient ID collisions (See [ID Collision and Notifications](idCollisionAndNotifications)). Cover traffic is sent to recipient IDs chosen at random from the small ID space which is intended to cause ID collisions. Therefore the cover messages will be received by random users of the xx Network.

The cover traffic yields the privacy properties summarized above and this is important for resisting attacks on the anonymity properties of the xx Network. Because your connection data leaks (true for all network connections), that can be used over time to determine who is talking to who. By activating cover traffic you are making these statistical disclosure attacks much more difficult.
