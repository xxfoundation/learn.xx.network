# User Discovery

User Discovery (UD) is an xx Network service that helps users connect
with others by searching via username, email, or phone number. When a
user makes their xx Messenger account, they create a username and have
the option to include other identifiable information in their profile.
Other xx Messenger users can then use this information to search for
users in UD and start communicating.

User Discovery links each piece of profile data with a user’s xx
Messenger contact, which is a cryptographically generated ID and a
public key. When a user searches in UD, the search results display the
cMixx contact details needed to initiate end-to-end encrypted secure
communications. Privacy is always guaranteed; users can choose to accept
or decline communications from contacts discovered via a UD search.

User Discovery runs as a client on the xx Network. It’s server is
maintained by the xx Network team. Long term plans are to fully
decentralize this service onto the xx Network blockchain.

## User Registration

During the xx Messenger app installation process, users select a unique
username that is registered in UD. This registration is completed
securely via
[TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) rather
than [cMixx](../cmixx).

After registering their username, xx Messenger generates cryptographic
information that will be used to identify the user uniquely. This
information includes:

-   An RSA key pair defining a cryptographic identity (known as an ID)
-   A discrete log Diffie–Helman public key for future key exchanges
    (3072-bit, in
    [RFC3526](https://datatracker.ietf.org/doc/html/rfc3526#section-4))
-   An authorization signature from the network

Upon receiving their cryptographic information (i.e., by signing the
[Diffie–Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
public key with the
[RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) key), users
upload their username and information to the User Discovery server to
complete registration. As a final step in the registration process, xx
Messenger ensures the username is unique and the information passes all
cryptographic checks.

### Registering Further Information

Users can choose to build out their profile by adding and registering
their email address or phone number. Users sign a registration request
with their RSA key to send the request for connection, which completes
checks before being passed to [Twilio](https://www.twilio.com), a
third-party service that will complete the verification process. Once
the user confirms their verification code, a salted hash
([Blake2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function))) of
their email or phone number is stored in the database. xx Messenger
protects users’ personal information and never stores unencrypted plain
text on any servers.

## Searching for Users

xx Messenger allows users to easily find their connections by searching
for their username, email, or phone number. When a user fills in search
criteria, xx Messenger first salts and hashes the data and then sends it
over the [anonymous data retrieval
protocol](adrp), which utilizes [cMixx](../cmixx) and a unique, on-the-fly negotiation
format request to search for the user without ever revealing who is
searching or who is being searched. When received, the User Discovery
server searches for the salted hash in its database. If a match is
found, the relevant user’s cryptographic data is returned, allowing the
requesting user to form an
[end-to-end](e2e-xxm) relationship.

## Deletion

A user can delete a piece of their data or their entire registered
account at any time. However, this will not remove existing
relationships formed based on that data. To fully remove user data and
relationships, xx Messenger requires a signed statement that will allow
the app to completely remove data from the database.

## Cryptographic Primitives Summary

| Algorithm      | Length    | Description                                                                                                       |
|----------------|-----------|-------------------------------------------------------------------------------------------------------------------|
| RSA            | 4096 bits | Used as the signature algorithm for signing a fact or a key.                                                      |
| Blake2b        | 256 bits  | Algorithm used for hashing facts. It is a faster hashing algorithm that matches or exceeds the security of SHA-3. |
| Diffie–Hellman | 3072 bits | Discrete log-based component of key negotiation.                                                                  |

## Resources

-   [User-side
    Code](https://git.xx.network/elixxir/client/-/tree/release/ud)
-   [UD-Side Code](https://git.xx.network/elixxir/user-discovery-bot)
-   [Fact
    Implementation](https://git.xx.network/elixxir/primitives/-/tree/release/fact)
-   [Fact Cryptographic
    Library](https://git.xx.network/elixxir/crypto/-/tree/release/factID)
-   [Cryptographic ID
    Implementation](https://git.xx.network/xx_network/primitives/-/tree/release/id)
-   [RSA
    Signature](https://git.xx.network/xx_network/crypto/-/tree/release/signature/rsa)
