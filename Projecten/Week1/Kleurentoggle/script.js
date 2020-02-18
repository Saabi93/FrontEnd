// Testing output on console
console.log("is this working?")

// Closing dropdown onClick
/*
let coll = document.getElementsByClassName("collapse");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  
} */
// Waarom werkt dit niet? !@#$%



// Defining background colors
let button = document.querySelector("button");

function white(){
	document.body.style.backgroundColor = "white";
  console.log(document.body.style.backgroundColor); // white
};
function red(){
	document.body.style.backgroundColor = "red";
  console.log(document.body.style.backgroundColor); // red
};
function blue(){
	document.body.style.backgroundColor = "blue";
  console.log(document.body.style.backgroundColor); // blue
};
function green(){
	document.body.style.backgroundColor = "green";
  console.log(document.body.style.backgroundColor); // green
};
function yellow(){
	document.body.style.backgroundColor = "yellow";
  console.log(document.body.style.backgroundColor); // yellow
};

// Defining button colors
button.addEventListener("click", red);
button.addEventListener("click", blue);
button.addEventListener("click", green);
button.addEventListener("click", yellow);
button.addEventListener("click", white);

