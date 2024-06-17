# ID Collisions and Notifications

Typically, user IDs are unique identifiers and have the property of
being matched to one user. This allows the users to be strongly
identified, based upon an ID alone, making it easy to tell which user is
which.

When sending messages to users, the xx Network intentionally has users
share their IDs to receive messages–the sender ID details are removed
when the message is sent through the xx Network.

The goal here is to hide the identification details of which user
receives a message and prevent a special type of tagging attack possible
within the x protocol. You can read about the tagging attack in [cMixx
Tagging
Attack](https://docs.xx.network/cMix_Tagging_Attack_Analysis_and_Mitigation.pdf).

All users have a unique reception ID where they receive messages. When
you add a user as a contact, one can see their ID and use it at any time
to calculate their Ephemeral ID for a specific moment. Ephemeral IDs
rotate once per day, at a random time unique to the recipient.

Ephemeral IDs are calculated within a small bit space that is designed
to allocate at any given time roughly half as many IDs as the number of
users in the network. This ensures that users will be receiving messages
meant for other users to guarantee further privacy. However, due to
[end-to-end
encryption](e2e-xxm),
users cannot read these messages or access any data about the sender or
recipient.

At launch, and at any point where usage drops below a few hundred
thousand users, the number of users will be insufficient for this system
to function, requiring alternate protections.

## Notifications

The notifications system relies on shared ephemeral IDs to keep
notifications private. When a user registers for notifications, a server
run by the xx Network team tracks when their current ephemeral ID
receives a message and sends a notification. Then their phone processes
the notification to detect if the message is actually for the user and
will notify if it is. This bot, as well as the notifications provider
(currently available for Apple and Google operating systems), do not
know when a message is for you due to ID collisions, ensuring message
content is private.

## Cryptographic Primitives Summary

| Algorithm    | Length        | Description                                                                                                                                                       |
|--------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ephemeral ID | 64 bits (max) | Weak identification of a network user. Designed such that collisions are probable.                                                                                |
| User ID      | 264 bits      | Strong identification of a network user. Designed such that one’s user ID is unique under the [Birthday Paradox](https://en.wikipedia.org/wiki/Birthday_problem). |
| BLAKE2B      | 256 bits      | Used for ID generation (ephemeral and user IDs).                                                                                                                  |

## Resources

-   [ID Primitives
    Library](https://git.xx.network/xx_network/primitives/-/tree/release/id)
-   [ID
    Generation](https://git.xx.network/xx_network/crypto/-/tree/release/xx)
-   [Ephemeral ID
    Library](https://git.xx.network/xx_network/primitives/-/tree/release/id/ephemeral)
-   [Notifications Ephemeral ID
    Logic](https://git.xx.network/elixxir/notifications-bot/-/tree/release/notifications)
-   [User-side Ephemeral ID
    Logic](https://git.xx.network/elixxir/client/-/tree/release/storage/reception)
