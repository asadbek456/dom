// console.log(document);

// console.log(document.body);
// console.log(document.head);

// console.log(document.getElementsByTagName("h1"));

// console.log(document.getElementsByClassName("title"));

// console.log(document.getElementById("text").textContent);

// console.log(document.querySelector(".title"));


// console.log(document.getElementById("text").textContent)

// let quti = document.getElementById("id");

// quti.innerHTML = "<li><</li>"

// let lists = document.getElementById("list");

// let li = document.createElement("li");

// li.textContent = "list item 1";

// lists.appendChild(li);



let ism = prompt("ismingizni kiriting");
let title = document.createElement("h1");

title.textContent = ism;
document.body.appendChild(title);