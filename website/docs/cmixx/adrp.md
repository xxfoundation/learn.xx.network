# Anonymous Data Retrieval Protocol

The Anonymous Data Retrieval Protocol (ADRP) allows users to request
data anonymously from a server without ever revealing their identity.
With normal [end-to-end](e2e-xxm) connections in the xx Network, users always know the identity of whom
they are messaging. With ADRP, one can send a request to another user
containing a one-time-use key negotiation for an entirely new user. The
recipient can respond to the negotiation without ever knowing the
identity of the original sender. When ADRP is combined with the metadata
shredding capability of the cMixx protocol encapsulation, a powerful
anonymous data lookup is guaranteed.

This protocol is open for use with the
[xxDK](https://git.xx.network/elixxir/client) and is the basis for the
[User Discovery](userDiscovery) system’s privacy.

## Protocol Description

The requestor needs to know the xx messenger contact details
(cryptographic identity) of any user they request on the network
(including a [Diffie–Hellman
key](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
and a network identity). xx messenger then generates a new key pair and
network identity by calculating a new, symmetric [Diffie–Hellman
key](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
using the new key and the recipient’s key. The payload contents are then
encrypted with the new symmetric key via
[ChaCha20](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant), with
an appended HMAC.

The request is sent over cMixx in a single packet containing the new
public key (in clear-text) and encrypted message contents. Once
received, the recipient can execute a Diffie–Hellman with the clear-text
public key and decrypt the payload. The contents (and clear-text public
key) can be used to respond to the request from the new one-time-use
identity. The responses are also encrypted via
[ChaCha20](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant), with
an appended HMAC.

The recipient can then process the contents and respond via the ad-hoc
negotiated link. Finally, the sender confirms receipt by checking the
network for receptions on the new identity.

## Cryptographic Primitives Summary:

| Algorithm     | Length         | Description                                                                                           |
|---------------|----------------|-------------------------------------------------------------------------------------------------------|
| RSA           | 4096 bits      | Used as the signature algorithm for signing a fact or a key.                                          |
| Blake2b       | 256 bits       | Algorithm used for generating single-use specific fingerprints and keys. Additionally used for HMACs. |
| Diffie Helmen | 3072 bits      | Discrete log-based component of key negotiation.                                                      |
| ChaCha20      | 256 bits (key) | Messages and payloads are encrypted by ChaCha20.                                                      |

## Resources

-   Single-Use
    [Implementation](https://git.xx.network/elixxir/client/-/tree/release/single)
-   Single-Use [Cryptographic
    Library](https://git.xx.network/elixxir/crypto/-/tree/release/e2e/singleUse)
-   [ID Implementation (Ephemeral and
    Reception)](https://git.xx.network/xx_network/primitives/-/tree/release/id)
-   [cMixx Message
    Format](https://git.xx.network/elixxir/primitives/-/blob/release/format/message.go)
-   [Sending cMixx
    Messages](https://git.xx.network/elixxir/client/-/blob/release/network/message/sendCmix.go)
