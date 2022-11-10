// ==============================
//       1_3
// ==============================
const myList = document.querySelector("#myList");

const unten = document.querySelector(".unten");

let output = document.getElementById("output");
console.log(output)
let newOutputField = document.createElement("p");


const firstElementChild = myList.firstElementChild.innerHTML;

const lastElementChild = myList.lastElementChild.innerHTML;

const secondElementChild = myList.firstElementChild.nextElementSibling.innerHTML;

const penultimateElementChild = myList.lastElementChild.previousElementSibling.innerHTML;

const firstButton = unten.firstElementChild;

const secondButton = unten.firstElementChild.nextElementSibling.nextElementSibling;

const thirdButton = unten.lastElementChild.previousElementSibling.previousElementSibling;

const fourthButton = unten.lastElementChild;

firstButton.addEventListener("click", () => {
    output.textContent = firstElementChild;
    console.log("firstButton clicked")
})

secondButton.addEventListener("click", () => {
    output.textContent = lastElementChild;
    console.log("secondButton clicked")
})

thirdButton.addEventListener("click", () => {
    output.textContent = secondElementChild;
    console.log("thirdButton clicked")
})

fourthButton.addEventListener("click", () => {
    output.textContent = penultimateElementChild;
    console.log("fourthButton clicked")
})

// ==============================
//       1_9
// ==============================

const selectElement = document.querySelector("#farbeAuswahlen");
const deleteElement = document.querySelector("#button");
const selectedColor = selectElement.selectedIndex;

deleteElement.addEventListener("click", (event) => {
    event.preventDefault();
    const selectIndex = selectElement.selectedIndex;
    selectElement.remove(selectIndex)
})

// ==============================
//       2_7
// ==============================

// create new elements in the div 
// write the index number into the new element
// if index % 10 === 0 OR index === 0, use class .weiss
// otherwise use class .rechteck

const button = document.getElementById("exercise2_8button");
const umwickeln = document.getElementsByClassName("umwickeln")
console.log(umwickeln)

let numArray = [];
let i = -1;

button.addEventListener("click", () => {
    numArray.push(i++);
    console.log(numArray)
    const newP = document.createElement("p");
    const newText = `${i}`
    newP.innerHTML = newText;
    umwickeln[0].appendChild(newP);

    if (i % 10 === 0 || i === 0) {
        newP.classList.add("rechteck")
        newP.classList.add("weiss")
    } else {
        newP.classList.add("rechteck")
    }
})

// ==============================
//       2_8
// ==============================
// enter event keycode = 13

const existingUl = document.getElementById("list");
// const existingUl = document.getElementsByTagName("ul");
// let existingUlArray = Array.from(existingUl);
// console.log(existingUlArray)
const existingLi = document.getElementsByTagName("li");
let shoppingList = Array.from(existingLi);

const submitButton = document.getElementById("enter");

// Trigger function with enter or submit button
submitButton.addEventListener("click", addItem);
window.addEventListener("keydown", (e) => { // for any keydown while the window is focused, check whether the key pressed was Enter and if so, run the function
    if (e.code === "Enter") {
        addItem();
    }
})

// function
function addItem() {
    let userInputItem = document.getElementById("userinput").value;
    const liNew = document.createElement("li");
    liNew.textContent = userInputItem;
    existingUl.appendChild(liNew);
    document.getElementById("userinput").value = ""; // clears input field after running function
}



