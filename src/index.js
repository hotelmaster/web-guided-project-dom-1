// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName("header")
const logoTitle = document.getElementById("logoTitle")
const firstCard = document.querySelector("div.card")
// B- finding within one particular element
const imageFirstCard = document.querySelector("img.card-img-top")
const titleFirstCard = document.querySelector("h2.card-title")
const subtitleFirstCard = document.querySelector("h3.card-subtitle")
const textFirstCard = document.querySelector("p.card-text")
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
logoTitle.textContent = "Lambda Dog"
imageFirstCard.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
textFirstCard.textContent = "Stop it fren heckin heck lotsa pats very taste wow doing me a frighten, you are doin me a concern ruff heckin shooberino, ur givin me a spook tungg noodle horse mlem. Doge borkdrive shoob adorable doggo doggo the neighborhood pupper ruff fluffer, smol doggo shoob woofer doggorino most angery pupper I have ever seen. Heckin angery woofer porgo pats shooberino big ol wow such tempt corgo, fluffer long bois adorable doggo vvv adorable doggo, shoob ruff shooberino ruff shibe."
link2FirstCard.textContent = "Dog Ipsum"
//  B- Have the students research online the difference between textContent and innerText

// textContent will only display the text portion of an html element
// innerText will place actual html including tags into the html file

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.style.color = "purple"
link2FirstCard.style.color = "dodgerblue"
document.querySelector("div.card-group").style.backgroundColor = "grey"
//  B- Using .setAttribute to change a few attributes
titleFirstCard.setAttribute("style", "color:blue;" )
subtitleFirstCard.setAttribute("style", "color:orange;")
// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
textFirstCard.classList.add("doggyText")
textFirstCard.style.padding = "8%";
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const aCreation = document.createElement('a')
aCreation.textContent = "Blog"
const aParent = document.getElementById("mainNav")
aParent.appendChild(aCreation)

// const newText = document.createTextNode("wolf wolf")
// aParent.appendChild(newText)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
var cardCln = firstCard.cloneNode(true)
const bigContainer = document.querySelector("div.card-group")
bigContainer.appendChild(cardCln)
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// const navAnchors = document.querySelectorAll("nav a") 
// because navAnchors is a nodelist, forEach can be used and remove method on each one
// The anchors will be removed, but not the appended child element "Blog" 
navAnchors.forEach(el => el.remove())
// Put them back!
for(let i = 0; i < 3; i++) {
    if(i == 0) {
        const contactIsBack = document.createElement('a')
        contactIsBack.textContent = "Contact"
        // aParent holds the nav element as a value
        aParent.prepend(contactIsBack)
    }
    else if(i == 1) {
        const aboutIsBack = document.createElement('a')
        aboutIsBack.textContent = "About"
        // aParent holds the nav element as a value
        aParent.prepend(aboutIsBack)
    }
    else if(i == 2) {
        const homeIsBack = document.createElement('a')
        homeIsBack.textContent = "Home"
        // aParent holds the nav element as a value
        aParent.prepend(homeIsBack)
    }
}
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

// "afterbegin" - After the beginning of the element (as the first child)
// "afterend" - After the element
// "beforebegin" - Before the element
// "beforeend" - Before the end of the element (as the last child)

cardCln.insertAdjacentHTML("afterend", "<img src='https://images.unsplash.com/photo-1579578253176-e4d23d7da02c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'>");