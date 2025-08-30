// Selecting Elements

// //GetElementByID()

// const title = document.getElementById("main-heading");
// console.log(title);

// //GetElementByClassname()
// // const listItem = document.getElementsByClassName("list-items");
// // console.log(listItem);

// //GetElementByTagName()

// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

//Styling Elements

// const title = document.querySelector("#main-heading");
// title.style.color = "red";

// console.log(title);

// const listItem = document.querySelectorAll(".list-items");

// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = "5rem";
// }

//Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

//Adding Elements

ul.append(li);

//Modifying Elements

li.innerText = "Mirchi";

// Modifying Attribute & Classes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");
li.classList.add("list-items");
console.log(li.classList.contains("list-items"));
