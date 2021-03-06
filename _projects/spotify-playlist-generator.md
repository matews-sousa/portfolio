---
title: 'Spotify Playlist Generator'
excerpt: 'This app generates spotify playlists based in a searched song, using the Spotify Web API, the playlist can be created in the user logged in account.'
repositoryUrl: 'https://github.com/matews-sousa/playlist-generator'
liveUrl: 'https://playlist-generator-three.vercel.app'
stack: ['Next.js', 'NextAuth', 'ChakraUI', 'Spotify Web API']
thumbPath: '/img/spotify-thumb.png'
---

## Features

- Search songs
- Get suggestion of songs
- Populate a playlist with suggested songs
- Edit playlist info (name, description)
- Create playlist in Spotify Account

## Approach I Used

The user authenticate yourself with NextAuth in their Spotify Account, when they are authenticated, they are able to search songs and get suggestions for a playlist, append songs to the playlist and create in Spotify.

## Challenges

The main challenge was to authenticate the user with Spotify, because the token provided has a complex expiration time, and do not provide a refresh access token to maintain the user connected.

## What I've learned

- Authenticating users with NextAuth
- Using the Spotify Web API

## See the project live at [Spotify Playlist Generator](https://spotify-playlist-generator-flax.vercel.app)