---
title: 'Instagram Clone'
excerpt: 'A clone of the social media Instagram, with Next.js, Firebase and Tailwind'
repositoryUrl: 'https://github.com/matews-sousa/instagram-clone'
liveUrl: 'https://instagram-clone-lovat-psi.vercel.app'
stack: ['Next.js', 'Firebase', 'TailwindCSS']
thumbPath: '/img/instagram-clone-thumb.png'
---

## Features

- Sign Up with validation of unique username
- Sign In with email and password
- Edit name, username and profile picture
- Follow and unfollow users
- Like and comment posts
- View user profile and posts
- Create posts
- Search for a user by name
  
## Demo

### Authentication flow

The users can create their accounts, validating if the username is already in use, for the forms was used the library react-hook-form and yup for validation.

![Authentication Flow](/img/auth-flow.gif)

### Edit profile flow

The users can open their profiles and click in "Edit Profile", they can upload a profile picture and use as avatar, or remove the current pic, using only the first letter of their names. Users can change their names and usernames, also validating if it's already in use.

![Edit profile flow](/img/edit-profile-flow.gif)

### Posts interactions

Users can like and remove like from another user's post, comment using emojis and view another user's comments, being able to view their profiles as well.

![Posts interactions](/img/posts-interactions.gif)

### Creating post

The logged in user can create new posts, uploading a image to Firebase Storage and add a multi line caption. When finished uploading, your post only appear on the feed of users that follows you and in your public profile page.

![Creating posts](/img/creating-post.gif)

## Stack

- Next.js
- Firebase
- Tailwind CSS