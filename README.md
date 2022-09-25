# Secret Cutie
Secret Santa application for gift-giving fun with friends and family. Randomly assigns each 
gifter to a giftee so that everyone gets their fair share of gifts.

**Link to Project:** https://jonac19.github.io/secret-cutie/

![Secret Cutie Home Page](./images/SecretCutie-Homepage.png)

## Built With

- HTML
- CSS
- JavaScript

## Optimizations

The runtime of the participant matching algorithm was optimized by cutting out repeated calculations. This brought the time complexity of the algorithm down from O(n^2 log n) to O(n^2) where n is the number of participants. It came at no extra cost of space usage, which was a big plus.

## Future Updates

- Email verification of client
- Backend for email distribution to participants
