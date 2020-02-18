/* 
Bom - Browser Object Model 
document.querySelector("#id");
Dom - Document Object Model
window.open();

Node

document.body.innerHTML("ik ben een nieuwe paragraaf")



[DOM: Traversing parent <> child elements](https://www.notion.so/DOM-Traversing-parent-child-elements-2679c51ae34c47f3aa9f2b9bde1f0255)
*/
const bookList = document.querySelector('#book-list')

console.log('the parent node is:', bookList.parentNode);
console.log('the parent element is:', bookList.parentElement.parentElement); // Met de laatste ga je nog een niveau hoger

console.log(bookList.childNodes);
console.log(bookList.children); // To get the element children

//Traversing from sibling to sibling

const bookList = document.querySelector('#book-list')

console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyone else!'