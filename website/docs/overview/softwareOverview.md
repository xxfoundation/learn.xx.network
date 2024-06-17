# xx Network Software Overview

![](@site/static/img/Codebase_Overview_Figure_-v3.0-.png)
The xx Network codebase is combined between xx Labs’ consensus software
and Elixxir’s cMixx protocol.

Elixxir software is organized into four groups of repositories as shown
in the figure: Core, Services, Clients, and Tools. The *Core* libraries
handle functionality across Clients and Services, which contain data
structures, interfaces, and cryptography common to many xx Network
components. *Services* implement various messenger features, as well as
authorizing Clients and Nodes to join the network. *Clients* interact
with the network using a shared [Client API (xxDK)](../cmix/xxdk/overview.md). *Tools* provide several
interfaces and utilities to deploy, test, and debug the network.

Most of the Elixxir code found in the Core and Services is written in
the Go programming language. The repositories listed as public below can
be found on the public [Elixxir](https://git.xx.network/elixxir) and [xx
network](https://git.xx.network/xx_network) Git pages. Most software is
posted on a git server run by xx Network.

xx Labs' software is based on Substrate and involves a fork of Substrate
and custom "pallets" implementing xx Network-specific features. This
software is mainly hosted on public [GitHub](https://github.com/xx-labs)
repositories but will be mostly moved to the [xx
labs](https://git.xx.network/xx-labs) on the xx Network git shortly.

To follow the setup guide, most Node operators will likely elect to
download the prepackaged tarballs containing the compiled binaries. To
learn more, refer to the *Node and Gateway Software* section.

## [xx network Codebase](https://git.xx.network/xx_network/)
:::note
TODO Public/Private note
:::
### xx network/[Primitives](https://git.xx.network/xx_network/primitives)

The xx network Primitives repository contains the basic data structures
and utilities used in the Elixxir and Praxxis codebases. This includes
the ID structure for Nodes, Gateways, and users and the NDF structure.
Additional generic structures and utilities are also contained in
Primitives, such as file access and rate-limiting utilities.

### xx network/[Crypto](https://git.xx.network/xx_network/crypto)

The xx Network Crypto repository contains cryptographic primitives that
are shared between Elixxir and Praxxis codebases. Primarily lower-level
primitives, randomness generation, TLS handling, and nonce handling.

### xx network/[Comms](https://git.xx.network/xx_network/comms)

The Comms repository handles all network communication functionality as
well as all of the core connectivity logic. It includes generic comms
handlers and protocols and not specific implementations, which are
implemented in the respective Comm branches for each project.

### xx network/[Scheduling-Scripts](https://git.xx.network/xx_network/scheduling-scripts)

Scripts used to direct the scheduling server based upon blockchain
state, as well as return state for tokenomics

## [Elixxir Codebase](https://git.xx.network/elixxir/)

### Elixxir/[Primitives](https://git.xx.network/elixxir/primitives)

The Elixxir Primitives repository contains the basic data structures and
utilities that are used by all Elixxir repositories. This includes the
user fact structure, the cMixx message structure, and the version object.

### Elixxir/[Crypto](https://git.xx.network/elixxir/crypto)

The Crypto repository encompasses all of the base cryptographic
functionality found in the codebase. Relying heavily on Go’s *big
integer* implementation, Crypto features a cryptographically secure
random number generator implementation, libraries for working with large
integers in modulo cyclic groups for cMixx operations, and basic
encrypt/decrypt functionality. Like Primitives, Crypto only contains
code that is generic to the larger system. A core approach to this
repository is to supply wrappers for operations that may require
migration to other implementations in the future.

### Elixxir/[Comms](https://git.xx.network/elixxir/comms)

Comms builds on the generic utilities of xx Network Comms to provide
specific functionality for Elixxir. It holds a gRPC protocol file along
with a thin Client/Server implementation. The repository currently uses
TLS certificates with RSA keys for encryption and identification, which
will migrate to xx consensus-based quantum secure authenticated channels
as development progresses.

### Elixxir/[GPUMaths](https://git.xx.network/elixxir/gpumathsgo)

The GPUMaths repository accelerates the math used by Server, especially
for precomputations. It provides a subset of the math implemented in the
Crypto repository but accelerated on GPUs. Underlying the acceleration is a publicly available CUDA arbitrary-precision math library, CGBN2.
Components of this written in CUDA are in a separate repository
[gpumathsnative](https://gitlab.com/elixxir/gpumathsnative).

## Services

### Elixxir/[Server](https://git.xx.network/elixxir/server)

The Server repository implements the core cMixx functionality and is the
software that a Node runs. It performs precomputation and real-time
computation and processes messages. In addition, it receives batches of
messages from the Gateways as well as performs network team operations.

### Elixxir/[Gateway](https://git.xx.network/elixxir/gateway)

The Gateway repository contains the API for Clients to interact with the
network. Every Node runs a Gateway and the Gateways collect and store
messages for Clients. Gateway is designed to be a scalable front-end to
the xx Network.

### Elixxir/[Scheduling](https://git.xx.network/elixxir/registration)

Permissioning, also referred to as Scheduling, manages the NDF for
Clients and Servers and schedules cMixx rounds within the network.
Eventually, this functionality will be managed by the distributed xx
consensus. For now, this code handles admission, manages which Nodes are
part of the network, and orchestrates when Nodes operate.

### Elixxir/[Notifications](https://git.xx.network/elixxir/notifications-bot)

Implements a private notifications system, allowing users to receive
notifications on their phone when using the xx messenger. Does so via
Firebase for Android and Apple APNs for iOS.

### Elixxir/[Authorizer](https://git.xx.network/elixxir/authorizer) :lock:

Edge server that Nodes contact to get let through the firewall to talk
to the Scheduling server.

### Elixxir/[Client Registrar](https://git.xx.network/elixxir/client-registrar)

Edge server which authorizes clients into the network

## Clients

### Elixxir/[Client API (xxDK)](https://git.xx.network/elixxir/client)

All Clients use the Client API to interact and send messages with the
cMixx network. In addition, it uses Go mobile to produce a library
compatible with iOS and Android.

### Elixxir/[User Discovery (UD)](https://git.xx.network/elixxir/user-discovery-bot)

User Discovery helps users make the first contact with other users.
Using the "singe use" package within the xxDK, User Discovery implements
a completely private user lookup, where the system cannot determine
which user is querying. The system leverages Twilio to verify emails and
phone numbers if the user would like to do so.

### Elixxir/Mobile Clients
* [xx Messenger - Android](https://gitlab.com/elixxir/client-android)
* [xx Messenger - iOS](https://gitlab.com/elixxir/client-ios)

Currently, clients exist for iOS and Android operating systems. These
both use the Go mobile libraries produced in the Client API.

## Tools

### Elixxir/[Wrapper Script](https://git.xx.network/elixxir/wrapper)

The Wrapper Script is a Node and Gateway management script that
simplifies the running of the xx Network software. The script automates
the management of the xx Network software log files. For easy management
or in the event of an error, it starts, stops, and restarts the software
without requiring the operator to revisit the command line. Optionally,
it can automatically update the Node and Gateway with the latest xx
network binaries and configuration files. To learn more, refer to the
Wrapper Script Arguments section.

### Elixxir/[DevOps](https://git.xx.network/elixxir/) :lock:

DevOps is a deployment platform for Microsoft Azure, Google Cloud
Platform, and Amazon Web Services (AWS) written in Terraform. DevOps
allows for the deployment of test networks, management of deployments of
individual Nodes, and the deployment of multi-cloud implementations of
xx Network.

### Elixxir/[Integration](https://git.xx.network/elixxir/integration)

The Integration repository is a series of end-to-end tests designed to
test different functionality of the cMixx protocol. For example, several
tests focus on different batch sizes with Nodes only. Another test
covers all the Client-level interactions within the network.

### Elixxir/[Local Environment](https://git.xx.network/elixxir/localenvironment)

The Local Environment repository contains a set of scripts designed to
allow testing the entire platform on a single machine.

## Version Scheme

Both Gateway and Node binaries have a version string embedded in them,
consisting of a major version, a minor version, and a patch string,
separated by a period.

| Major |     | Minor |     | Patch |
|-------|-----|-------|-----|-------|
| ┌┴┐   |     | ┌┴┐   |     | ┌─┴─┐ |
| 4     | .   | 2     | .   | 6ab   |

To participate in the network, a Node or Gateway has to have a
compatible version with the required version reported by the Scheduling
server. For a version to be compatible, the major version must be equal
to the required major version and the minor version must be greater than
or equal to the required minor version. The patch can be anything, but
it will always be present.

## [xx labs Codebase](https://github.com/xx-labs)

### xx-labs/[sleeve](https://github.com/xx-labs/sleeve)

The xx labs sleeve repository contains code to generate Sleeve wallets.
The sleeve is a novel way of embedding a quantum secure key in the
generation of curve-based, non-quantum secure keys. In addition, the
repository contains an implementation of the WOTS+ signature scheme,
which is used as the quantum-secure fallback for Sleeve wallets.

### xx-labs/[xxchain](https://github.com/xx-labs/xxchain)

The xxchain repository contains the code for the xx Network blockchain
node, which is based on Substrate. It contains the following pallets
(modules) that are necessary for xx Network, among others:

-   **xx-betanet-rewards:** allows users to select an option for the
    BetaNet Staking Rewards program, which can only be accepted and
    enacted after a Referendum passes using Democracy;
-   **xx-cmix:** hosts cMixx variables and software hashes on-chain, and
    allows scheduling server to push points information according to
    cMixx rounds completed/failed;
-   **xx-economics:** Implements the unique token economics of xx
    network. This includes a rewards pool from which staking rewards are
    taken, only leading to inflation of the total supply after the pool
    is empty, and an adjustable maximum inflation value according to
    block number, which allows xx Network’s inflation to be decreasing
    over multiple years.

### xx-labs/[substrate](https://github.com/xx-labs/substrate)

The xx labs substrate repository is a fork of the [Substrate framework](https://github.com/paritytech/substrate). The xx-network
branch of this repository contains Staking pallet modifications specific
to the xx Network, such as the inclusion of cMixx IDs.
