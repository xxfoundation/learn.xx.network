---
sidebar_position: 2
---

# RPC Endpoints

## What is an Endpoint?
An endpoint is a connection to a Remote Procedure Calls (RPC) Node which facilitates communication within a decentralized network. The "Wallet > RPC Endpoint > RPC Node" relationship is similar to a "Web Browser > HTTP Port > Website Server" relationship. A wallet allows you to interact with a blockchain much like a browser allows you to interact with a website.

## Public RPC Endpoints

The [xx Foundation](https://xxfoundation.org) maintains archive nodes with publicly accessible RPC endpoints. When the Web Wallet loads, it connects to one of the public RPC nodes as shown below.

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/webwallet/wallet-endpoint-loading.png)

### Public RPC Node

There is more than one public RPC Node available to connect to from the Web Wallet. If the default RPC Node is taking too long to connect to, you can choose another public RPC Node to connect to via the menu on the left side of the page, under `Live Networks - xx mainnet`

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/webwallet/select-public-endpoint.png)

## Development RPC Endpoints

### Local Node

Ideally, you will run your own node for interacting with the xx network. Connect to your local node via the menu on the left side of the page, under `Development - Local Node`

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/webwallet/select-local-endpoint.png)

### + Add Custom Endpoint

If you wishes to connect to any other xx network RPC node, set the URL and connect to the custom endpoint via the menu on the left side of the page, under `Development - + Add Custom Endpoint`

![](https://docs-assets.sfo3.cdn.digitaloceanspaces.com/webwallet/select-custom-endpoint.png)