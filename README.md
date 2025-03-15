# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Single price grid component solution](#frontend-mentor---single-price-grid-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action
- Show a succssful page after signing up

### Screenshot

![Design Desktop view](./Design%20screenshot/Desktop%20view%20(min-width%20700px).png) **Design Desktop view**
![Design Mobile view](./Design%20screenshot/Mobile%20view%20(min-width%20500px).png) **Design Mobile view**

## My process

I first built the project in steletal mode (html oly), Then I applied style to it(CSS), finanly I used JavaScript to create the successful page. After that, I used Zach Gollwitzer tutorial to apply useful CSS to make the project look likely as it was given in the design folder.

### Built with

- Non-Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I have learned how to place two boxes beside each other in desktop view and below each other in mobile view without searching for the code online.

```css
/*Mobile view*/
@media screen and (max-width: 767px){
    .bottom-box-container {
        display: block;
        
    }
    .left-box, .right-box {
        width: inherit;
        height: auto;
    }
    .right-box {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .box {
        height: 100%;
        width: 100%;
    }
}

/*Desktop & Tablet view*/
@media screen and (min-width: 768px) {
    .bottom-box-container {
        display: flex;
    }
    .left-box {
        border-bottom-left-radius: 20px;
    }
    .right-box {
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 0px;
    }
    .left-box, .right-box {
        flex: 50%;
    }
}
```

I have learned to adjust bullet index

```html
<div class="right-box"> <!--right box start-->
    <h4>Why Us</h4>
    <ul class="reason-list">
        <li>Tutorials by industry experts</li>
        <li>Peer & expert code review</li>
        <li>Coding exercises</li>
        <li>Access to our Github repos</li>
        <li>Community forum</li>
        <li>Flashcard decks</li>
        <li>New videos every week</li>
    </ul>
</div> <!--right box end-->
```

```css
.reason-list {
    list-style-type: none; /*remove bullet*/
    padding: 0; /*remove list index space*/
    color: hsl(218, 22%, 67%);
}
```

I learn how to move a text up as superscript

```html
<span style="color: hsl(218, 22%, 67%); position: relative; top: -2px;"> per month</span>
```

 Also, I am able to display a successful page after clicking a button by using JavaScript to change html tag attribute.

```html
<div id="successPage" class="hide"> <!--successful page start-->
    <h3 style="color: white; font-size: x-large;">THANK YOU</h3>
    <P>You have successfully subscribed to our monthly plan</P>
    <p>****************************************************</p>
</div> <!--successful page end-->
```

```js
function signUp() {
    const mainPage = document.getElementById('mainPage'); //select the main page
    const successfulPage = document.getElementById('successPage'); //select the successful page

    if (successfulPage.className = "hide") {
        mainPage.className = "hide"; //hide main page
        successfulPage.className = "show box"; //show successful page
    }
```

**Thank to Zach Gollwitzer for his JavaScript tutorial (<https://www.youtube.com/@zachgoll>)**

### Useful resources

- [CSS breakpoint list](https://www.seobility.net/en/wiki/Media_Queries) - This helped me to determine the pixel to use for device layout.
- [Media query documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects) - This is an amazing article which helped me finally understand @media query.

## Author

- Frontend Mentor - [@holoIntegratedOps](https://www.frontendmentor.io/profile/holoIntegratedOps)
- GitHub - [HoloIntegratedOps](https://github.com/holoIntegratedOps)
- LinkedIn - [Holo Olagoke](www.linkedin.com/in/holointegratedops)
- Twitter - [@holo_secure_ops](https://www.twitter.com/holoIntegratedOps)
- Facebook - [HoloIntegratedOps](https://web.facebook.com/holo.integrated.ops)

## Acknowledgments

I will say a big THANK YOU to Zach Gollwitzer for his time for been my support for this chanllenge, his step to step tutorial was amazing. How he first rough sketch each box layout with css before going into the real coding and what matter before determining the css breakpoints. Through his JavaScript tutorial I was able to create a successful page using JavaScript. You can learn more about him here [https://www.youtube.com/@zachgol](https://www.youtube.com/@zachgol).

Through him I know Frontend Mentor.

Also I want to thank [Nehal](https://www.frontendmentor.io/profile/NehalSahu8055) for his time to go through my code and gave some amazing CSS tips that make my project look professional
