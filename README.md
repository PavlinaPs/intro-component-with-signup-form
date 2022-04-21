# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

| Desktop layout |
|:--:|
![Desktop layout](./screenshots/screenshot-desktop.jpg)

| Mobile layout |
|:--:|
![Mobile layout](./screenshots/screenshot-mobile-top.jpg) ![Mobile layout](./screenshots/screenshot-mobile-bottom.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Mobile-first workflow

### What I learned

I used Sass again in this challenge, I can see its advantages. Still not sure I have the files organized right.

#### Backgrounds

The background images look different on the design images than on the .png in starter files. I adjusted contrast with filter property, it is close, but not the same.
I also needed to make sure it is only applied to the background image and not to the red background color. I found this article on CSS-TRICKS and used it.
[Apply a Filter to a Background Image](https://css-tricks.com/apply-a-filter-to-a-background-image/)

```css
.intro {
    position: relative;
    background-color: $red;
    ...
}

.intro::before {
    content: '';
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    background-image: url(../../images/bg-intro-mobile.png);
    background-repeat: no-repeat;
    filter: contrast(10);
}
```
This way the red background color stays the same.

#### Shadows
While at it, I also used the filter property as a box shadows: 
```css
.intro {
    ...
    filter: drop-shadow(1.5rem 1.5rem 0.2rem rgba(0, 0, 0, 0.05));
}
```
#### JavaScript validation
Great challenge to practise DOM manipulation.
I think the validation works well and I did my best.

### Continued development

I would like to keep using what I've learend and I'm looking forward to new challenges.

### Useful resources

- [filter CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) on MDN
- [Stop using @import with Sass | @use and @forward explained](https://youtu.be/CR-a8upNjJ0), [Get your stylesheets more organized with Sass partials](https://youtu.be/9Ld-aOKsEDk) Kevin Powell's tutorials on YouTube.

## Author

- GitHub - [PavlinaPs](https://github.com/PavlinaPs)
- Frontend Mentor - [@PavlinaPs](https://www.frontendmentor.io/profile/PavlinaPs)

## Acknowledgments

It is great that I can solve Frontend Mentor's challenges. They are all very useful for me. Thank you!