---
title: 'WalletBase'
excerpt: 'A Incomes and Expenses tracker, that users can add their transactions and control their general balance.'
repositoryUrl: 'https://github.com/matews-sousa/wallet-base'
liveUrl: 'https://wallet-base.vercel.app'
stack: ['React.js', 'Firebase', 'styled-components']
thumbPath: '/img/walletbase-thumb.png'
---

## Features

- Authenticate with email and password, or with Google Account
- Reset password
- Register incomes and expenses categories
- Register transactions made
- View charts about all transactions

## Approach I Used

I used Firebase to authenticate users, and after that they can customise their settings anyway they want, adding or removing categories.

## Challenges

The main challenge was to handle the data that was being inserted in to Firestore, to facilitate the showing the statistics in the user dashboard.

## What I've learned

- User authentication with Firebase
- Firebase Firestore as a database
- Styled Components in a atomic design approach

## See the project live at [WalletBase](https://wallet-base.vercel.app)