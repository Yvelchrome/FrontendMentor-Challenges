![Yvelchrome x Frontend Mentor](https://user-images.githubusercontent.com/55931217/173252483-facf776d-ac95-455f-9933-98dd79c35e41.png)

# Frontend Mentor - Interactive rating component

This is a solution to the [interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Me!](#me)

## Overview

### Screenshots

![](https://user-images.githubusercontent.com/55931217/180612110-9d507e98-b87f-47e6-ba0e-06fee2a36d7e.png)

### Links

- Solution URL : https://www.frontendmentor.io/solutions/interactive-rating-component-vX5EufF2mC
- Live Site URL : https://interactive-rating-yvelchrome.netlify.app
  <br/>
  [![Netlify Status](https://api.netlify.com/api/v1/badges/25b62383-3a8d-405b-bc9d-70c35f746e5d/deploy-status)](https://app.netlify.com/sites/interactive-rating-yvelchrome/deploys)

## My process

### Built with

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=black)

### What I learned

The main things I learned in this challenge are in JavaScript.

The first one is the possibility to add and/or remove a class from an element, I used it here to give a different style to the rating buttons onClick and make them stay that way until I click on another one; which then remove the style from the previously clicked one and apply it to the new.

```js
Array.prototype.forEach.call(buttons, function (button) {
  button.classList.remove("active");
});
evt.target.classList.add("active");
```

<br/>
The other one is the use of the LocalStorage to save the rating value.

`main.js`

```js
value = evt.target.value;
localStorage.setItem("rating", value);
```

`storedRating.js`

```js
let storedRating = localStorage.getItem("rating");
let rating_value = `<span class="rating">You selected ${storedRating} out of 5</span>`;
document.getElementById("value").innerHTML = rating_value;
```

## Me!

- Frontend Mentor - [@yvelchrome](https://www.frontendmentor.io/profile/yvelchrome)
- LinkedIn - [@Steven Godin](https://www.linkedin.com/in/steven-godin/)
