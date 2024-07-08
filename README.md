<!-- # Frontend Mentor - News homepage solution

## Welcome! 👋

Thanks for checking out my repository.

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![News Home Page](./Screenshot_2024-06-15%20Frontend%20Mentor%20News%20homepage(1).png)


### Links

- Solution URL: (https://your-solution-url.com)
- Live Site URL: (https://news-homepage-tau-tawny.vercel.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS utility classes
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

I learned how to use CSS Grid, CSS Grid properties, and Flexbox. Most importantly, I learned how to use Utility classes and Custom properties to my advantage. I also learnt how to do a reset in order to remove some default styles that came with some HTML elements. For example, HTML Paragraphs come with a default margin of 16px at the top and bottom, and a reset removes such, so I can give my own styles as I wish.

```css
/* Using Grid Template areas to achieve the design layout */
.section-grid{
    grid-template-areas:
    "one one four"
    "two three four"
    "five five five" ;
  }
```

### Continued development

I will love to sharpen my skills when it comes to building a good design structure however the Layout may be i.e following a Mobile-first design approach whilst keeping my Desktop design in mind. Essentially, learning to see the bigger pcture and not focusing just on my Mobile design but seeing how my desktop design layout differs from my Mobile design layout and ensuring that both designs come out well while building.


### Useful resources

- [CSS Grid Tutorial](https://www.youtube.com/watch?v=rg7Fvvl3taU&t=485s) - This helped me understand CSS Grid.
- [CSS Flexbox Tutorial](https://www.youtube.com/watch?v=u044iM9xsWU&t=987s) - This is helped me understand Flexbox better.


## Author

- Frontend Mentor - (https://www.frontendmentor.io/profile/glamorous-chi)

## Acknowledgments

Even though he may never see this, I want to say a Huge thanks to Mr. Kevin Powell for his awesome tutorials on YouTube on CSS Grid and CSS as a whole. -->

# My Node.js and Express Application

This is a RESTful API built with Node.js and Express for managing users.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#Running-the-Application)
- [API Endpoints](#API-Endpoints)
- [Examples of Requests and Responses](#Examples-of-Requests-and-Responses)

## Installation
1. Clone the Repository
```bash
git clone https://github.com/Final-Project-Dec2023/Dec2023.git
cd Dec2023
```
2. Install Dependencies:
Make sure you have Node.js installed on your machine.
```bash 
npm install
```
3. Set up environment variables:
Create a .env file in the root directory of your project and add the following environment variables:
```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
4. Set up the database:
Make sure you have MongoDB installed and running on your local machine. The MONGODB_URL environment variable should point to your local MongoDB instance.

## Running the Application
1. Start the server:
```bash 
npm start
```
The server should now be running on http://localhost:3000.

## API Endpoints
# Users
- GET/api/users
: Get all users
- GET/api/user/:userId
: Retrieve a specific user by ID.
- PUT/api/user/update 
: Update an existing user
- DELETE/api/delete/:userId
: Delete a user
- POST /api/auth/signup: New user Signup.

## Examples of Requests and Responses
# Retrieve All Users



















