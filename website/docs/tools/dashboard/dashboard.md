# About

# [Quick View](https://dashboard.xx.network/)
The above link will bring you to cMix Dashboard Quick View.

* mTPS - Shows the average mTPS (cMix Message Transactions per Second) by hour over the last 24 hrs.
* Latency - The delay before a transfer of data begins following an instruction for its transfer.
* Nodes (worldwide) - Here users can see where we have nodes actives from all over the world.
* Total Rounds - Total number of successfully processed rounds since MainNet, [2021.11.17 | 07:01 (UTC)](https://explorer.xx.network/blocks/1)
* Avg Throughput/Hr - 
* Total Throughput (24hr)
* Realtime Success Rate (24hr)
* Precomp Success Rate
* Completion Time - A list of the 20 most recent rounds and the time at which they finished.
  * Round Number - Self explanatory.
  * Completion Time (UTC) - Completion of the Realtime Phase.
* 24hr mTPS - A chart which shows the hourly mTPS of the past 24 hours.
* Performance - Shows a chart and table of the duration  of the 10 most recent rounds.
  * Round Number - Self explanatory.
  * Precomp Duration - The number of seconds it took to complete the Precomputation phase of the round.
  * Realtime Duration - The number of seconds it took to complete the Realtime phase of the round.
* Active Validators - Shows the number of cMix nodes online of the number of active cMix nodes.
* Min Server Version - The minimum compatible version of the cMix binary.
* Min Gateway Version - The minimum compatible version of the gateway binary.
* Node Status Breakdown - Shows the status of all known cMix nodes.
  * online - Represents a node is communicating with the network and can be scheduled to run rounds.
  * error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error.
  * offline - Represents a node is not communicating with the network.
  * not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era.

# [Rounds View](https://dashboard.xx.network/rounds)
The above link will opens the cMix Dashboard Rounds View.

* Round ID - Self explanatory.
* Completion Time - Date and time (UTC) the round ended, whether SUCCESS or TIMEOUT.
* Status
  * SUCCESS - The round completed successfully.
  * TIMEOUT - The round failed during the Precomputation or Realtime phase.
* Realtime Duration - Displays the duration of the Realtime phase or `-` if the round timed out.
* Batch Size - The number of message slots allocated for the round.
* Precomputation Start Time - The date and time (UTC) the Precomputation phase started.
* Precomputation End Time - The date and time (UTC) the Precomputation phase ended or '-' if the round failed during the Precomputation phase.
* RealTime Start Time - The date and time (UTC) the Realtime phase started or '-' if the round failed during the Precomputation phase.
* RealTime End Time - The date and time (UTC) the Realtime phase ended or '-' if the round failed during the Realtime phase.
* Round End Time - Date and time (UTC) the round ended, whether SUCCESS or TIMEOUT.
* Node (1st, etc) - The position and node ID of all nodes participating in the round.

# [Round View](https://dashboard.xx.network/rounds/1)
The above link opens the cMix Dashboard Round View for Round 1 as an example.

* Nodes in the Round - The number of nodes participating in the round.
* Precomp Duration - Displays the duration of the Precomputation phase or `Error` if the round failed.
* Realtime Duration - Displays the duration of the Realtime phase or `Error` if the round failed.
* Batch Size - The number of message slots allocated for the round.
* Nodes Worldwide (1, etc) - Lists the position and node ID of all nodes participating in the round and the path is displayed on a world map.
* Precomputation - Displays the start and finish date and time of Precomputation phase or `-` if the round failed.
* Real Time - Displays the start and finish date and time of the Realtime phase or `-` if the round failed.
* Result
  * Success - The round completed successfully.
  * Failed - The round failed during the Precomputation or Realtime phase. If the result is "Failed", additional information regarding the failure will be displayed in the form of a log message.

# [Nodes View](https://dashboard.xx.network/nodes)
The above link opens the cMix Dashboard Nodes View

* Name (Conditional) - Displays a name if the node operator has "Set on-chain identity" of the validator.
* ID - The cMix node ID
* Wallet (Conditional) - Displays the cMix node's associated xx Chain validator wallet address only when the validator is an active validator. See "not currently a validator"
* Status
  * online - Represents a node is communicating with the network and can be scheduled to run rounds.
  * error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error.
  * offline - Represents a node is not communicating with the network.
  * not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era.
* Bin - Displays the [geographic bin](https://xx.network/blog/mainnetgeobins/) of the node.
* ISP - The Internet Service Provider of the node.
* Precomp Failure Rate [^1] - Percentage of rounds participated in, monthly to date, which failed during the Precomputation phase.
* Realtime Failure Rate [^1] - Percentage of rounds participated in, monthly to date, which failed during the Realtime phase.
* Percent Uptime - Percentage of the time, to date monthly, a node has been online while an active validator.

[^1]: This does not necessarily indicate the particular node is responsible for the failures.

# [Node View](https://dashboard.xx.network/nodes/c6wptSinakErZHrk0SlgGQXExETPYYLB2CwpLNze6FMC)
The above link opens the cMix Dashboard Node View for the cMix node, xx west, as an example.

* Name (Conditional) - Displays a name if the node operator has "Set on-chain identity" of the validator.
* Node ID - The cMix node ID
* Wallet (Conditional) - Displays the cMix node's associated xx Chain validator wallet address only when the validator is an active validator. 
* Status
  * online - Represents a node is communicating with the network and can be scheduled to run rounds.
  * error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error.
  * offline - Represents a node is not communicating with the network.
  * not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era.
* Node Metrics - This section can display weekly and monthly metrics via the drop-down menu.
  * Weekly - Select a week via the drop-down menu to the right.
  * Monthly - Select a month via the drop-down menu to the right.
* Uptime - Percentage of the time online and offline, of selected period, a node has been online while an active validator.
* Round Success Rate [^1] - Shows the percentages of successful and failed, by Realtime and Precomputation timeout, rounds participated in, of selected period.
* Round Profile
  * Total - Total number of rounds participated in in the selected period.
  * Success - Total number of successful rounds participated in in the selected period.
  * Realtime Timed Out [^1] - Total number of rounds participated in which failed during the Realtime phase in the selected period.
  * Total Timed Out [^1] - Total number of rounds participated in which failed in the selected period.
* Precomp Average Duration - Average duration of the Precomputation phase of all rounds participated in in the selected period.
* Realtime Average Duration - Average duration of the Realtime phase of all rounds participated in in the selected period.
* Last 100 Rounds - A list of the last 100 rounds the node has participated in and the result of the round. Or will display, "This node has not participated in any rounds in the last 48 hours..." if the node has been offline for more then 48 hours.