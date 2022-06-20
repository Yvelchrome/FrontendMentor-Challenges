![Yvelchrome x Frontend Mentor](https://user-images.githubusercontent.com/55931217/173252483-facf776d-ac95-455f-9933-98dd79c35e41.png)

# Frontend Mentor - NFT preview card component

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Me!](#me)

## Overview

### Screenshot

![](https://user-images.githubusercontent.com/55931217/174507976-2d962372-f424-48bf-879b-cb0741f3b1b8.png)

### Links

- Solution URL : https://www.frontendmentor.io/solutions/nft-preview-card-component-cyWKImYwwN
- Live Site URL : https://nft-card-yvelchrome.netlify.app

## My process

### Built with

![HTML](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![CSS](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)

### What I learned

In this challenge I learned about 2 things.<br/>
The first thing are the CSS custom properties (variables), I'll make sure to use them from now on, especially on projects that could require me to change the same property of multiple elements at the same time.

```css
:root {
  --main-background: hsl(217, 54%, 11%);
  --card-background: hsl(216, 50%, 16%);
  --line-color: hsl(215, 32%, 27%);
  --white: hsl(0, 0%, 100%);
  --soft-blue: hsl(215, 51%, 70%);
  --cyan: hsl(178, 100%, 50%);
  --paragraph-font-size: 18px;
  --padding: 1.4rem;
}
```

The second one is the CSS "hover" pseudo-class, I used it to change the color of certain element of the component but also add a overlay to the main image (which I struggled to do 😅​)

```css
.overlay {
  position: absolute;
  top: 1.4rem;
  width: 18.2rem;
  height: 18.2rem;
  background-color: hsl(178, 100%, 50%, 60%);
  opacity: 0;
  transition: opacity 0.6s;
  border-radius: 0.6rem;
}

.overlay img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay:hover {
  cursor: pointer;
  opacity: 1;
}
```

Those are the ressources from the MDN Web Docs :

- [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS hover pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)

### Other things I learned~

It's possible to change the shape of the cursor when hovering something by using this property in CSS :

```css
cursor: cursor-type;
```

[MDN Web Doc - Cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
<br/><br/>
It's also possible to add a "space" character in a paragraph/... in HTML thanks to this :

```
"Type "&nbsp" to add a single space.
Type "&ensp" to add 2 spaces.
Type "&emsp" to add 4 spaces."
```

I used it for exemple to separate my paragraph element from the anchor element here :

```html
<div class="nft-creator">
  <img src="./images/image-avatar.png" alt="creator avatar" />
  <p>Creation of&nbsp</p>
  <a href="#">Jules Wyvern</a>
</div>
```

<br/>

## Me!

- Frontend Mentor - [@yvelchrome](https://www.frontendmentor.io/profile/yvelchrome)
- LinkedIn - [@Steven Godin](https://www.linkedin.com/in/steven-godin/)
