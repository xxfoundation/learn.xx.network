---
sidebar_position: 1
---

# What is xx network?

xx network is a secure and efficient decentralized ecosystem. Founded by the "Godfather of Digital Currency", [David Chaum](https://en.wikipedia.org/wiki/David_Chaum). The xx network MainNet launched in November 2021. xx network consists of a fast, low-fee quantum-ready layer 1 blockchain, [xxChain](xxchain), built in tandem with the most private communications network in the world, [cMixx](cmixx). By leveraging the "xx Developer Kit" ([xxDK](../cmixx/xxdk/overview.md)), any application or blockchain can route their traffic through the xx network's communications layer in order to provide metadata privacy and quantum-secure encryption for all types of data communications.

## Current xx network Architecture

The MainNet is generally composed of three components: Nodes, Gateways, and clients. Within themselves, all three of these components handle two functions: interacting with cMixx, the private communications layer, and the xxChain.
![Current Network Structure](@site/static/img/Present_Network_Chart.png)
* Nodes: The core operators of the network; they execute the cMixx protocol and act as validators within the xxChain.
* Gateways: The public-facing components of Nodes, one exists per Node. They store received messages, provide public access to data, and run a light node for public access.
* Clients: Clients come in two versions, cMixx clients and xxChain clients. cMixx clients access the communications layer and can send and receive private communications. xxChain clients are currently limited to block explorers and other interactions with the blockchain.

## Full xx network Decentralization

In a future update, the scheduling server will be eliminated and replaced by an on-chain consensus operation which will work as follows:
![Future Network Structure](@site/static/img/Future_Network_Chart.png)
* To be scheduled, a Node will submit a transaction to the network known as a waiting bid. Once accepted into a block, the Node will be written into the “waiting pool” for a maximum number of blocks.
* The waiting pool will not be exhausted below 30% of the total number of online xx Nodes (in the waiting pool + currently running rounds) to ensure proper mixing between Nodes in a team. Every block producer will use the block randomly to execute a [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) on the waiting pool, selecting Nodes 1 through 5 as the first team, nodes 6 through 10 as the second team, etc. until the waiting pool is exhausted.
* The teams will see their formation and work together to execute their precomputation. Once completed, they will select a time to execute their realtime based upon network congestion and generate a joint certificate on the round realtime start. This will be passed to the Gateways and gossiped throughout the Gateway network.
* Clients, who are polling the Gateways, will see realtime certificates as well as the scheduling of the team within the block and select a round to submit messages to.
* Once a realtime time has been reached, the nodes will begin the realtime, rapidly anonymizing the messages.
* Once complete, the mixed messages will be delivered to the Gateway and the team will form a joint certificate stating the completion of the round. This will be submitted as a transaction to the blockchain.
* Once the certificate of completion is received from the team, they will be awarded points towards compensation for the era and entered back into the waiting pool automatically. If the certificate does not get received by the blockchain before a predefined number of blocks, the round will be considered failed and the team will not be re-entered back into the waiting pool until they submit another waiting bid. At any time, any member of the team can submit a failure certificate for the round, canceling it and allowing the team members to bid back into the waiting pool.
