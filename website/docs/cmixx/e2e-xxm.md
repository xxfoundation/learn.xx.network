# End-to-End Encrypted Messaging in xx Messenger

[End-to-End Encrypted
(E2EE)](https://en.wikipedia.org/wiki/End-to-end_encryption) messaging
is a way to securely and privately communicate with connections—only the
sender and receiver can read the contents of their messages. While
[cMixx](../cmixx) protects your metadata (the who, what,
when, and where of your communications), the E2EE between clients on the
xx Network provides the additional guarantee that no third party can
decipher data that is processed and stored. End-to-end encryption keeps
your message content private from third parties, including xx Nodes,
nodes’ internet service providers, cell phone companies, and any other
telecommunications devices or malicious actors on the internet–your data
belongs to you, and only you. We call these E2EE links authenticated
channels.

In xx Messenger, we provide E2EE messaging that is protected against
threats from quantum computers. We accomplish this by using a key
exchange algorithm that uses [post-quantum
cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography)
combined with a known-secure regular key exchange algorithm, ensuring
that an attacker trying to break the protocol must break both to be
successful. The xx Network uses the [Supersingular Isogeny
Diffie–Helman](https://sike.org/files/SIDH-spec.pdf) (SIDH) algorithm
for post-quantum key exchange and the classic
[Diffie–Helman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
(DH) algorithm for regular key exchange.

To create an authenticated channel for E2EE messaging, the xx Messenger
needs the cMixx contact (public cryptographic identity key) to establish
encryption. Users can obtain these keys in one of two ways:

1.  Exchanging QR codes with another user
2.  Looking up another user with the User Discovery search function

After acquiring the other users’ cMixx contact, the xx Messenger sends an
authentication request message containing the SIDH and DH public keys
needed to initiate the key exchange. The recipient responds with their
own SIDH and DH public keys, and the original sender sends a final
confirmation message.

After receiving the other user’s SIDH and DH public keys, xx Messenger
computes the shared SIDH and shared DH secrets. It then combines these
secrets with a hash algorithm (BLAKE2B) to form the E2E Session Base
Key. This step finalizes the authenticated channel creation–each user
can now send E2EE messages.

To provide [forward
secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) and
[post-compromise security](https://eprint.iacr.org/2016/221.pdf), the
E2E Session Base Key is periodically re-keyed in a process sometimes
known as
[ratcheting](http://cryptowiki.net/index.php?title=Ratcheted_encryption).
The sender on each side of the connection controls how often a re-key
occurs. To initiate a re-key, the client sends new SIDH and DH public
keys using the authenticated channel already in place. When the
recipient responds, the sender can generate a new E2E Session Base Key
to create a new version of the authenticated channel, which is
functionally identical to the previous authenticated channel but a
different key. These rekeys require an additional message, so they are
only sent on an as-needed basis.

Each message in the xx Messenger is encrypted with [XChaCha20 symmetric
encryption](https://cr.yp.to/chacha/chacha-20080128.pdf) with a keyed
hash [message authentication
code](https://en.wikipedia.org/wiki/Message_authentication_code)
[HMAC-SHA256](https://datatracker.ietf.org/doc/html/rfc2104). The key
used for encryption is derived from the E2E Session Base Key. In
addition, a fingerprint, which only the recipient can use, is included
in the message to allow the recipient to look up the same encryption key
for that message.

## Cryptographic Primitives Summary

| Algorithm     | Length    | Description                                                                                                                                                      |
|---------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ChaCha20      | 256 bits  | Messages and payloads are encrypted by ChaCha20.                                                                                                                 |
| BLAKE2B       | 256 bits  | Used as part of key generation, key expansion, identity generation, and identification codes. Used to combine Diffie–Helman and SIDH keys after key integration. |
| SHA256        | 256 bits  | Message HMACs                                                                                                                                                    |
| Diffie–Helmen | 3072 bits | Discrete log-based component of key negotiation.                                                                                                                 |
| SIDH          | 3024 bits | Quantum-resistant component of key negotiation.                                                                                                                  |

## Resources

-   [Sending E2E
    Messages](https://git.xx.network/elixxir/client/-/blob/release/network/message/sendE2E.go)
-   [User Key
    Exchange](https://git.xx.network/elixxir/client/-/tree/release/keyExchange)
-   [E2E Manager and Storage
    Implementation](https://git.xx.network/elixxir/client/-/tree/release/storage/e2e)
-   [E2E Cryptographic
    Library](https://git.xx.network/elixxir/crypto/-/tree/release/e2e)
-   [Diffie Hellman Cryptographic
    Library](https://git.xx.network/elixxir/crypto/-/tree/release/diffieHellman)
-   [Hashing Cryptographic
    Library](https://git.xx.network/elixxir/crypto/-/tree/release/hash)
-   [Cloudflare's SIDH Implementation (in
    Go)](https://github.com/cloudflarearchive/sidh)
