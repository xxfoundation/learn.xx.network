---
sidebar_position: 1
---

# Overview

For cMixx, Node and Gateways pair together; every Node has a Gateway. Their relationship is a Scheduler-Worker design. In the initial design, this will be tiered with a Scheduling server orchestrating Nodes that then orchestrate their Gateways, which then pass schedules onto Clients. The Scheduling server takes its instruction from the blockchain; network participation is defined by staking and consensus. The network will rapidly remove scheduling functions from the scheduling server and move them to adjudication by xx Chain.

Currently, all components of cMixx are controlled either directly or recursively by a central Scheduling server. Each member polls the entity above them in the hierarchy for information, as shown in the figure. Bi-directional communication only exists within the same level. There are two primary components of this data that are communicated: the Network Definition File (NDF) and the RoundInfo.

The Network Definition File (NDF) contains all the connection information for the entities in the network and is provided by the Scheduling server through the hierarchy shown. The Nodes provide the hash of their current NDF to Scheduling; if they differ, then the updated NDF is provided to the Node. The Gateways poll the Nodes and Clients poll Gateways for the new NDF in the same fashion.

Nodes, Gateways, and Clients also receive scheduling instructions from the Scheduling server. These instructions are contained within RoundInfo structures, which are both prescriptive and descriptive of changes to rounds, which groups a set of Nodes to anonymize communications. A round is created when RoundInfo is issued to start a round’s precomputation. When the Nodes finish the precomputation, Scheduling issues a new RoundInfo that schedules it for realtime, which can be delayed depending on the number of queued rounds. Finally, a further RoundInfo is issued when a round completes or fails.