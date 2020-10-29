// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName("header")
const logoTitle = document.getElementById("logoTitle")
const firstCard = document.getElementsByClassName("card")
// B- finding within one particular element
const imageFirstCard = document.getElementsByClassName("card-img-top")
const titleFirstCard = document.getElementsByClassName("card-title")
const subtitleFirstCard = document.getElementsByClassName("card-subtitle")
const textFirstCard = document.getElementsByClassName("card-text")
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navAnchors = document.querySelectorAll("nav a")
// B- Loop over the links and console.log their text content
navAnchors.forEach(anchor => console.log(anchor.textContent))
// C- Turn the collection of links into a real array
const anchorArr = Array.from(navAnchors)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAnchor = anchorArr.filter(item => item.textContent === "Home")

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
document.querySelector('h1').textContent = "Lambda Dog"
document.querySelector('img.card-img-top').src = "https://unsplash.com/photos/RR-FwGB6PEU";

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
